import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { AirRightsService } from './air-rights.service';
import { BackendInterceptor } from 'src/common/interceptors/backend.interceptor';

@ApiTags('Air-rights Price')
@Controller('air-rights')
@UseInterceptors(BackendInterceptor)
export class AirRightsController {
  constructor(private readonly airRightsService: AirRightsService) {}

  @Get('/search/markets')
  @ApiOperation({ summary: 'Search for supported markets' })
  @ApiQuery({
    name: 'query',
    required: true,
    description: 'Current City to be applied to request',
  })
  async searchMarkets(@Query('query') query: string) {
    return await this.airRightsService.searchMarkets(query);
  }

  @Get('/market/price')
  @ApiOperation({ summary: 'Get price for a specified GEO_ID in a CITY' })
  @ApiQuery({
    name: 'geoid',
    required: true,
    description: 'Current Geoid to be applied to request',
  })
  async findPrice(@Query('geoid') geoid: string) {
    const result = await this.airRightsService.searchMarket(geoid);
    return await this.airRightsService.findPrice(result, geoid);
  }
}
