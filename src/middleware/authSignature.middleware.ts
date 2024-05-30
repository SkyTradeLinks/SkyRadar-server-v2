import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { SIWWeb3 } from '@web3auth/sign-in-with-web3';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

const MAX_SIGN_VALIDATION = 5; // 5 minutes

@Injectable()
export class AuthSignatureMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  async use(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { sign, sign_issue_at, sign_nonce, sign_address } = req.headers;

    console.log({ sign, sign_issue_at, sign_nonce, sign_address });

    console.log({ headers: req.headers });

    const issuedAtDate = new Date(sign_issue_at as unknown as string);
    const currentDate = new Date();
    const diffInMinutes =
      (currentDate.getTime() - issuedAtDate.getTime()) / 1000 / 60;

    if (diffInMinutes > MAX_SIGN_VALIDATION) {
      throw new HttpException('INVALID_SIGNATURE', HttpStatus.NOT_ACCEPTABLE);
    }
    const header = this.configService.get('WEB3_HEADER');
    const domain = this.configService.get<string>('FRONTEND_DOMAIN');
    const uri = this.configService.get<string>('FRONTEND_URI');
    const network = this.configService.get<string>('WEB3_NETWORK');

    try {
      const message = new SIWWeb3({
        header,
        payload: {
          domain,
          address: String(sign_address),
          statement: 'Sign in to SkyTrade app.', // todo: set the same message on the frontend in configs
          uri,
          version: '1',
          chainId: 1,
          nonce: String(sign_nonce),
          issuedAt: String(sign_issue_at),
        },
        network,
      });

      const signature = {
        t: 'sip99',
        s: sign,
      };
      const messagePayload = message.payload;

      const resp = await message.verify(messagePayload, signature);
      console.log({ resp });

      if (resp.success) {
        next();
      } else {
        throw new BadRequestException(
          'The signature does not match the address',
        );
      }
    } catch {
      throw new BadRequestException(
        'Encountered server error while verifying signature',
      );
    }
  }
}
