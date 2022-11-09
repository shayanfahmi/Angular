import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';
import { filter, map } from 'rxjs/operators';

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
        if(count == 2){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Greater than 3!'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe(map( (data: number) => {
    //   return 'Round: ' + (data + 1);
    // }))

    this.subs = customIntervalObservable.pipe(
      filter(( data => {
        return data > 0;
      })),
      map( (data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Done!');
      }
    );
  }

}
