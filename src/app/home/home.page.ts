import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images: any = [];
  grid = true;
  galleryType = 'photoTwo';

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Client-ID 1ceddedc03a5d71');

    this.http.get('https://api.imgur.com/3/album/pYemr/images', { headers: headers })
      .subscribe(data => {
        this.images = data;
      })
  }
}
