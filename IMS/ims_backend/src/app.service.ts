import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ims } from './ims.schema';
import { CreateImsDto } from './app.dto';

@Injectable()
export class ImsServices {
  constructor(
    @InjectModel(Ims.name) private readonly imsModel: Model<Ims>,
  ) {}

  async create(createImsDto: CreateImsDto): Promise<Ims> {
    try {
      const ims = new this.imsModel(createImsDto);
      return await ims.save();
    } catch (error) {
      throw new InternalServerErrorException('Error creating Ims');
    }
  }

  async findAll(): Promise<Ims[]> {
    try {
      return this.imsModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching Ims data');
    }
  }

  async findOne(id: string): Promise<Ims> {
    try {
      return this.imsModel.findById(id).exec();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching the Ims');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.imsModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new InternalServerErrorException('Error deleting the Ims');
    }
  }
}
