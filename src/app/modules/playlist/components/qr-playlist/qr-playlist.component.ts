import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-playlist',
  templateUrl: './qr-playlist.component.html',
  styleUrls: ['./qr-playlist.component.scss'],
})
export class QrPlaylistComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {}

}
