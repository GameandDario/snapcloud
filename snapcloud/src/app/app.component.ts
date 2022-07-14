import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //Déclaration de propriété

  interval$!: Observable<number>;

  ngOnInit(): void {
    this.interval$ = interval(1000);
  }
}
