import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  ArrPosts: Post[] = [];

  create(Post: Post) {

  }

  getAll() {

  }

  getByCategoria(cat: string) {

  }

}
