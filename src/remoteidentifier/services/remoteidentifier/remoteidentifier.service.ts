import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRemoteIdentifier } from 'src/remoteidentifier/dtos/CreateRemoteIdenfier.dto';

@Injectable()
export class RemoteidentifierService {
  constructor(
    @InjectModel('Remoteidentifier')
    private readonly remoteIdentifierModel: Model<CreateRemoteIdentifier>,
  ) {}
  async findAll(): Promise<CreateRemoteIdentifier[]> {
    return await this.remoteIdentifierModel.find().exec();
  }

  async create(user: CreateRemoteIdentifier): Promise<CreateRemoteIdentifier> {
    const newUser = new this.remoteIdentifierModel(user);
    return await newUser.save();
  }
}
