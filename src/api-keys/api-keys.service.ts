import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ApiKeysService {
  constructor(private prismaService: PrismaService) {}
  async generateApiKey(subscriptionPlan: string): Promise<string> {
    const apiKey = uuidv4();

    const generatedApiKey = apiKey;
    console.log(generatedApiKey);

    // Store the API key in the database
    const apiKeyEvent = await this.prismaService.apiKeys.create({
      data: {
        apiKey: generatedApiKey,
        subscriptionPlan: { connect: { name: subscriptionPlan } },
        rateLimit: await this.getRateLimitForPlan(subscriptionPlan), // implement this function to retrieve the rate limit based on the subscription plan
      },
    });

    console.log('Event', apiKeyEvent);
    if (subscriptionPlan === 'basic') {
      return `BASIC-${apiKey}`;
    } else if (subscriptionPlan === 'premium') {
      return `PREMIUM-${apiKey}`;
    }
    console.log('Api-key', generatedApiKey);
    return apiKey;
  }

  async getRateLimitForPlan(subscriptionPlan: string): Promise<number> {
    const plan = await this.prismaService.subscriptionPlan.findUnique({
      where: { name: subscriptionPlan },
    });

    if (!plan) {
      throw new Error(`Subscription plan not found: ${subscriptionPlan}`);
    }

    return plan.limit;
  }

  async getSubscriptionPlanFromDatabase(apiKey) {
    const key = await this.prismaService.apiKeys.findUnique({
      where: { apiKey: apiKey },
    });

    if (!key) {
      throw new Error(`APIKEY not found: ${key}`);
    }

    return key.subscriptionPlanId;
  }

  async getSubscriptionPlan(id) {
    const subscriptionPlan =
      await this.prismaService.subscriptionPlan.findUnique({
        where: { id: id },
      });

    if (!subscriptionPlan) {
      throw new Error(`Plan not found: ${subscriptionPlan}`);
    }

    return subscriptionPlan;
  }

  // create(createApiKeyDto: CreateApiKeyDto) {
  //   return 'This action adds a new apiKey';
  // }

  // findAll() {
  //   return `This action returns all apiKeys`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} apiKey`;
  // }

  // update(id: number, updateApiKeyDto: UpdateApiKeyDto) {
  //   return `This action updates a #${id} apiKey`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} apiKey`;
  // }
}
