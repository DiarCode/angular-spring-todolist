import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { SignupPageComponent } from './signup/signup-page.component';
import { TodosPageComponent } from './todos/todos-page.component';
import { AuthGuard } from '@app/modules/auth/services/auth.guard';

export const PAGES = {
  Todos: {
    path: '/todos',
    component: TodosPageComponent,
    displayName: 'Todos',
    auth: true,
  },
  Home: {
    path: '/',
    component: HomePageComponent,
    displayName: 'Home',
    auth: false,
  },
  Login: {
    path: '/login',
    component: LoginPageComponent,
    displayName: 'Login',
    auth: false,
  },
  Signup: {
    path: '/signup',
    component: SignupPageComponent,
    displayName: 'Sign Up',
    auth: false,
  },
};

export const routes: Routes = Object.entries(PAGES).map(([_, v]) => ({
  path: v.path.substring(1),
  component: v.component,
  canActivate: v.auth ? [AuthGuard] : undefined,
}));
