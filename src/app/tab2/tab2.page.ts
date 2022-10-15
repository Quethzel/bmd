import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaylistDetailComponent } from '../components/playlist-detail/playlist-detail.component';
import { Playlist } from '../entities/playlist';
import { PlaylistView } from '../enums/playlist-view';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  playlists: Playlist[];
  constructor(private modalCtrl: ModalController, private plService: PlaylistService) {
    //TODO: replace userId
    const userId = null;
    plService.getMyPlaylists(userId).subscribe(data => {
      this.playlists = data;
    });
  }

  removePlaylist(id: string) {
    console.log('remove playlist');
    this.plService.deletePlaylist(id);
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

  async showPlaylist(id: string) {
    const playlist = this.playlists.find(p => p.id == id);
    this.plService.showPlaylist(playlist, PlaylistView.Editor);
  }

}
