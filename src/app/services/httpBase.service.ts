import {HttpClient} from '@angular/common/http';
import {ApiRouts} from '../constants';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService{
  constructor(private http: HttpClient) {}

  Get(endPoint: string){
    return this.http.get(ApiRouts.baseUrl + endPoint);
  }
  Post(data: any, endPoint: string){
    return this.http.post(ApiRouts.baseUrl + endPoint, data );
  }
}
