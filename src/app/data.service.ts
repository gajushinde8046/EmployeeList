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

  private _url =  "http://localhost:3000/employees/";          // For JSON-Server Api
  private _purl =  'http://localhost:8000/api/details/';        //Django URL for PUT DELETE GET
 // private _gurl =  'http://localhost:8000/api/get/';       //For Django APi URL For POST GET

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

    // getData():Observable<any[]>{
    //   return this.http.get<any[]>(this._gurl)
       
    //  }
 
    //  createData(requestData):Observable<any>{
    //    return this.http.post<any>(this._gurl,requestData)
    //  }
    // deleteData(delData):Observable<any>{
   
    //   return this.http.delete<any>(this._purl + delData.id +'/',delData)
    // }

    // updateData(putData):Observable<any>{
    //   return this.http.put<any>(this._purl + putData.id +'/' , putData)
    // }
   
  }
 
