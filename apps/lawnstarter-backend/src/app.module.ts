import { Module } from '@nestjs/common';
import { MoviesModule } from './models/movies';
import { PeopleModule } from './models/people';

@Module({
  imports: [MoviesModule, PeopleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
