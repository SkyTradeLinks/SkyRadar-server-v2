import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
  UsePipes,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
// import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';
import { ComposeDbClientService } from 'src/compose-db_client/compose-db_client.service';
// import composedbClient from 'src/compose-db_client/composeDB';
import { ApiKeyThrottlerGuard } from './throttle-guard';

interface Params {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
}

@Controller('remoteIdentifier')
@ApiTags('remoteIdentifier')
// @UseInterceptors(BackendInterceptor)
export class RemoteIdentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
    private readonly composeDbClientService: ComposeDbClientService,
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

  @Post('/create/remoteData')
  @ApiOperation({ summary: 'Create Remote Identification ON COMPOSE DB' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  // @UsePipes(new ValidationPipe())
  async createcomposeDB() {
    // const composeDBClient = new composedbClient();

    return this.composeDbClientService.createRemoteData();
  }

  @Get('/getRemoteData')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getRemoteData(
    @Query('lon1') lon1: number,
    @Query('lat1') lat1: number,
    @Query('lon2') lon2: number,
    @Query('lat2') lat2: number,
  ) {
    const params: Params = {
      lon1,
      lat1,
      lon2,
      lat2,
    };
    console.log('here', params);

    return await this.composeDbClientService.getDroneData(params);
  }

  @Get('/getDrones')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getDrones(
    @Query('lon1') lon1: number,
    @Query('lat1') lat1: number,
    @Query('lon2') lon2: number,
    @Query('lat2') lat2: number,
    @Query('page') page: number,
  ) {
    const params = {
      lon1,
      lat1,
      lon2,
      lat2,
      page: parseInt(page.toString()),
    };
    console.log('here', params);

    return await this.remoteIdentifierService.getDrones(params);
  }

  @Get('/getDroneData')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getDroneData(
    @Query('lon1') lon1: number,
    @Query('lat1') lat1: number,
    @Query('lon2') lon2: number,
    @Query('lat2') lat2: number,
  ) {
    const params: Params = {
      lon1,
      lat1,
      lon2,
      lat2,
    };
    console.log('here', params);

    return await this.remoteIdentifierService.getDroneData(params);
  }
}
