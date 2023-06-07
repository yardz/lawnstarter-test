import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Person, CharacterMovie, PersonList } from './people.type';

@Injectable()
export class PeopleService {
  constructor(private readonly httpService: HttpService) {}

  private async hydrateMovies(movies: string[]): Promise<CharacterMovie[]> {
    const list = await Promise.all(
      movies.map(async (movie) => {
        const { data } = await this.httpService.axiosRef.get(movie);
        return {
          id: Number.parseInt(movie.split('/')[5]),
          name: data.title,
        } as any;
      }),
    );
    return list;
  }

  async getAll(search: string): Promise<PersonList[]> {
    const { data } = await this.httpService.axiosRef.get('/people', {
      params: { search },
    });
    const people: PersonList[] = data.results.map(
      (person: any): PersonList => ({
        id: Number.parseInt(person.url.split('/')[5]),
        name: person.name,
      }),
    );
    return people;
  }

  async get(id: number): Promise<Person> {
    const { data } = await this.httpService.axiosRef.get(`/people/${id}`);
    const person: Person = {
      id: Number.parseInt(data.url.split('/')[5]),
      name: data.name,
      details: {
        birthYear: data.birth_year,
        eyeColor: data.eye_color,
        hairColor: data.hair_color,
        height: data.height,
        mass: data.mass,
        gender: data.gender,
      },
      movies: await this.hydrateMovies(data.films),
    };
    return person;
  }
}
