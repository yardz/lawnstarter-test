import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getByName(@Query('search') search: string) {
    const movies = this.moviesService.getAll(search);
    return movies;
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    const movies = this.moviesService.get(Number.parseInt(id));
    return movies;
  }
}
