import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CloudSnap } from '../models/cloud-snap.model';
import { CloudSnapsService } from '../services/cloud-snaps-service';

@Component({
  selector: 'app-single-cloud-snap',
  templateUrl: './single-cloud-snap.component.html',
  styleUrls: ['./single-cloud-snap.component.scss'],
})
export class SingleCloudSnapComponent implements OnInit {
  //initialisation depuis model
  cloudSnap!: CloudSnap;

  // déclaration propriétés
  /*  title!: string;
  description!: string;
  createdDate!: Date;
  imgUrl!: string;
  snaps!: number; */
  isSnap!: boolean;
  btnMsg!: string;

  constructor(
    private cloudSnapsService: CloudSnapsService,
    private route: ActivatedRoute
  ) {}
  //initialisation
  ngOnInit() {
    this.isSnap = false;
    this.btnMsg = 'Vous aimez ?';

    //récupérer l'id du composant
    const snapId = +this.route.snapshot.params['id'];
    this.cloudSnap = this.cloudSnapsService.getCloudSnapById(snapId);
  }

  //méthodes
  onSnap() {
    if (this.isSnap == false) {
      //this.cloudSnap.snaps++;
      this.cloudSnapsService.snapCloudSnapById(this.cloudSnap.id, 'snap');
      this.isSnap = true;
      this.btnMsg = 'Finalement non ?';
    } else {
      //this.cloudSnap.snaps--;
      this.cloudSnapsService.snapCloudSnapById(this.cloudSnap.id, 'unsnap');
      this.btnMsg = 'Clique si tu aimes';
      this.isSnap = false;
    }
  }
}
