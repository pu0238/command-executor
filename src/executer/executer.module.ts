import { Module } from '@nestjs/common';
import { ExecuterService } from './executer.service';
import { ExecuterController } from './executer.controller';

@Module({
  providers: [ExecuterService],
  controllers: [ExecuterController],
})
export class ExecuterModule {}
