import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CloudSnap } from '../models/cloud-snap.model';

@Component({
  selector: 'app-new-cloud-snap',
  templateUrl: './new-cloud-snap.component.html',
  styleUrls: ['./new-cloud-snap.component.scss'],
})
export class NewCloudSnapComponent implements OnInit {
  cloudForm!: FormGroup;
  cloudSnapPreview$!: Observable<CloudSnap>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cloudForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imgUrl: [null],
      location: [null],
    });

    this.cloudSnapPreview$ = this.cloudForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0,
      }))
    );
  }
  onSubmitForm() {
    console.log(this.cloudForm.value);
  }
}
