import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // http is only accessible within PhotoService class
  constructor(private http: HttpClient) {

    http.get('urlUnsplash', {
      headers: {

      }
    })
   }
}
