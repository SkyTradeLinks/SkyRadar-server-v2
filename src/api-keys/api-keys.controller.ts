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

interface Plan {
  subscriptionPlan: string;
}
@Controller('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post('generate')
  generateApiKey(@Body() plan: Plan): Promise<string> {
    console.log(plan);
    return this.apiKeysService.generateApiKey(plan.subscriptionPlan);
  }
}
