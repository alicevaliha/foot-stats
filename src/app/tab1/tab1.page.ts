import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  statData: any[] = [];
  offstat: any;
  constructor(public api:ApiService) {
    this.getGeneral();
  }
  
  getGeneral() {
    this.api.getStatgeneral().subscribe(result => {
      console.log(result);
      // Utilisez Object.values pour obtenir les valeurs de l'objet en tant que tableau
      this.statData = Object.values(result);
      this.offstat = this.statData[0];
      this.statData = this.offstat;
      // console.log('statData:', this.statData);
      // console.log('offstat:', this.offstat);

    });
  }

  getDomicile() {
    this.api.getStatgeneralDomicile().subscribe(result => {
      console.log(result);
      // Utilisez Object.values pour obtenir les valeurs de l'objet en tant que tableau
      this.statData = Object.values(result);
      this.offstat = this.statData[0];
      this.statData = this.offstat;
      // console.log('statData:', this.statData);
      // console.log('offstat:', this.offstat);

    });
  }

  getExterieur() {
    this.api.getStatgeneralExterieur().subscribe(result => {
      console.log(result);
      // Utilisez Object.values pour obtenir les valeurs de l'objet en tant que tableau
      this.statData = Object.values(result);
      this.offstat = this.statData[0];
      this.statData = this.offstat;
      // console.log('statData:', this.statData);
      // console.log('offstat:', this.offstat);

    });
  }
  

}
