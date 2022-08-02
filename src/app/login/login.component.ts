import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;

  password;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    if(this.email == 'test@venturay.com' && this.password == 'test1234') {
      sessionStorage.setItem('testLogin', 'true');
      this.router.navigate(['list']);
    } else {
      alert('Incorrect Email OR Password');
    }
  }

}
