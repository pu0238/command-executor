import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Execute } from './dto/app.execute';
import { ExecuterResponse } from './interfaces/executer.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('execute')
  executer(@Body() body: Execute): Promise<ExecuterResponse> {
    return this.appService.executeCommand(body.command);
  }
}
