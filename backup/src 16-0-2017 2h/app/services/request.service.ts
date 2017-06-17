import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService{
	
	constructor(private http:Http){}

	post(url, dados){
    return this.http.post(url, dados)
                          .map((response:Response) => response.json())
                          .catch((error:Response) => Observable.throw(error));
	};

	get(url){
    return this.http.get(url)
                        .map((response:Response) => response.json())
                        .catch((error:Response) => Observable.throw(error));
  };
}