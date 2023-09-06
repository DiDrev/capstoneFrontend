import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Isoup } from '../interfaces/soup';

@Injectable({
  providedIn: 'root'
})
export class GetSoupsService {

  constructor(private http: HttpClient) { }

  getSoups(){
	return this.http.get<Isoup[]>('http://localhost:3000/soups')
  }

  getSoup(soup_name: string){
	return this.http.get<Isoup>(`http://localhost:3000/soups/${soup_name}`)
  }
}
