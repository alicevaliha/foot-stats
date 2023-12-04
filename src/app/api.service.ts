import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getJoueurs(){
    console.log('I retrieve data');
    return this.http.get('https://statistiques-foot.vercel.app/api/v1/joueurs');
  }

  getStatgeneral(){
    console.log('I retrieve data');
    return this.http.get('https://statistiques-foot.vercel.app/api/v1/general_g');
  }

  getStatgeneralDomicile(){
    console.log('I retrieve data');
    return this.http.get('https://statistiques-foot.vercel.app/api/v1/general_dom');
  }

  getStatgeneralExterieur(){
    console.log('I retrieve data');
    return this.http.get('https://statistiques-foot.vercel.app/api/v1/general_ext');
  }

}
