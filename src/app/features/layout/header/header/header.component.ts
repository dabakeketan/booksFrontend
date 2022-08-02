import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBookList() {
    this.router.navigate(['']);
  }

  addBook() {
    this.router.navigate(['/addBook']);
  }

  logout() {
    sessionStorage.removeItem('testLogin');
    this.router.navigate(['/login']);
  }

}
