import { Controller, Get, Param, Query } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  getByName(@Query('search') search: string) {
    const people = this.peopleService.getAll(search);
    return people;
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    const people = this.peopleService.get(Number.parseInt(id));
    return people;
  }
}
