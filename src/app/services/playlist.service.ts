import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { PlaylistModalComponent } from '../components/playlist-modal/playlist-modal.component';
import { Playlist } from '../entities/playlist';
import { PlaylistView } from '../enums/playlist-view';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private data = [
    new Playlist({
      eventName: 'Dancer Lab Social', eventPlace: 'Dancer Lab', status: true, eventDate: new Date(2022,11,28),
      songs: [
        { name: 'Eres Mia', artist: 'Romeo Santos', likes: 11, img: 'https://i.pravatar.cc/300?u=b' },
        { name: 'Lao a Lao', artist: 'Prince Royce', likes: 7, img: 'https://i.pravatar.cc/300?u=a' },
        { name: 'Devórame otra vez', artist: 'Lalo Rodriguez', likes: 3, img: 'https://i.pravatar.cc/300?u=c' },
        { name: 'Deja vu', artist: 'Shakira', likes: 1, img: 'https://i.pravatar.cc/300?u=e' },
      ]
    }),
    new Playlist({
      eventName: 'Social PB', eventPlace: 'Patio Barrio', status: false, eventDate: new Date(2022,11,23),
      songs: [
        { name: 'Devórame otra vez', artist: 'Lalo Rodriguez', likes: 3, img: 'https://i.pravatar.cc/300?u=c' },
        { name: 'Deja vu', artist: 'Shakira', likes: 1, img: 'https://i.pravatar.cc/300?u=e' },
      ]
  })
  ];
  constructor(private modalCtrl: ModalController) {}

  getMyPlaylists(userId: string) {
    return of(this.data);
  }

  async showPlaylist(playlist: Playlist, viewAs: PlaylistView) {
    const modal = await this.modalCtrl.create({
      component: PlaylistModalComponent,
      componentProps: {
        viewAs,
        playlist
      }
    });
    modal.present();
  }

  async deletePlaylist(id: string) {
    this.data.splice(this.data.findIndex(p => p.id == id));
  }


}
