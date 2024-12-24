import { Controller, Post, Body, Put, Param, Get, Delete } from '@nestjs/common';
import { ImsServices } from './app.service';
import { CreateImsDto } from './app.dto';
import { Ims } from './app.entity';

@Controller('ims')
export class ImsController {
  constructor(private readonly imsService: ImsServices) {}

  @Post()
  createIms(@Body() createImsDto: CreateImsDto): Promise<Ims> {
    return this.imsService.create(createImsDto);
  }

  @Get() // This was missing the actual method definition
  getims(): Promise<Ims[]> { // Imsded return type and fixed method name
    return this.imsService.findAll();
  }

  @Put(':id')
  updateIms(@Param('id') id: string, @Body() updateImsDto: CreateImsDto): Promise<Ims> {
    return this.imsService.update(id, updateImsDto);
  }

  @Get(':id') // Endpoint to get a specific Ims by ID
  getIms(@Param('id') id: string): Promise<Ims> {
    return this.imsService.findOne(id);
  }

  @Delete(':id') // Endpoint to delete a specific Ims by ID
  deleteIms(@Param('id') id: string): Promise<void> {
    return this.imsService.delete(id);
  }
}
