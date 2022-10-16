import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Playlist } from 'src/app/entities/playlist';
import { PlaylistView } from 'src/app/enums/playlist-view';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.scss'],
})
export class PlaylistModalComponent implements OnInit {
  playlist: Playlist;
  viewAs: PlaylistView;
  selectedView: PlaylistView;

  constructor(private modalCtrl: ModalController, private plService: PlaylistService) { }

  ngOnInit() {
    console.log(this.viewAs);
    console.log(this.playlist);
    console.log(this.selectedView)
  }

  onSegmentChanged(selectedView: PlaylistView) {
    this.selectedView = selectedView;
  }

  removeItem() {}

  onSavePlaylist(playlist: Playlist) {
    this.plService.save(playlist);
    this.modalCtrl.dismiss();
  }

}
