import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRemoteIdentifier } from 'src/remoteidentifier/dtos/CreateRemoteIdenfier.dto';
import { RemoteidentifierService } from 'src/remoteidentifier/services/remoteidentifier/remoteidentifier.service';

@Controller('remoteidentifier')
export class RemoteidentifierController {
  userService: any;
  constructor(
    private readonly remoteIdentifierService: RemoteidentifierService,
  ) {}

  @Get()
  async getRemoteIdentifier(): Promise<CreateRemoteIdentifier[]> {
    return this.remoteIdentifierService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  setRemoteIdenfier(@Body() remotedata: CreateRemoteIdentifier) {
    return this.remoteIdentifierService.create(remotedata);
  }
}
