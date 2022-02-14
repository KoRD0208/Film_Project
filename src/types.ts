export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  favorites: IFilm[];
}

export interface IFilm {
  id: number;
  title: string;
  director: string;
  duration: number | string;
  price: string;
  img: string;
  featured: boolean;
  description: string;
}
