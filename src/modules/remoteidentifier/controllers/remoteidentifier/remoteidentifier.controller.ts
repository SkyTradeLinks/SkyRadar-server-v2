import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RemoteidentifierService } from '../../services/remoteidentifier/remoteidentifier.service';

@Controller('remoteidentifier')
export class RemoteidentifierController {
  userService: any;
  constructor(
    private readonly remoteIdentifierService: RemoteidentifierService,
  ) {}

  @Get()
  async getRemoteIdentifier() {}

  @Post()
  @UsePipes(new ValidationPipe())
  async insertRemoteIdentifier() {}
}
