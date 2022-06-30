import { Component, OnInit } from '@angular/core';
import { CloudSnap } from './models/cloud-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // propriétés de type CloudSnap (class)
  myCloud!: CloudSnap;
  my2Cloud!: CloudSnap;
  my3Cloud!: CloudSnap;

  ngOnInit() {
    this.myCloud = new CloudSnap(
      'Cirrus au soir',
      "Le cirrus est un nuage en couche situé, en région tempérée à une altitide de 5000 à 13000m (étage supérieur). Épais de 300m environ, est constitué de bancs, de bandes ou de filaments séparés, blancs le plus souvent, qui revêtent un aspect fibreux ou un éclat soyeux (les deux apparences pouvant se conjuguer). Il n'est pas associé aux précipitations. © Bernhard Mühr, Der Karlsruher Wolkenatlas, www.wolkenatlas.de, tous droits de reproduction interdits.",
      new Date(),
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/7/2/c/72cf661c7f_50078048_bwo12339.jpg',
      6
    );
    this.my2Cloud = new CloudSnap(
      'Cirrus en Australie',
      'Photo de cirrus prise à Swifts Creek, dans la région de Victoria, en Australie.',
      new Date(),
      'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/d/1/6/d16f01a9bd_50078059_cirus.jpg',
      3
    );
    this.my3Cloud = new CloudSnap(
      'Brouillard sur le Mississippi',
      "Le brouillard est un nuage dont la base touche le sol. Pour qu'il se forme, il faut que le taux dhumidité de l'air soit suffisamment élevé, que le vent ne soit ni trop fort ni trop faible et qu'il y ait assez de noyayx de condensation dans l'air. Si toutes ces conditions sont réunies, de trsè petites gouttelettes d'eau sont maintenues en suspension dans l'atmosphère, ce qui réduit l visibilit\" au sol. Il existe plusisuers types de brouillard du fait de procesus variables de la condensation de la vapeur d'eau.",
      new Date(),
      'https://cdn.futura-sciences.com/buildsv6/images/smalloriginal/b/9/8/b986fd181f_59481_album-nuages3.jpg',
      4
    );
  }
}
