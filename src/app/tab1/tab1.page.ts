import { Component, OnInit } from '@angular/core';
import { PlaylistView } from '../enums/playlist-view';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // presentingElement = null;
  countDownDate: number;
  countdown: string;
  constructor(private plService: PlaylistService) {

  }

  ngOnInit(): void {
    // this.presentingElement = document.querySelector('.ion-page');
  }


  async showPlaylist() {
    this.plService.showPlaylist(null, PlaylistView.Viewer)
  }

}
