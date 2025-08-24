export interface Comic {
  id: number;
  title: string;
  description: string;
  images: ComicImage[];
}

export interface ComicImage {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: ComicImage;
}

export interface Creator {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  thumbnail: ComicImage;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  thumbnail: ComicImage;
}

export interface Series {
  id: number;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  thumbnail: ComicImage;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  type: string;
  thumbnail: ComicImage;
}

// Estrutura da resposta da API da Marvel
export interface MarvelApiResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
}

// Tipo para a resposta do Axios que contém a resposta da Marvel
export interface AxiosMarvelResponse<T> {
  data: MarvelApiResponse<T>;
}
