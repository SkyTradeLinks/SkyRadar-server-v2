import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { SIWWeb3 } from '@web3auth/sign-in-with-web3';
import { ConfigService } from '@nestjs/config';

const MAX_SIGN_VALIDATION = 5; // 5 minutes

@Injectable()
export class AuthSignatureMiddleware implements NestInterceptor {
  constructor(private configService: ConfigService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const req = context.switchToHttp().getRequest();
    const { sign, sign_issue_at, sign_nonce, sign_address } = req.headers;

    console.log({ sign, sign_issue_at, sign_nonce, sign_address });

    const issuedAtDate = new Date(sign_issue_at);
    const currentDate = new Date();
    const diffInMinutes =
      (currentDate.getTime() - issuedAtDate.getTime()) / 1000 / 60;

    if (diffInMinutes > MAX_SIGN_VALIDATION) {
      throw new HttpException('INVALID_SIGNATURE', HttpStatus.NOT_ACCEPTABLE);
    }

    // console.log({ sign_issue_at, issuedAtDate }, issuedAtDate.getTime());

    // console.log({ headers: req.headers });
    // console.log(configs.FRONTEND_DOMAIN);
    // console.log(configs.FRONTEND_URI);

    const header = this.configService.get('WEB3_HEADER');
    const domain = this.configService.get<string>('FRONTEND_DOMAIN');
    const uri = this.configService.get<string>('FRONTEND_URI');
    const network = this.configService.get<string>('WEB3_NETWORK');

    console.log({
      header: { t: 'sip99' },
      payload: {
        domain,
        address: sign_address,
        statement: 'Sign in to SkyTrade app.', // todo: set the same message on the frontend in configs
        uri,
        version: '1',
        chainId: 1,
        nonce: sign_nonce,
        issuedAt: sign_issue_at,
      },
      network: 'solana',
    });

    const message = new SIWWeb3({
      header,
      payload: {
        domain,
        address: sign_address,
        statement: 'Sign in to SkyTrade app.', // todo: set the same message on the frontend in configs
        uri,
        version: '1',
        chainId: 1,
        nonce: sign_nonce,
        issuedAt: sign_issue_at,
      },
      network,
    });

    console.log({ message });

    const signature = {
      t: 'sip99',
      s: sign,
    };
    const messagePayload = message.payload;

    const res = await message.verify(messagePayload, signature);
    console.log({ res });

    if (res.success) {
      return next.handle();
    } else {
      throw new HttpException(
        'The signature does not match the address',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
}
