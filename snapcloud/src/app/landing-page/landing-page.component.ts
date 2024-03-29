import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  userEmail: string = 'votreemail@email.com';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  //méthodes
  linkTo() {
    this.router.navigateByUrl('cloudsnaps');
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
