import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';
// private toastr: ToastrService
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public apiRoot: string;
  private headers: object;
  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private router: Router,
              ) {
  }
  getURL(sEndPoint: string) {
    switch (sEndPoint) {
      default:
        return `${environment.api}${sEndPoint}`;
    }
  }

  getHeaders(sEndPoint: string) {
    let headers: any = {};
    return {
      headers: headers
    };
  }

  getRequest(endPoint: string, id: any = null, showSpinner: boolean = true, sHeaders: any = null): Observable<any> {

    if (showSpinner) {
      this.spinner.show();
    }

    let apiURL = this.getURL(endPoint);
    apiURL = id ? `${apiURL}${'/'}${id}` : apiURL;
    let headers = sHeaders ? { headers: sHeaders } : this.getHeaders(endPoint);
    // console.log(headers);
    return this.http.get(apiURL, headers).map(
      response => {
        if (showSpinner) {
          this.spinner.hide();
        }
        return response;
      })
      .catch(sError => {
        this.apiError(sError);
        throw sError;
      });
  }

  postRequest(endPoint: string, sRequestModel: object, showSpinner: boolean = true, sHeaders: any = null): Observable<any> {

    if (showSpinner) {
      this.spinner.show();
    }

    let apiURL = this.getURL(endPoint);
    let headers = sHeaders ? { headers: sHeaders } : this.getHeaders(endPoint);

    return this.http.post(apiURL, sRequestModel, headers)
      .map(response => {
        if (showSpinner) {
          this.spinner.hide();
        }
        return response;
      })
      .catch(sError => {
        this.apiError(sError);
        throw sError;
      });
  }
// getUserByUserId(userId: string) {
//   let url = this.getURL(endPoint);
//   return this.http.get<any[]>(this.url, {
//     params:new HttpParams().set('userId', userId)
//   })
// }

  apiError(sError) {

    this.spinner.hide();
    console.log(sError);
    if (sError.status == 401) {
      // this.toastr.error("Session Expired, Please login to continue");
      alert('Session Expired, Please login to continue');
      window.localStorage.removeItem('mean-token');
      this.router.navigateByUrl('/login');
      return;
    }
    alert('Server Error. Please try later');
    // this.toastr.error("Server Error. Please try later");
  }

}
