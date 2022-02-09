import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ExecuterModule } from './executer/executer.module';
import { Executer } from './executer/executer.entity';

dotenv.config({ path: './executer-mongo.env' });

function getEnv(envName: string): string {
  const value = process.env[envName];
  if (value) {
    return value;
  } else {
    throw `Could not find environment variable: ${envName}`;
  }
}
const nodeEnvironment = getEnv('NODE_ENV').toUpperCase();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      useUnifiedTopology: true,
      url: `mongodb://${getEnv('MONGO_INITDB_ROOT_USERNAME')}:${getEnv(
        'MONGO_INITDB_ROOT_PASSWORD',
      )}@${getEnv(`${nodeEnvironment}_MONGO_HOST`)}:27017`,
      entities: [Executer],
      logging: true,
      synchronize: nodeEnvironment === 'DEVELOPMENT' ? true : false,
    }),
    ExecuterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
