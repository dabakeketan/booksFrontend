import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

export interface BookModel {
  title: String;
  author: String;
  price: Number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy, AfterViewInit {

  books = [];

  searchText = '';

  dataSource;

  displayedColumns: string[];

  destroySubscription = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService, private router: Router) {
  }

  ngOnInit() {
    this.displayedColumns = ['title', 'author', 'price', 'action'];
    this.booksService.booksDataSubject.takeWhile(() => !this.destroySubscription).subscribe((response: any) => {
      if (response) {
        this.dataSource = new MatTableDataSource(response);
        console.log(this.books);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });

    this.getBooks();
  }

  ngAfterViewInit() {
    
    //  this.dataSource.paginator = this.paginator;
  }

  getBooks() {
    // console.log(this.book);
    this.booksService.getBooks();
  }

  getRecord(book) {
    this.editDetails(book);
  }

  editDetails(book) {
    console.log(book._id);
    this.router.navigate(['/book', book._id]);
  }

  deleteBook(book) {
    console.log(book);
    if (confirm('Are you sure to delete entry for book ' + book.title)) {
      this.booksService.deleteBook(book);
    }
  }

  applyFilter() {
    this.searchText = this.searchText.trim(); // Remove whitespace
    this.searchText = this.searchText.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.searchText;
  }

  sortData(sort: Sort) {
    // console.log(sort);
    // const data = this.desserts.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    // this.sortedData = data.sort((a, b) => {
    //   const isAsc = sort.direction === 'asc';
    //   switch (sort.active) {
    //     case 'name':
    //       return compare(a.name, b.name, isAsc);
    //     case 'calories':
    //       return compare(a.calories, b.calories, isAsc);
    //     case 'fat':
    //       return compare(a.fat, b.fat, isAsc);
    //     case 'carbs':
    //       return compare(a.carbs, b.carbs, isAsc);
    //     case 'protein':
    //       return compare(a.protein, b.protein, isAsc);
    //     default:
    //       return 0;
    //   }
    // });
  }


  // compare(a: number | string, b: number | string, isAsc: boolean) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // }

  ngOnDestroy() {
    this.destroySubscription = true;
  }


}
