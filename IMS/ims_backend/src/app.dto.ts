
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateImsDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

 

  @IsNotEmpty()
  @IsString()
  category: string;

 

  @IsOptional()
  @IsString()
  images?: string;  // Expecting a comma-separated string for images



}
