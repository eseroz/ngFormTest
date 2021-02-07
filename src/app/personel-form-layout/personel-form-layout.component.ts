import { Component, Input, OnInit, Output } from '@angular/core';
import {PersonelModel} from '../PersonelModel';

@Component({
  selector: 'app-personel-form-layout',
  templateUrl: './personel-form-layout.component.html',
  styleUrls: ['./personel-form-layout.component.css']
})
export class PersonelFormLayoutComponent implements OnInit{

  @Input() personelVeri!:PersonelModel;

  gonderilenPersonelVeri!:PersonelModel;

   constructor(){
   
   }

  ngOnInit(): void {
    console.log("GÖNDERİLEN PERSONEL VERİSİ ==> ", this.personelVeri)
  }

  SaveChanges(){
    this.personelVeri.adsoyad = "AAAA";
    this.gonderilenPersonelVeri = this.personelVeri;
  }

}
