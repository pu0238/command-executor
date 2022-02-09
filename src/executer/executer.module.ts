import { Module } from '@nestjs/common';
import { ExecuterService } from './executer.service';
import { ExecuterController } from './executer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Executer } from './executer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Executer])],
  providers: [ExecuterService],
  controllers: [ExecuterController],
})
export class ExecuterModule {}
