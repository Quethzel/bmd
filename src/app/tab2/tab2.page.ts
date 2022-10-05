import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaylistDetailComponent } from '../components/playlist-detail/playlist-detail.component';
import { PlaylistModalComponent } from '../components/playlist-modal/playlist-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  playlists: any;
  constructor(private modalCtrl: ModalController) {
    this.playlists = this.getPlaylists();
  }

  getPlaylists() {
    return [
      { place: 'Dancer Lab', len: 21, status: 'open', date: '28 oct. 2022' },
      { place: 'Patio Barrio', len: 11, status: 'closed', date: '23 oct. 2022' },
    ];
  }

  removePlaylist() {
    console.log('remove playlist');
  }

  async newPlaylist() {
    const modal = await this.modalCtrl.create({
      component: PlaylistDetailComponent
    });
    modal.present();

    const modalClosed = await modal.onWillDismiss();
    if (modalClosed.data?.reload) {
      console.log('reload playlist');
    }
    
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
