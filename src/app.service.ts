import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

@Injectable()
export class AppService {
  async executeCommand(command: string): Promise<string> {
    try {
      return execSync(command, { encoding: 'utf-8' });
    } catch (e: any) {
      return e.output[2];
    }
  }
}
