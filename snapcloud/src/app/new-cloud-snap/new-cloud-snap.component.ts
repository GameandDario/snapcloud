import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CloudSnap } from '../models/cloud-snap.model';
import { CloudSnapsService } from '../services/cloud-snaps-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-cloud-snap',
  templateUrl: './new-cloud-snap.component.html',
  styleUrls: ['./new-cloud-snap.component.scss'],
})
export class NewCloudSnapComponent implements OnInit {
  cloudForm!: FormGroup;
  cloudSnapPreview$!: Observable<CloudSnap>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private cloudSnapsService: CloudSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    this.cloudForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        imgUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        location: [null],
      },
      // condition pour que modifier le ValueChanges uniquement en sortant d'un champ du formulaire ( une fois updated) en changeant le focus du formulaire sinon la validation des entrées du formulaire se fait à chaque touche entrée
      { updateOn: 'blur' }
    );

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
    //console.log(this.cloudForm.value);
    this.cloudSnapsService.addNewCloudSnap(this.cloudForm.value);
    this.router.navigateByUrl('/cloudsnaps');
  }
}
