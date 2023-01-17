import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor( private http : HttpClient) { }

getData(){
  return this.http.get('http://localhost:3000/grafica');
}

getUser(){
  return this.getData()
  .pipe( delay(1500),
  map((data) => {
    return {
      labels: Object.keys(data),
      datasets: [{ data: Object.values(data) }],
    };
  })
);}

}
