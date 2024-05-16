import { Injectable, ExecutionContext } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiKeysService } from 'src/api-keys/api-keys.service';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ApiKeyThrottlerGuard extends ThrottlerGuard {
  async handleRequest(context: ExecutionContext): Promise<boolean> {
    console.log('HELLO THROTTLER');
    const apiKey = context.switchToHttp().getRequest().header('X-API-KEY');
    const prismaService = new PrismaService();
    const apiKeysService = new ApiKeysService(prismaService);
    const subscriptionPlan =
      await apiKeysService.getSubscriptionPlanFromDatabase(apiKey);
    const throttlerOptions = {
      ttl: 60, // 1 minute
      limit: 0, // default limit
    };
    console.log('sub-Plan', subscriptionPlan);
    if (subscriptionPlan === 'basic') {
      throttlerOptions.limit = 15; // apply a limit of 50 requests per minute for basic plan
    } else if (subscriptionPlan === 'premium') {
      throttlerOptions.limit = 30; // apply a limit of 200 requests per minute for premium plan
    }
    console.log(
      super.handleRequest(
        context,
        throttlerOptions.limit,
        throttlerOptions.ttl,
        throttlerOptions,
        () => undefined, // getTracker
        () => undefined, // generateKey
      ),
    );
    console.log('Testing prem');
    return super.handleRequest(
      context,
      throttlerOptions.limit,
      throttlerOptions.ttl,
      throttlerOptions,
      () => undefined, // getTracker
      () => undefined, // generateKey
    );
  }
}
