import { Test, TestingModule } from '@nestjs/testing';
import { execSync } from 'child_process';
import { ExecuterService } from './executer.service';

describe('ExecuterService', () => {
  let service: ExecuterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExecuterService],
    }).compile();

    service = module.get<ExecuterService>(ExecuterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should execute command', () => {
    const command = 'uname -a';
    const executionRes = service.executeCommand(command);
    const execRes = execSync(command, { encoding: 'utf-8' })
      .split(/\r?\n/)
      .filter(Boolean);
    expect(executionRes.status).toBe(200);
    expect(executionRes.response.length).toBe(1);
    expect(executionRes.response).toMatchObject(execRes);
  });

  it('should execute error command', () => {
    const command = 'sdsdsdsdsdsdsd';
    const executionRes = service.executeCommand(command);
    let errorMessage;
    try {
      execSync(command, { encoding: 'utf-8' });
    } catch (e: any) {
      errorMessage = e.output[2].split(/\r?\n/).filter(Boolean);
    }
    expect(executionRes.status).toBe(409);
    expect(executionRes.response.length).toBe(1);
    expect(executionRes.response).toMatchObject(errorMessage);
  });
});
