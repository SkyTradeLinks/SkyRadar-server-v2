import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { RemoteIdentifierService } from '../../services/remoteIdentifier/remoteIdentifier.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { RemoteIdentifierDto } from '../../dtos/remoteIdentifier.dto';
import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';
import { ComposeDbClientService } from 'src/compose-db_client/compose-db_client.service';

@Controller('remoteIdentifier')
@ApiTags('remoteIdentifier')
@UseInterceptors(BackendInterceptor)
export class RemoteIdentifierController {
  constructor(
    private readonly remoteIdentifierService: RemoteIdentifierService,
    private readonly composeDbClientService: ComposeDbClientService,
  ) {}
  @Post('/store-drone-signal')
  @ApiOperation({ summary: 'Create Remote Identification' })
  @ApiCreatedResponse({ description: 'Remote Identifiction has been created' })
  @UsePipes(new ValidationPipe())
  async createRemoteIdentifier(@Body() remotedata: RemoteIdentifierDto) {
    return this.remoteIdentifierService.createRemoteIdentifierService(
      remotedata,
    );
  }

  @Get('/get-ceramic-drone-data')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getCeramicDroneData(
    @Query('lon1') lon1: string,
    @Query('lat1') lat1: string,
    @Query('lon2') lon2: string,
    @Query('lat2') lat2: string,
  ) {
    return await this.composeDbClientService.getCeramicDroneData({
      lon1,
      lat1,
      lon2,
      lat2,
    });
  }

  @Get('/get-sql-drone-data')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getSqlDroneData(
    @Query('lon1') lon1: string,
    @Query('lat1') lat1: string,
    @Query('lon2') lon2: string,
    @Query('lat2') lat2: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('page', ParseIntPipe) limit: number,
  ) {
    return await this.remoteIdentifierService.getSqlDroneData({
      lon1,
      lat1,
      lon2,
      lat2,
      page,
      limit,
    });
  }

  @Get('/get-drone-aggregate')
  @ApiOperation({ summary: 'Fetch drones data' })
  async getAggregateDroneData(
    @Query('lon1') lon1: number,
    @Query('lat1') lat1: number,
    @Query('lon2') lon2: number,
    @Query('lat2') lat2: number,
  ) {
    return await this.remoteIdentifierService.getAggregateDroneData({
      lon1,
      lat1,
      lon2,
      lat2,
    });
  }
}
