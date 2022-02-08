import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Execute } from './dto/app.execute';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('execute')
  execute(@Body() body: Execute): Promise<string> {
    return this.appService.executeCommand(body.command);
  }
}
