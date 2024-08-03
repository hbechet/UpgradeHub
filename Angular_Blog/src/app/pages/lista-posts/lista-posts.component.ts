import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/Post.interface';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

  ArrPosts: Post[] = [];

  postService = inject(PostService);

  newForm: FormGroup = new FormGroup({
    categoria: new FormControl(),
  });

  async ngOnInit() {
    try {
      const response = await this.postService.getAll();
      this.ArrPosts = response;
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmit() {
    try {
      if (this.newForm.valid) {
        const response = await this.postService.getByCategoria(this.newForm.value.categoria);
        this.ArrPosts = response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
