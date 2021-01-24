import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getRadomFact() {
    return this.http.get(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    );
  }
}
