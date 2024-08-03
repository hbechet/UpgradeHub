import { Injectable } from '@angular/core';
import { Post } from '../interfaces/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  ArrPosts: Post[] = [];

  create(Post: Post) {
    const today = new Date();
    Post.fecha = today;
    this.ArrPosts.push(Post);

  }

  getAll() {
    console.log(this.ArrPosts);
    return this.ArrPosts;
  }

  getByCategoria(cat: string) {
    return this.ArrPosts.filter((post) => post.categoria === cat);
  }

}
