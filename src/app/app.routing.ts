/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BookListComponent } from './features/books/book-list/book-list/book-list.component';
import { AddBookComponent } from './features/books/add-book/add-book.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { SafeGuard } from './safe.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: BookListComponent,
    canActivate: [SafeGuard],
  },

  {
    path: '',
    component: BookListComponent,
    canActivate: [SafeGuard],
  },
  {
    path: 'addBook',
    component: AddBookComponent,
    canActivate: [SafeGuard],
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    canActivate: [SafeGuard],
  },

  // { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },

  { path: '**', redirectTo: 'miscellaneous/error404' },



];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
