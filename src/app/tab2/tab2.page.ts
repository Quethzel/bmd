import { Component } from '@angular/core';
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
  constructor(private plService: PlaylistService) {
    //TODO: replace userId
    const userId = null;
    plService.getMyPlaylists(userId).subscribe(data => {
      this.playlists = data;
    });
  }

  removePlaylist(id: string) {
    console.log('remove playlist');
    this.plService.delete(id);
  }

  async newPlaylist() {
    const playlist = new Playlist({});
    this.openPlaylist(playlist, 1);
  }

  async showPlaylist(id: string, selectedView: number) {
    const playlist = this.playlists.find(p => p.id == id);
    this.openPlaylist(playlist, selectedView);
  }

  private async openPlaylist(pl: Playlist, selectedView: number) {
    this.plService.showPlaylist(pl, PlaylistView.Editor, selectedView);
  }


}
