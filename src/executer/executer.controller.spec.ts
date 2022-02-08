import { Test, TestingModule } from '@nestjs/testing';
import { ExecuterController } from './executer.controller';
import { ExecuterService } from './executer.service';
import { mockExecuterService } from './test/mock.executer.service';

describe('ExecuterController', () => {
  let controller: ExecuterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecuterController],
      providers: [ExecuterService],
    })
      .overrideProvider(ExecuterService)
      .useValue(mockExecuterService)
      .compile();

    controller = module.get<ExecuterController>(ExecuterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
