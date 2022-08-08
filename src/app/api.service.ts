import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://api.nasa.gov/planetary/apod';
  private apiKey: string = '?api_key=FfipCNdERKan4kU0nrJTcn0snaAiw901HyydJUmd';

  constructor(private httpClient: HttpClient) {}

  getApi(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}${this.apiKey}`);
  }
}
