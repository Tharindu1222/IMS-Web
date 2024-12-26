import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ImsController } from './app.controller.spec';
import { ImsServices } from './app.service';
import { Ims, ImsSchema } from './ims.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Ims.name, schema: ImsSchema }]),
  ],
  controllers: [ImsController],
  providers: [ImsServices],
})
export class AppModule {}
