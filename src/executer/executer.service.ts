import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';
import { ExecuterResponse } from './interfaces/executer.response';

@Injectable()
export class ExecuterService {
  executeCommand(command: string): ExecuterResponse {
    try {
      const res = execSync(command, { encoding: 'utf-8' });
      if (!res) throw Error('Respond undefined');
      return {
        status: 200,
        response: res.split(/\r?\n/).filter(Boolean),
      };
    } catch (e: any) {
      const errorRes: string = e.output[2];
      if (!errorRes) throw Error('Error message undefined');
      return {
        status: 409,
        response: errorRes.split(/\r?\n/).filter(Boolean),
      };
    }
  }
}
