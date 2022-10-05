import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Front } from '../model/front';

@Injectable({
  providedIn: 'root'
})
export class FrontService {
  froURL = 'https://portfolio-matiasb.herokuapp.com/front/';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Front[]>{
    return this.httpClient.get<Front[]>(this.froURL + 'lista');
  }

  public detail(id: number): Observable<Front>{
    return this.httpClient.get<Front>(this.froURL + `detail/${id}`);
  }

  public save(front: Front):Observable<any>{
    return this.httpClient.post<any>(this.froURL + 'create', front);
  }

  public update(id:number, front: Front): Observable<any>{
    return this.httpClient.put<any>(this.froURL + `update/${id}`, front);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.froURL + `delete/${id}`);
  }
}
