
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoading: Boolean;

  destroySubscription = false;

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {

    this.baseService.loaderSubject.takeWhile(() => !this.destroySubscription).subscribe((response: any) => {
      if (response) {
        setTimeout(() => {
          this.isLoading = true;
        });
          
      } else {
        setTimeout(() => {
          this.isLoading = false;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroySubscription = true;
  }
}
