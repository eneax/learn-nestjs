import { IsString } from 'class-validator';

// Data transfer object (Dto) is a class that describes the different properties that the request body should have
export class CreateMessageDto {
  @IsString()
  content: string;
}
