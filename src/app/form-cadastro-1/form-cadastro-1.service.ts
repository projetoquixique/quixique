import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CadastroService{
	static urlCadastros = "http://rest.learncode.academy/api/macelocosta/cadastrlo";;

	constructor(private http:Http){}

	cadastrarArtesao(dados){
		return this.http.post(CadastroService.urlCadastros, dados)
				.map((response:Response) => response.json() )
				.catch((error: Response) => Observable.throw(error));
  };
}