import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Playlist } from 'src/app/modules/playlist/entities/playlist';
import { PlaylistService } from '../../services/playlist.service';


@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.scss'],
})
export class PlaylistModalComponent implements OnInit {
  playlist: Playlist;
  selectedView: number;

  constructor(private modalCtrl: ModalController, private plService: PlaylistService) { }

  ngOnInit() {
    console.log(this.playlist);
    console.log(this.selectedView)
  }

  onSegmentChanged(selectedView: number) {
    this.selectedView = selectedView;
  }

  removeItem() {}

  onSavePlaylist(playlist: Playlist) {
    this.plService.save(playlist);
    this.modalCtrl.dismiss();
  }

}
