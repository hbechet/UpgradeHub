import { Routes } from '@angular/router';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'posts' },
    { path: 'posts', component: ListaPostsComponent },
    { path: 'new', component: FormularioComponent },
    { path: '**', component: Error404Component }
];
