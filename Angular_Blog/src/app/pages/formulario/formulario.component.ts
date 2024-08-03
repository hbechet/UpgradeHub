import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  postService = inject(PostService);
  router = inject(Router);

  newForm: FormGroup = new FormGroup({
    titulo: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    texto: new FormControl(null, [
      Validators.required,
      Validators.minLength(100)
    ]),
    autor: new FormControl(),
    imagen: new FormControl(),
    categoria: new FormControl(),
  });

  async onSubmit() {
    try {
      if (this.newForm.valid) {
        this.postService.create(this.newForm.value);
        await Swal.fire({
          title: 'Post creado correctamente',
          text: 'Se ha creado el Post. Puedes verlo en la lista.',
          icon: 'success'
        })
        // Navegar a la lista de Posts
        this.router.navigateByUrl('/posts');
      }
    } catch (error) {
      console.log(error);
    }
  }

}
