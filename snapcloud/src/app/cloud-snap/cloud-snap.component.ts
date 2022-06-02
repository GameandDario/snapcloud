import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-snap',
  templateUrl: './cloud-snap.component.html',
  styleUrls: ['./cloud-snap.component.scss'],
})
export class CloudSnapComponent implements OnInit {
  // déclaration propriétés
  title!: string;
  description!: string;
  createdDate!: Date;
  imgUrl!: string;
  snaps!: number;

  ngOnInit() {
    //initialisation
    this.title = 'Cirrus au soir';
    this.imgUrl =
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/7/2/c/72cf661c7f_50078048_bwo12339.jpg';
    this.description =
      "Le cirrus est un nuage en couche situé, en région tempérée à une altitide de 5000 à 13000m (étage supérieur). Épais de 300m environ, est constitué de bancs, de bandes ou de filaments séparés, blancs le plus souvent, qui revêtent un aspect fibreux ou un éclat soyeux (les deux apparences pouvant se conjuguer). Il n'est pas associé aux précipitations. © Bernhard Mühr, Der Karlsruher Wolkenatlas, www.wolkenatlas.de, tous droits de reproduction interdits.";
    this.createdDate = new Date();
    this.snaps = 6;
  }
  onAddSnap() {
    this.snaps++;
  }
}
