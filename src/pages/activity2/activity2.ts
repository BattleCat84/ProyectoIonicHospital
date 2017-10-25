import { Component } from '@angular/core';
import { NavController, ModalController} from "ionic-angular";
import { Activity3Page } from "../activity3/activity3";


@Component({
  selector: 'page-activity2',
  templateUrl: 'activity2.html'
})
export class Activity2Page {
  /**
   * Página en el que el usuario inseta su nombre y en la siguiente actividad refleje el resultado 
   * @param navCtrl
   */

 // nombreIntroducido: string;

 public nombre: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  
  }

  siguiente() {

    let modalNombre = this.modalCtrl.create(Activity3Page, {
      nombre: this.nombre
    });
    modalNombre.present();
    modalNombre.onDidDismiss(data => console.log(data));

    this.navCtrl.push(Activity3Page);
  }

}  
