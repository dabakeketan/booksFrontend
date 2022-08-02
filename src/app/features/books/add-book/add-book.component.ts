import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

export interface BookModel {
  title: String;
  author: String;
  price: Number;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: BookModel;

  constructor(private booksService: BooksService) {
    this.book = {
      title: '',
      author: '',
      price: null
    };
  }

  ngOnInit() {
  }

  addBookEntry() {
    // console.log(this.book);
    this.booksService.addBookEntry(this.book);
  }

}
