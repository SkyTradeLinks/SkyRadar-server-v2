import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { configs } from '../../config/index';
import { SIWWeb3 } from '@web3auth/sign-in-with-web3';
import { Request, Response, NextFunction } from 'express';

const MAX_SIGN_VALIDATION = 5; // 5 minutes

@Injectable()
export class AuthSignatureMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { sign, sign_issue_at, sign_nonce, sign_address } = req.headers;

    const issuedAtDate = new Date(sign_issue_at as unknown as string);
    const currentDate = new Date();
    const diffInMinutes =
      (currentDate.getTime() - issuedAtDate.getTime()) / 1000 / 60;

    if (diffInMinutes > MAX_SIGN_VALIDATION) {
      throw new HttpException('INVALID_SIGNATURE', HttpStatus.NOT_ACCEPTABLE);
    }
    try {
      const message = new SIWWeb3({
        header: configs.WEB3_HEADER,
        payload: {
          domain: configs.FRONTEND_DOMAIN,
          address: String(sign_address),
          statement: 'Sign in to SkyTrade app.', // todo: set the same message on the frontend in configs
          uri: configs.FRONTEND_URI,
          version: '1',
          chainId: 1,
          nonce: String(sign_nonce),
          issuedAt: String(sign_issue_at),
        },
        network: configs.WEB3_NETWORK,
      });

      const signature = {
        t: 'sip99',
        s: sign,
      };
      const messagePayload = message.payload;

      const resp = await message.verify(messagePayload, signature);

      if (resp.success) {
        next();
      } else {
        throw new HttpException(
          'The signature does not match the address',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch {
      throw new HttpException(
        'Encountered server error while verifying signature',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
