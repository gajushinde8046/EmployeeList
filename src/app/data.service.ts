import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,throwError }from 'rxjs/';
// import { catchError}from 'rxjs/operators';
import {iData} from './data';
import { _sanitizeUrl } from '@angular/core/src/sanitization/url_sanitizer';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  id:number

  private _furl = "https://getinfo-3e2e0.firebaseio.com/employees/.json";
  private _url =  "http://localhost:3000/employees/";
  // private _url =  "assets/data.json/";
  //  private deleteurl = "https://getinfo-3e2e0.firebaseio.com/employees/";
   private _puturl = "http://localhost:3000/employees";



  constructor(private http:HttpClient) { 
  }

    getData():Observable<any[]>{
     return this.http.get<any[]>(this._url)
      
    }

    createData(requestData):Observable<any>{
      return this.http.post<any>(this._url,requestData)
    }

    deleteData(delData):Observable<any>{
   
      return this.http.delete<any>(this._url + delData.id ,delData)
    }

    updateData(putData):Observable<any>{
      return this.http.put<any>(this._url + putData.id  , putData)
    }
   
  }
 
