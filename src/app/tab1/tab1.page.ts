import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public api:ApiService) {}
  
  getJoueurs(){
      this.api.getJoueurs().subscribe(result => {
        console.log(result);
      });
  }

}
