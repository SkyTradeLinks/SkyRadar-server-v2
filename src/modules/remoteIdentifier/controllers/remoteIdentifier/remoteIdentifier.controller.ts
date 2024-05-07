import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';
import { DeviiClient } from 'src/graphQL/deviiClient';

@Controller('remoteIdentifier')
@ApiTags('remoteIdentifier')
@UseInterceptors(BackendInterceptor)
export class RemoteIdentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  @UsePipes(new ValidationPipe())
  async createRemoteIdentifier(@Body() remotedata: RemoteIdentifierDto) {
    return this.remoteIdentifierService.createRemoteIdentifierService(
      remotedata,
    );
  }

  @Get('graphql/getDroneData')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getDronesData(@Body() data: any) {
    const deviiClient = new DeviiClient('https://api.devii.io/auth');
    await deviiClient.login({
      login: process.env.EMAIL,
      password: process.env.PASSWORD,
      tenantid: process.env.TENANTID,
    });
    try {
      const res = await deviiClient.getDroneData(data.query);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
