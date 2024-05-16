import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';

import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';

@Controller('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post('generate')
  generateApiKey(@Body() plan: any): Promise<string> {
    console.log(plan);
    return this.apiKeysService.generateApiKey(plan.subscriptionPlan);
  }

  // @Post()
  // create(@Body() createApiKeyDto: CreateApiKeyDto) {
  //   return this.apiKeysService.create(createApiKeyDto);
  // }

  // @Get()
  // findAll() {
  //   return this.apiKeysService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.apiKeysService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateApiKeyDto: UpdateApiKeyDto) {
  //   return this.apiKeysService.update(+id, updateApiKeyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.apiKeysService.remove(+id);
  // }
}
