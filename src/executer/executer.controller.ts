import { Body, Controller, Post } from '@nestjs/common';
import { Execute } from './dto/app.execute';
import { ExecuterService } from './executer.service';
import { ExecuterResponse } from './interfaces/executer.response';

@Controller('execute')
export class ExecuterController {
  constructor(private readonly executerService: ExecuterService) {}

  @Post()
  executer(@Body() body: Execute): Promise<ExecuterResponse> {
    return this.executerService.executeCommand(body.command);
  }
}
