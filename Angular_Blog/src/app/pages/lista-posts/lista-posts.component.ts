import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/Post.interface';
import { PostService } from '../../services/post.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit($event: Event) {
    if ($event.target) {
      const htmlForm = $event.target as HTMLFormElement;
      console.log(htmlForm['value']);
      // this.postService.getByCategoria(event)
    }
  }
}
