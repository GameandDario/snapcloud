import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //Déclaration de propriété

  interval$!: Observable<string>;

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      //ordre des opérateur est important : c'est dans cet ordre que les opérations seront effectuées
      filter((value) => value % 3 === 0),
      map((value) =>
        value % 2 === 0
          ? `Je suis ${value} et je suis pair`
          : `Je suis ${value} et je suis impair`
      )
    );
  }
}
