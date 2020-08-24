import { IUser } from './user';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: IUser;
  images: string[];
  updated: string| Date;
}



export class Post implements IPost {
  userId: number;
  id: number;
  title = '';
  body = '';
  user?: IUser = null;
  images: string[] = [];
  updated: string| Date = new Date().toISOString();

  constructor(data?: IPost){
    Object.assign(this, data);
  }
}
