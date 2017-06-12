import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { MensagemErroInputComponent } from './../mensagem-erro-input/mensagem-erro-input.component';
import { TermosConfirmacaoComponent } from './../termos-confirmacao/termos-confirmacao.component';

import { RequestService } from './../services/request.service';
import { UserDataHandlerService } from './../services/user-data-handler.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css'],
})

export class FormCadastroComponent implements OnInit {

  constructor(private requestService:RequestService,
              private router:Router,
              private userDataHandler:UserDataHandlerService) { }

  pageCount:number = 0;

  previous(){
    if(this.pageCount > 0){
      this.pageCount -= 1;
    };
  };

  next(){
    if (this.formularioOk()){
      if (this.pageCount < 4){
        this.pageCount += 1;
      };
      if (this.pageCount == 2 && this.tipoDeUsuario == 'cliente'){
        this.userDataHandler.newUserData = this.novoUsuario;
      } else if (this.pageCount == 3 && this.tipoDeUsuario == 'artesao'){
        this.userDataHandler.newUserData = this.novoUsuario;
      };
    };
  };

  //incializa tipo de usuário e prepara campos para entradas
  tipoDeUsuario;

  novoUsuario;
  verificadores;
  confirmacaoSenha = undefined;

  controleVerificadores(identificador, mensagem) {
    identificador.estado = false;
    identificador.mensagem = mensagem;
  }

  mensagemCampoVazio = "Por favor, preencha este campo";
  mensagemSomenteNumeros = "Somente números são permitidos";

  verificaNome(){
    if (!(/\S/.test(this.novoUsuario.nome)) || this.novoUsuario.nome == null) {
      this.controleVerificadores(this.verificadores.nome, this.mensagemCampoVazio);
    } else if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/.test(this.novoUsuario.nome))) {
      this.controleVerificadores(this.verificadores.nome, "Números e caracteres especiais não são permitidos nesse campo");
    } else if (!(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.nome))) {
      this.controleVerificadores(this.verificadores.nome, "Insira seu nome completo");
    } else {
      this.verificadores.nome.estado = true;
    };
  };

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  verificaCPF(){
    if (!(/\S/.test(this.novoUsuario.cpf)) || this.novoUsuario.cpf == undefined) {
      this.controleVerificadores(this.verificadores.cpf, this.mensagemCampoVazio);
    } else if (this.novoUsuario.cpf.length !== 15 || !(+(this.novoUsuario.cpf))) {
      this.controleVerificadores(this.verificadores.cpf, "Insira um CPF válido");
    } else {
      this.verificadores.cpf.estado = true;
    };
  };

  dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  verificaDataDeNascimento(){
    if (!(/\S/.test(this.novoUsuario.dataDeNascimento)) || this.novoUsuario.dataDeNascimento == undefined) {
      this.controleVerificadores(this.verificadores.dataDeNascimento, this.mensagemCampoVazio);
    } else if (this.novoUsuario.dataDeNascimento == "" || !(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.novoUsuario.dataDeNascimento))) {
      this.controleVerificadores(this.verificadores.dataDeNascimento, "Insira uma data válida");
    } else {
      this.verificadores.dataDeNascimento.estado = true;
    };
  };

  verificaNaturalidade(){
    if (!(/\S/.test(this.novoUsuario.naturalidade)) || this.novoUsuario.naturalidade == undefined) {
      this.controleVerificadores(this.verificadores.naturalidade, this.mensagemCampoVazio);
    } else if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(this.novoUsuario.naturalidade))){
      this.controleVerificadores(this.verificadores.naturalidade, "Não são permitidos números nesse campo");
    } else {
      this.verificadores.naturalidade.estado = true;
    };
  };

  verificaEmail(){
    if (!(/\S/.test(this.novoUsuario.email)) || this.novoUsuario.email == undefined) {
      this.controleVerificadores(this.verificadores.email, this.mensagemCampoVazio);
    } else if (!(/\S+@\S+\.\S+/.test(this.novoUsuario.email))) {
      this.controleVerificadores(this.verificadores.email, "Insira um e-mail válido");
    } else {
      this.verificadores.email.estado = true;
    };
  };

  phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  verificaTelefone(){
    if (!(/\S/.test(this.novoUsuario.telefone)) || this.novoUsuario.telefone == undefined) {
      this.controleVerificadores(this.verificadores.telefone, this.mensagemCampoVazio);
    } else if (!(/^\((\d{2})\)?(\d{4,5}\-?\d{4})$/.test(this.novoUsuario.telefone))) {
      this.controleVerificadores(this.verificadores.telefone, "Insira um telefone válido");
    } else {
      this.verificadores.telefone.estado = true;
    };
  };

  cellphoneMask = ['(', /\d/, /\d/, ')', ' ', /9/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  verificaCelular(){
    if (!(/\S/.test(this.novoUsuario.celular)) || this.novoUsuario.celular == undefined) {
      this.controleVerificadores(this.verificadores.celular, this.mensagemCampoVazio);
    } else if (!(/^\((\d{2})\)?(\d{4,5}\-?\d{4})$/.test(this.novoUsuario.telefone))) {
      this.controleVerificadores(this.verificadores.celular, "Insira um telefone válido");
    } else {
      this.verificadores.celular.estado = true;
    };
  };

  verificaNomeComercial(){
    if (!(/\S/.test(this.novoUsuario.nomeComercial)) || this.novoUsuario.nomeComercial == undefined) {
      this.controleVerificadores(this.verificadores.nomeComercial, this.mensagemCampoVazio);
    } else {
      this.verificadores.nomeComercial.estado = true;
    };
  };

  verificaCategoria(){
    if (this.novoUsuario.categoria == undefined || this.novoUsuario.categoria == 0) {
      this.controleVerificadores(this.verificadores.categoria, "Selecione uma categoria");
    } else {
      this.verificadores.categoria.estado = true;
    };
  };

  verificaDescricao(){
    if (!(/\S/.test(this.novoUsuario.descricao)) || this.novoUsuario.descricao == undefined) {
      this.controleVerificadores(this.verificadores.descricao, this.mensagemCampoVazio);
    } else {
      this.verificadores.descricao.estado = true;
    };
  };

  cepMask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  verificaCep(){
    if (!(/\S/.test(this.novoUsuario.cep)) || this.novoUsuario.cep == undefined) {
      this.controleVerificadores(this.verificadores.cep, this.mensagemCampoVazio);
    } else if (this.novoUsuario.cep.length !== 9 || (/\d\S{5}[-]\\d\S{2}/.test(this.novoUsuario.cep))) {
      this.controleVerificadores(this.verificadores.cep, "Insira um CEP válido");
    } else {
      this.verificadores.cep.estado = true;
    };
  };

  verificaRua(){
    if (!(/\S/.test(this.novoUsuario.rua)) || this.novoUsuario.rua == undefined) {
      this.controleVerificadores(this.verificadores.rua, this.mensagemCampoVazio);
    } else {
      this.verificadores.rua.estado = true;
    };
  };

  verificaNumero(){
    if (!(/\S/.test(this.novoUsuario.numero)) || this.novoUsuario.numero == undefined) {
      this.controleVerificadores(this.verificadores.numero, this.mensagemCampoVazio);
    } else if (!(/^\d+$/.test(this.novoUsuario.numero))) {
      this.controleVerificadores(this.verificadores.numero, "Somente números são permitidos aqui");
    } else {
      this.verificadores.numero.estado = true;
    };
  };

  verificaComplemento(){
    if (this.novoUsuario.complemento !== undefined){
      if (!(/\S/.test(this.novoUsuario.complemento)) || this.novoUsuario.complemento == undefined) {
        this.controleVerificadores(this.verificadores.complemento, this.mensagemCampoVazio);
      } else {
        this.verificadores.complemento.estado = true;
      };
    }
  };

  verificaBairro(){
    if (!(/\S/.test(this.novoUsuario.bairro)) || this.novoUsuario.bairro == undefined) {
      this.controleVerificadores(this.verificadores.bairro, this.mensagemCampoVazio);
    } else {
      this.verificadores.bairro.estado = true;
    };
  };

  verificaCidade(){
    if (!(/\S/.test(this.novoUsuario.cidade)) || this.novoUsuario.cidade == undefined) {
      this.controleVerificadores(this.verificadores.cidade, this.mensagemCampoVazio);
    } else if (/^\d+$/.test(this.novoUsuario.cidade)) {
      this.controleVerificadores(this.verificadores.cidade, "Números não são permitidos aqui");
    } else {
      this.verificadores.cidade.estado = true;
    };
  };

  verificaEstado(){
    if (!(/\S/.test(this.novoUsuario.estado)) || this.novoUsuario.estado == undefined) {
      this.controleVerificadores(this.verificadores.estado, this.mensagemCampoVazio);
    } else if (/^\d+$/.test(this.novoUsuario.estado)) {
      this.controleVerificadores(this.verificadores.estado, "Números não são permitidos aqui");
    } else {
      this.verificadores.estado.estado = true;
    };
  };

  cardNumberMask = [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
  verificaNumeroCartao(){
    if (this.novoUsuario.numeroCartao !== undefined) {
      if (!(/\S/.test(this.novoUsuario.numeroCartao)) || this.novoUsuario.numeroCartao == "") {
        this.controleVerificadores(this.verificadores.numeroCartao, this.mensagemCampoVazio);
      } else if (this.novoUsuario.numeroCartao.length < 16 || !(/^\d+$/.test(this.novoUsuario.numeroCartao))) {
        this.controleVerificadores(this.verificadores.numeroCartao, "Insira um número válido");
      } else {
        this.verificadores.numeroCartao.estado = true;
      };
    };
  };

  cardEnd = [/\d/, /\d/, '/', /\d/, /\d/]
  verificaVencimentoCartao(){
    if (this.novoUsuario.vencimentoCartao !== undefined) {
      if (!(/\S/.test(this.novoUsuario.vencimentoCartao)) || this.novoUsuario.vencimentoCartao == "") {
        this.controleVerificadores(this.verificadores.vencimentoCartao, this.mensagemCampoVazio);
      } else if (!(/[\d]{2}\/[\d]{4}/.test(this.novoUsuario.vencimentoCartao))) {
        this.controleVerificadores(this.verificadores.vencimentoCartao, "Insira uma data válida");
      } else {
        this.verificadores.vencimentoCartao.estado = true;
      };
    };
  };

  verificaTitularCartao(){
    if (this.novoUsuario.titularCartao !== undefined) {
      if (!(/\S/.test(this.novoUsuario.titularCartao)) || this.novoUsuario.titularCartao == undefined) {
        this.controleVerificadores(this.verificadores.titularCartao, this.mensagemCampoVazio);
      } else if (!(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.titularCartao))) {
        this.controleVerificadores(this.verificadores.titularCartao, "Insira o nome completo");
      } else {
        this.verificadores.titularCartao.estado = true;
      };
    };
  };

  verificaNomeDeUsuario(){
    if (this.novoUsuario.nomeDeUsuario !== undefined) {
      if (!(/\S/.test(this.novoUsuario.nomeDeUsuario))) {
        this.controleVerificadores(this.verificadores.nomeDeUsuario, this.mensagemCampoVazio);
      } else if (!(/^[a-zA-Z0-9_-]+$/.test(this.novoUsuario.nomeDeUsuario))) {
        this.controleVerificadores(this.verificadores.nomeDeUsuario, "Pode conter apenas letras, números, - e _");
      } else if (this.novoUsuario.nomeDeUsuario.length < 6) {
        this.controleVerificadores(this.verificadores.nomeDeUsuario, "O nome de usuário deve ter ao menos seis caracteres");
      } else {
        this.verificadores.nomeDeUsuario.estado = true;
      };
    } else {
      this.controleVerificadores(this.verificadores.nomeDeUsuario, this.mensagemCampoVazio);
    }
  };

  verificaSenha(){
    if (this.novoUsuario.senha !== undefined) {
      if (!(/\S/.test(this.novoUsuario.senha))) {
        this.controleVerificadores(this.verificadores.senha, this.mensagemCampoVazio);
      } else if (this.novoUsuario.senha.length < 6) {
        this.controleVerificadores(this.verificadores.senha, "A senha deve ter mais de seis caracteres");
      } else {
        this.verificadores.senha.estado = true;
      };
    } else {
      this.controleVerificadores(this.verificadores.senha, this.mensagemCampoVazio);
    }
  };

  verificaConfirmacaoSenha(){
    if (this.novoUsuario.senha !== this.confirmacaoSenha) {
      this.controleVerificadores(this.verificadores.confirmacaoSenha, "As senhas não conferem");
    } else {
      this.verificadores.confirmacaoSenha.estado = true;
    };
  };

  verificaLinkPaginaWeb(){
    if (this.novoUsuario.linkPaginaWeb !== undefined) {
      if (!(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/).test(this.novoUsuario.linkPaginaWeb)) {
        this.controleVerificadores(this.verificadores.linkPaginaWeb, "Digite um endereço válido");
      } else {
      this.verificadores.linkPaginaWeb.estado = true;
      };
    };
  };

  formularioOk(){
    let v = this.verificadores;
    if (this.tipoDeUsuario == "artesao") {
      if (this.pageCount == 0) {
        this.verificaNome(); this.verificaCPF(); this.verificaDataDeNascimento();  this.verificaNaturalidade(); this.verificaEmail(); this.verificaTelefone();
        if (v.nome.estado && v.cpf.estado && v.dataDeNascimento.estado && v.naturalidade.estado && v.email.estado && v.telefone.estado) {
          return true;
        } else {
          return false;
        };
      } else if (this.pageCount == 1) {
        this.verificaNomeComercial(); this.verificaCategoria(); this.verificaDescricao(); this.verificaCep(); this.verificaRua(); this.verificaNumero(); this.verificaComplemento(); this.verificaBairro(); this.verificaCidade(); this.verificaEstado();
        if (v.nomeComercial.estado && v.categoria.estado && v.descricao.estado && v.cep.estado && v.rua.estado && v.numero.estado && v.complemento.estado && v.bairro.estado && v.cidade.estado && v.estado.estado) {
          return true;
        } else {
          return false;
        };
      } else if (this.pageCount == 2) {
        this.verificaNumeroCartao(); this.verificaVencimentoCartao(); this.verificaTitularCartao();
        if (v.numeroCartao.estado && v.vencimentoCartao.estado && v.titularCartao.estado) {
          return true;
        } else {
          return false;
        };
      } else if (this.pageCount == 3) {
        this.verificaNomeDeUsuario(); this.verificaSenha(); this.verificaConfirmacaoSenha(); this.verificaLinkPaginaWeb();
        if (v.nomeDeUsuario.estado && v.senha.estado && v.confirmacaoSenha.estado && v.linkPaginaWeb.estado) {
          return true;
        } else {
          return false;
        };
      };
    } else if (this.tipoDeUsuario == "cliente") {
      if (this.pageCount == 0) {
        this.verificaNome(); this.verificaDataDeNascimento(); this.verificaCPF(); this.verificaEmail(); this.verificaTelefone();
        if (v.nome.estado && v.cpf.estado && v.dataDeNascimento.estado && v.email.estado && v.telefone.estado) {
          return true;
        } else {
          return false;
        };
      } else if (this.pageCount == 1) {
        this.verificaRua(); this.verificaNumero(); this.verificaComplemento(); this.verificaBairro(); this.verificaCidade(); this.verificaEstado();this.verificaCep();
        if (v.rua.estado && v.numero.estado && v.complemento.estado && v.bairro.estado && v.cidade.estado && v.estado.estado, v.cep.estado) {
          return true;
        } else {
          return false;
        };
      } else if (this.pageCount == 2) {
        this.verificaNomeDeUsuario(); this.verificaSenha(); this.verificaConfirmacaoSenha();
        if (v.nomeDeUsuario.estado && v.senha.estado && v.confirmacaoSenha.estado) {
          return true;
        } else {
          return false;
        };
      };
    };
  };

  ngOnInit() {
    //tipo de usuário
    this.tipoDeUsuario = sessionStorage.getItem('tipoUsuario');
    console.log(this.tipoDeUsuario)
    if (!this.tipoDeUsuario){
      this.router.navigate(['/']);
      return;
    } else if (this.tipoDeUsuario == 'artesao'){
      this.novoUsuario = this.userDataHandler.newArtesao();
      this.verificadores = this.userDataHandler.newArtesaoVerifiers();
    } else if (this.tipoDeUsuario == 'cliente'){
      this.novoUsuario = this.userDataHandler.newCliente();
      this.verificadores = this.userDataHandler.newClienteVerifiers();
    };
  };

}
