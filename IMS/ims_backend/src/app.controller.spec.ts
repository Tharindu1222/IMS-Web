import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ImsServices } from './app.service';
import { CreateImsDto } from './app.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('ims')
export class ImsController {
  constructor(private readonly imsService: ImsServices) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new Error('File upload failed');
    }
    return `/uploads/${file.filename}`;
  }

  @Post()
  async createIms(@Body() createImsDto: CreateImsDto) {
    return this.imsService.create(createImsDto);
  }

  @Get()
  async getims() {
    return this.imsService.findAll();
  }

  @Get(':id')
  async getIms(@Param('id') id: string) {
    return this.imsService.findOne(id);
  }

  @Delete(':id')
  async deleteIms(@Param('id') id: string) {
    return this.imsService.delete(id);
  }
}
