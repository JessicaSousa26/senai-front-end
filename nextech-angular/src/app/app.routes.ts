import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { Login } from './login/login/login';

export const routes: Routes = [
  { path: '', component: Home, title: 'NexTech — Mundo Gamer & Tecnologia' },
  { path: 'login', component: Login, title: 'Entrar — NexTech' },
  { path: '**', redirectTo: '' },
];
