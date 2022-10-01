import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaylistModalComponent } from '../components/playlist-modal/playlist-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  presentingElement = null;
  countDownDate: number;
  countdown: string;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.presentingElement = document.querySelector('.ion-page');
  }


  async showPlaylist() {
    const modal = await this.modalCtrl.create({
      component: PlaylistModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      const message = `Hello, ${data}!`;
      console.log(message);
    }
  }

}
