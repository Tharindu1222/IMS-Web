import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Import InjectModel from Mongoose
import { Model } from 'mongoose'; // Import Model from Mongoose
import { Ims } from './app.entity'; // Import the Ims schema (No need to import ImsSchema here)
import { CreateImsDto } from './app.dto';

@Injectable()
export class ImsServices {
  constructor(
    @InjectModel('Ims') private readonly imsModel: Model<Ims>, // Use Mongoose's Model
  ) {}

  // Create a new ad
  async create(createImsDto: CreateImsDto): Promise<Ims> { 
    const ims = new this.imsModel(createImsDto);
    return ims.save(); // Use Mongoose's save method
  }

  // Update an existing ad by ID
  async update(id: string, updateImsDto: CreateImsDto): Promise<Ims> { 
    const ims = await this.imsModel.findById(id).exec(); // Use Mongoose's findById
    if (!ims) {
      throw new NotFoundException(`Ims with ID ${id} not found`);
    }
    Object.assign(ims, updateImsDto); // Update the ims with new data
    return ims.save(); // Save the updated ims
  }

  // Find an ims by ID
  async findOne(id: string): Promise<Ims> { 
    const ims = await this.imsModel.findById(id).exec(); // Use Mongoose's findById
    if (!ims) {
      throw new NotFoundException(`Ims with ID ${id} not found`);
    }
    return ims;
  }

  // Get all ims
  async findAll(): Promise<Ims[]> { // Add method to fetch all ims
    return this.imsModel.find().exec(); // Fetch all ims
  }

  // Delete an ims by ID
  async delete(id: string): Promise<void> { 
    const result = await this.imsModel.findByIdAndDelete(id).exec(); // Use Mongoose's findByIdAndDelete
    if (!result) {
      throw new NotFoundException(`Ims with ID ${id} not found`);
    }
  }
}
