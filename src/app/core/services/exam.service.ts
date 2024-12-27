import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthEndpoint } from '../../../../projects/auth-api/src/lib/enums/AuthAPI.Endpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


 
   private readonly _HttpClient = inject (HttpClient)
   private apiUrl = 'https://exam.elevateegy.com/api/v1/exams';
   private apiById = 'https://exam.elevateegy.com/api/v1/exams/6700707030a3c3c1944a9c5d'
   private subApi='https://exam.elevateegy.com/api/v1/subjects'
   private qusApi= 'https://exam.elevateegy.com/api/v1/questions'
   private checkApi = 'https://exam.elevateegy.com/api/v1/questions/check'

   constructor(private http: HttpClient) { }
 
   getallExams(token: string): Observable<any> {
     const headers = new HttpHeaders({
       'token': token
     });
 
     return this._HttpClient.get(this.apiUrl, { headers });
   }

  
   getexamById(token:string): Observable<any> {
    const headers = new HttpHeaders({'token': token});

    return this._HttpClient.get(this.apiById, { headers });

   }


   getAllSubjects(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'token': token
    });

    return this._HttpClient.get(this.subApi, { headers });
  }


  getQuestions(token: string):Observable<any> {
    const headers = new HttpHeaders({ 'token': token});
    return this._HttpClient.get(this.qusApi, { headers });

}



checkquestion(body: any, token: string ):Observable<any>{
  const headers = new HttpHeaders({ 'token': token});
  return this._HttpClient.post (this.checkApi,body, { headers })
}

}