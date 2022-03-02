import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

 

  constructor(private photoService: PhotoService) {
    this.photoService.getPhoto().subscribe(() => {})
  }

  

  ngOnInit(): void {
  }

}
