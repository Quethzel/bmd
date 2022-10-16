import { Component, Input, OnInit } from '@angular/core';
import { ISong } from 'src/app/interfaces/ISong';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  @Input() songs: ISong[] = [];
  
  constructor() { }

  ngOnInit() { }

}
