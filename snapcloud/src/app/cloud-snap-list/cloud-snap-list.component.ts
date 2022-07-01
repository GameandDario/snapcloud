import { Component, OnInit } from '@angular/core';
import { CloudSnap } from '../models/cloud-snap.model';
import { CloudSnapsService } from '../services/cloud-snaps-service';

@Component({
  selector: 'app-cloud-snap-list',
  templateUrl: './cloud-snap-list.component.html',
  styleUrls: ['./cloud-snap-list.component.scss'],
})
export class CloudSnapListComponent implements OnInit {
  //Désormais chaque itération CloudSnap est stockée dans un tableau permettant de l'utilisation de ngFor dans app.component.html
  CloudSnaps!: CloudSnap[];

  constructor(private cloudSnapsService: CloudSnapsService) {}

  ngOnInit() {
    //initialisation
    this.CloudSnaps = this.cloudSnapsService.cloudSnaps;
  }
}
