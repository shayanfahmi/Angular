import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  constructor() { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    // this.subs = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   }
    // );
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subs = customIntervalObservable.subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
