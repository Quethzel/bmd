import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/entities/playlist';
import { PlaylistView } from 'src/app/enums/playlist-view';

@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.scss'],
})
export class PlaylistModalComponent implements OnInit {
  playlist: Playlist;
  viewAs: PlaylistView;
  selectedView: PlaylistView = PlaylistView.Viewer;

  constructor() {

    // this.selectedView = 'playlist';
  }

  ngOnInit() {
    console.log(this.viewAs);
    console.log(this.playlist);
  }

  onSegmentChanged(selectedView: PlaylistView) {
    this.selectedView = selectedView;
  }

  removeItem() {}

}
