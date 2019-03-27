import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workers } from './workers';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  url = 'http://localhost:51123/Api/Workers';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

  constructor(private http: HttpClient) { }

  getAllWorkers(): Observable<Workers[]> {
    return this.http.get<Workers[]>(this.url + '/ReadAllWorkersInfo');
  }

  getWorkerById(WorkerId: string): Observable<Workers> {
    return this.http.get<Workers>(this.url + '/ReadWorkerById/' + WorkerId);
  }

  createWorker(worker: Workers): Observable<Workers> {
    return this.http.post<Workers>(this.url + '/CreateWorker/', worker, this.httpOptions);
  }

  updateWorker(worker: Workers): Observable<Workers> {
    return this.http.put<Workers>(this.url + '/UpdateWorker/', worker, this.httpOptions);
  }

  deleteWorkerById(workerId: string): Observable<number> {
    return this.http.delete<number>(this.url + '/DeleteWorkerById/' + workerId, this.httpOptions);
  }
}