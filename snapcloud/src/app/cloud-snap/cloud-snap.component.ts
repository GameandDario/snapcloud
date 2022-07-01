import { Component, OnInit, Input } from '@angular/core';
import { CloudSnap } from '../models/cloud-snap.model';
import { CloudSnapsService } from '../services/cloud-snaps-service';

@Component({
  selector: 'app-cloud-snap',
  templateUrl: './cloud-snap.component.html',
  styleUrls: ['./cloud-snap.component.scss'],
})
export class CloudSnapComponent implements OnInit {
  //initialisation depuis model
  @Input() cloudSnap!: CloudSnap;

  // déclaration propriétés
  /*  title!: string;
  description!: string;
  createdDate!: Date;
  imgUrl!: string;
  snaps!: number; */
  isSnap!: boolean;
  btnMsg!: string;

  constructor(private cloudSnapsService: CloudSnapsService) {}
  //initialisation
  ngOnInit() {
    this.isSnap = false;
    this.btnMsg = 'Vous aimez ?';
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
