import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Observable } from 'rxjs';

@Injectable()
export class BackendInterceptor implements NestInterceptor {
  constructor(private configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const api_key = req.headers.api_key;
    const frontendApiKey = this.configService.get<string>('FRONTEND_API_KEY');

    if (!api_key || api_key !== frontendApiKey) {
      throw new BadRequestException('Invalid API KEY');
    }

    return next.handle();
  }
}
