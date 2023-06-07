import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Movie, MovieCharacter, MovieList } from './movies.type';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  private async hydrateCharacters(
    characters: string[],
  ): Promise<MovieCharacter[]> {
    const list = await Promise.all(
      characters.map(async (character) => {
        const { data } = await this.httpService.axiosRef.get(character);
        return {
          id: Number.parseInt(character.split('/')[5]),
          name: data.name,
        };
      }),
    );
    return list;
  }

  async getAll(search: string): Promise<MovieList[]> {
    const { data } = await this.httpService.axiosRef.get('/films', {
      params: { search },
    });
    const movies: MovieList[] = data.results.map(
      (movie: any): MovieList => ({
        id: Number.parseInt(movie.url.split('/')[5]),
        name: movie.title,
      }),
    );
    return movies;
  }

  async get(id: number): Promise<Movie> {
    const { data } = await this.httpService.axiosRef.get(`/films/${id}`);
    const movie: Movie = {
      id: Number.parseInt(data.url.split('/')[5]),
      name: data.title,
      openingCrawl: data.opening_crawl,
      characters: await this.hydrateCharacters(data.characters),
    };
    return movie;
  }
}
