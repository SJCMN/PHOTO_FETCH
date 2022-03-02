import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  description: string;
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  accessKey = 'mZ_A_fstk2jUHCf3fPni6dmgl4VxNsYw-Gf0OdR5JMg';
  // http is only accessible within PhotoService class
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>(`https://api.unsplash.com/photos/random/`, {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`,
        },
      })
      
  }
}
