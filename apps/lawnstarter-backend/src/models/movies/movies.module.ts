import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ baseURL: 'https://swapi.dev/api' })],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
