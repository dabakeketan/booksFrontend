import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { BaseService } from '../../../base.service';

@Injectable()
export class BooksService {

  booksDataSubject = new Subject();

  bookDetailDataSub = new Subject();

  constructor(private baseService: BaseService, private router: Router) {

  }

  // baseUrl = 'http://localhost:8000/api/';
  baseUrl = 'https://booksbackendcrud.herokuapp.com/api/'
  // baseUrl = 'https://app.netlify.com/sites/fastidious-rugelach-8b71e0:8000/api/'

  getBooks() {
    this.baseService.getData(this.baseUrl +  'get-book-data').subscribe((data) => {
      if (data) {
        console.log('Get Books', data);
        this.booksDataSubject.next(data);
      }
    }, (error) => {
      // console.log('Error getting account internation call rates init data', error);
    });
  }

  addBookEntry(book) {
    this.baseService.postData('application/json', book, this.baseUrl + 'add-book').subscribe((data) => {
      if (data) {
        console.log('Add Book', data);
        this.router.navigate(['']);
      }
    }, (error) => {
      // console.log('Error getting account internation call rates init data', error);
    });
  }

  getBookDetails(bookId) {
    this.baseService.getData(this.baseUrl + 'read-book/' + bookId).subscribe((data) => {
      if (data) {
        console.log('Get Book', data);
        this.bookDetailDataSub.next(data);
      }
    }, (error) => {
      // console.log('Error getting account internation call rates init data', error);
    });
  }

  updateBookEntry(book) {
    this.baseService.putData('application/json', book, this.baseUrl + 'update-book/' + book._id).subscribe((data) => {
      if (data) {
        console.log('Update Book', data);
        this.router.navigate(['']);
      }
    }, (error) => {
      // console.log(error);
    });
  }

  deleteBook(book) {
    this.baseService.deleteData('application/json', book, this.baseUrl + 'delete-book/' + book._id).subscribe((data) => {
      if (data) {
        console.log('Delete Book', data);
        this.getBooks();
      }
    }, (error) => {
      // console.log(error);
    });
  }

}
