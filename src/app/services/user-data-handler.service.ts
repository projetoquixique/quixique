import { Injectable } from '@angular/core';

@Injectable() 
export class UserDataHandlerService {
	constructor(){} 

 	newUserData;

 	newArtesao(){
 		let model = {tipo:"artesao", nome:undefined, cpf:undefined, dataDeNascimento:undefined, naturalidade:undefined, email:undefined, celular:undefined, telefone:undefined, 
                     nomeComercial:undefined, categoria:undefined, descricao:undefined, cep:undefined, rua:undefined, numero:undefined, complemento:undefined, bairro:undefined, cidade:undefined, estado:undefined,
                     numeroCartao:undefined, vencimentoCartao:undefined, titularCartao:undefined,
                     nomeDeUsuario:undefined, senha:undefined, linkPaginaWeb:undefined};
        return model;
 	};

 	newArtesaoVerifiers(){
 		let verifiers = {nome:{estado:undefined, mensagem:""}, cpf:{estado:undefined, mensagem:""}, dataDeNascimento:{estado:undefined, mensagem:""}, naturalidade:{estado:undefined, mensagem:""}, email:{estado:undefined, mensagem:""}, celular:{estado:undefined, mensagem:""}, telefone:{estado:true, mensagem:""},
                         nomeComercial:{estado:undefined, mensagem:""}, categoria:{estado:undefined, mensagem:""}, descricao:{estado:undefined, mensagem:""}, cep:{estado:undefined, mensagem:""}, rua:{estado:undefined, mensagem:""}, numero:{estado:true, mensagem:""}, complemento:{estado:true, mensagem:""}, bairro:{estado:undefined, mensagem:""}, cidade:{estado:undefined, mensagem:""}, estado:{estado:undefined, mensagem:""},
                         numeroCartao:{estado:true, mensagem:""}, vencimentoCartao:{estado:true, mensagem:""}, titularCartao:{estado:true, mensagem:""},
                         nomeDeUsuario:{estado:undefined, mensagem:""}, senha:{estado:undefined, mensagem:""}, confirmacaoSenha:{estado:undefined, mensagem:""}, linkPaginaWeb:{estado:true, mensagem:""}};
        return verifiers;
 	};

 	newCliente(){
 		let model = {tipo:"cliente", nome: undefined, dataDeNascimento: undefined, cpf: undefined, email: undefined, celular: undefined, 
                     cep: undefined, rua: undefined, numero:undefined, complemento: undefined, bairro: undefined, cidade: undefined, estado: undefined};
        return model;
 	};

 	newClienteVerifiers(){
 		let verifiers = {nome:{estado:undefined, mensagem:""}, dataDeNascimento:{estado:undefined, mensagem:""}, cpf:{estado:undefined, mensagem:""}, email:{estado:undefined, mensagem:""}, celular:{estado:undefined, mensagem:""},
                         cep:{estado:undefined, mensagem:""}, rua:{estado:true, mensagem:""}, numero:{estado:undefined, mensagem:""}, complemento:{estado:undefined, mensagem:""}, bairro:{estado:undefined, mensagem:""}, cidade:{estado:undefined, mensagem:""}, estado:{estado:undefined, mensagem:""},
                         nomeDeUsuario:{estado:undefined, mensagem:""}, senha:{estado:undefined, mensagem:""}, confirmacaoSenha:{estado:undefined, mensagem:""}};
  	    return verifiers;
 	};

}