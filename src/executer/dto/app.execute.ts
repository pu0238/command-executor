import { IsNotEmpty, IsString } from 'class-validator';

export class Execute {
  @IsString()
  @IsNotEmpty()
  command: string;
}
