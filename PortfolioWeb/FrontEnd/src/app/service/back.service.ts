import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Back } from '../model/back';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  backURL = 'http://localhost:8080/back/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Back[]>{
    return this.httpClient.get<Back[]>(this.backURL + 'lista');
  }

  public detail(id: number): Observable<Back>{
    return this.httpClient.get<Back>(this.backURL + `detail/${id}`);
  }

  public save(back: Back):Observable<any>{
    return this.httpClient.post<any>(this.backURL + 'create', back);
  }

  public update(id:number, back: Back): Observable<any>{
    return this.httpClient.put<any>(this.backURL + `update/${id}`, back);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.backURL + `delete/${id}`);
  }
}
