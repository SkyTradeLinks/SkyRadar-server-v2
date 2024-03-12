import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RemoteidentifierService {
  constructor(private readonly remoteIdentifierModel: PrismaService) {}
}
