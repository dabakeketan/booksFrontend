import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../../../constants';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: BookModel;

  bookId;

  destroySubscription = false;

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.booksService.getBookDetails(this.bookId);
    this.booksService.bookDetailDataSub.takeWhile(() => !this.destroySubscription).subscribe((response: any) => {
      if (response) {
        this.book = response;
      }
    });
  }

  updateBookEntry() {
    this.booksService.updateBookEntry(this.book);
  }

}
