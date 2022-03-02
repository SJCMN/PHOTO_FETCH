import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photoUrl: any = {};

  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
    
  }

  ngOnInit(): void {}

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((photo) => {
      this.photoUrl = photo;
      console.log(photo)
    });
  }
}
