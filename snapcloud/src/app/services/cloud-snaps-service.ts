import { Injectable } from '@angular/core';
import { CloudSnap } from '../models/cloud-snap.model';

@Injectable({
  providedIn: 'root',
})
export class CloudSnapsService {
  cloudSnaps: CloudSnap[] = [
    {
      id: 1,
      title: 'Cirrus au soir',
      description:
        "Le cirrus est un nuage en couche situé, en région tempérée à une altitide de 5000 à 13000m (étage supérieur). Épais de 300m environ, est constitué de bancs, de bandes ou de filaments séparés, blancs le plus souvent, qui revêtent un aspect fibreux ou un éclat soyeux (les deux apparences pouvant se conjuguer). Il n'est pas associé aux précipitations. © Bernhard Mühr, Der Karlsruher Wolkenatlas, www.wolkenatlas.de, tous droits de reproduction interdits.",
      createdDate: new Date(),
      imgUrl:
        'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/7/2/c/72cf661c7f_50078048_bwo12339.jpg',
      snaps: 213,
      location: 'Europe',
    },
    {
      id: 2,
      title: 'Cirrus en Australie',
      description:
        'Photo de cirrus prise à Swifts Creek, dans la région de Victoria, en Australie.',
      createdDate: new Date(),
      imgUrl:
        'https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/d/1/6/d16f01a9bd_50078059_cirus.jpg',
      snaps: 3,
    },
    {
      id: 3,
      title: 'Brouillard sur le Mississippi',
      description:
        "Le brouillard est un nuage dont la base touche le sol. Pour qu'il se forme, il faut que le taux dhumidité de l'air soit suffisamment élevé, que le vent ne soit ni trop fort ni trop faible et qu'il y ait assez de noyayx de condensation dans l'air. Si toutes ces conditions sont réunies, de trsè petites gouttelettes d'eau sont maintenues en suspension dans l'atmosphère, ce qui réduit l visibilit\" au sol. Il existe plusisuers types de brouillard du fait de procesus variables de la condensation de la vapeur d'eau.",
      createdDate: new Date(),
      imgUrl:
        'https://cdn.futura-sciences.com/buildsv6/images/smalloriginal/b/9/8/b986fd181f_59481_album-nuages3.jpg',
      snaps: 4,
    },
  ];
  // implémentation d'une méthode pour récuperer tous les Elements du tableau CloudSnaps
  getAllCloudSnaps(): CloudSnap[] {
    return this.cloudSnaps;
  }
  // méthode pour retrouver un snap par Id
  //puis lui incrémenter ou décrémenter un  snap
  getCloudSnapById(cloudSnapId: number) {
    const cloudSnap = this.cloudSnaps.find(
      (cloudSnap) => cloudSnap.id === cloudSnapId
    );
    if (!cloudSnap) {
      throw new Error('CloudSnap not found !');
    } else {
      return cloudSnap;
    }
  }
  snapCloudSnapById(cloudSnapId: number, snapType: string): void {
    const cloudSnap = this.getCloudSnapById(cloudSnapId);
    snapType === 'snap' ? cloudSnap.snaps++ : cloudSnap.snaps--;
  }
  addNewCloudSnap(formValue: {
    title: string;
    description: string;
    imgUrl: string;
    location?: string;
  }): void {
    const cloudSnap: CloudSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.cloudSnaps[this.cloudSnaps.length - 1].id + 1,
    };
    if (!cloudSnap) {
      throw new Error('CloudSnap non enregistré !');
    } else {
      this.cloudSnaps.push(cloudSnap);
    }
  }
}
