import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { take, map, filter, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  //Déclaration de propriété

  interval$!: Observable<string>;

  private destroy$!: Subject<boolean>;

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    interval(1000)
      .pipe(
        //ordre des opérateur est important : c'est dans cet ordre que les opérations seront effectuées
        //src Observavbles : https://www.learnrxjs.io (
        filter((value) => value % 3 === 0),
        map((value) =>
          value % 2 === 0
            ? `Je suis ${value} et je suis pair`
            : `Je suis ${value} et je suis impair`
        ),
        tap((text) => this.logger(text)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
  logger(text: string): void {
    console.log(`Log : ${text}`);
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
