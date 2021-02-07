import { Component, Input } from '@angular/core';
import { PersonelModel } from './PersonelModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  personel = new PersonelModel()
  YeniPersonelVeri:PersonelModel;


  constructor (){
     this.personel.adsoyad = "John Doe";
     this.personel.yas = 32;

     this.YeniPersonelVeri = this.personel;
  }


  title = 'ngFormTest';


  degisenVeriyiYazdir(){
    console.log("DEĞİŞEN PERSONEL : ", this.YeniPersonelVeri);
  }
}
