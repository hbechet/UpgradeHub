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
    this.ArrPosts.unshift(Post);
    const stringifiedArrPosts = JSON.stringify(this.ArrPosts);
    localStorage.setItem('ArrPosts', stringifiedArrPosts);
  }

  getAll() {
    const LocalStorageArrPosts = localStorage.getItem('ArrPosts')
    const PostsParsed = JSON.parse(LocalStorageArrPosts!);
    return PostsParsed;
  }

  getByCategoria(cat: string) {
    return this.ArrPosts.filter((post) => post.categoria === cat);
  }

}
