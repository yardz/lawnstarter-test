import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ baseURL: 'https://swapi.dev/api' })],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
