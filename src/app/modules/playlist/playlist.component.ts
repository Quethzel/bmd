import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/modules/playlist/entities/playlist';
import { PlaylistService } from './services/playlist.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {

  playlists: Playlist[];

  constructor(private route: ActivatedRoute, private plService: PlaylistService) { }

  ngOnInit(): void {
    //TODO: replace user ID
    const userId = null;
    this.plService.getMyPlaylists(userId).subscribe(data => {
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
    this.plService.showPlaylist(pl, selectedView);
  }

}
