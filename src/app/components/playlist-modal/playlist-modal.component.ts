import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.scss'],
})
export class PlaylistModalComponent implements OnInit {
  playlist: any;

  constructor() {
    this.playlist = [
      { name: 'Eres Mia', artist: 'Romeo Santos', likes: 11, img: 'https://i.pravatar.cc/300?u=b' },
      { name: 'Lao a Lao', artist: 'Prince Royce', likes: 7, img: 'https://i.pravatar.cc/300?u=a' },
      { name: 'Devórame otra vez', artist: 'Lalo Rodriguez', likes: 3, img: 'https://i.pravatar.cc/300?u=c' },
      { name: 'Deja vu', artist: 'Shakira', likes: 1, img: 'https://i.pravatar.cc/300?u=e' },
    ];
  }

  ngOnInit() {}

  removeItem() {}

}
