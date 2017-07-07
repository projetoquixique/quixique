import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService{
	
	constructor(private http:Http){}

  public serverBaseUrl:string = "http://localhost:3000/api" //não colocar a última barra

	post(url, dados){
    return this.http.post(url, dados)
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error.json().error));
	};

	get(url){
    console.log("getting " + url)
    return this.http.get(url)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error));
  };

  // get(url): Promise<any>
  // {
  //   return this.http.get(url).map(response => {
  //     return response.json() || {success: false, message: "No response from server"};
  //   }).catch((error: Response | any) => {
  //     return Observable.throw(error.json());
  //   }).toPromise();
  // }
}