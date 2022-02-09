import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { execSync } from 'child_process';
import { Repository } from 'typeorm';
import { Executer } from './executer.entity';
import { ExecuterResponse } from './interfaces/executer.response';

@Injectable()
export class ExecuterService {
  constructor(
    @InjectRepository(Executer)
    private readonly executerRepository: Repository<Executer>,
  ) {}

  async executeCommand(command: string): Promise<ExecuterResponse> {
    console.log(await this.findAll());
    try {
      const res = execSync(command, { encoding: 'utf-8' });
      if (!res) throw Error('Respond undefined');
      const response = {
        status: 200,
        response: res.split(/\r?\n/).filter(Boolean),
      };
      await this.save({ command, response });
      return response;
    } catch (e: any) {
      const errorRes: string = e.output[2];
      if (!errorRes) throw Error('Error message undefined');
      const response = {
        status: 409,
        response: errorRes.split(/\r?\n/).filter(Boolean),
      };
      await this.save({ command, response });
      return response;
    }
  }
  async findAll(): Promise<Executer[]> {
    return this.executerRepository.find();
  }
  async save(executer: Executer): Promise<Executer> {
    return this.executerRepository.save(executer);
  }
}
