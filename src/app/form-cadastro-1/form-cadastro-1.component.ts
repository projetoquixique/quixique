import { Component, OnInit } from '@angular/core';
import { CadastroService } from './form-cadastro-1.service'

@Component({
  selector: 'app-form-cadastro-1',
  templateUrl: './form-cadastro-1.component.html',
  styleUrls: ['./form-cadastro-1.component.css']
})

export class FormCadastro1Component implements OnInit {

  constructor(private cadastroService:CadastroService) { }

  nextButton:string = "avançar";

  pageCount:number = 0;

  previous(){
    if(this.pageCount > 0){
      this.pageCount -= 1;
    }
  }

  next(){
    // alert("proximo:");
    if(this.pageCount < 3 && this.formularioOk()){
      this.pageCount += 1;
    }
  }

  cadastrar(){
    this.cadastroService.cadastrarArtesao(this.novoUsuario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  // capturar(e){
  //   this.show = e;
  //   console.log(e);
  // }
  
  novoUsuario = {nome:"", cpf:"", dataDeNascimento:"", naturalidade:"", email:"", telefone:"", 
                 nomeComercial:"", categoria:"", descricao:"", cep:"", rua:"", numero:"", complemento:"", bairro:"", cidade:"", estado:"",
                 numeroCartao:"", vencimentoCartao:"", titularCartao:"",
                 nomeDeUsuario:"", senha:"", linkPaginaWeb:""};
  confirmacaoSenha = "";
  verificadores = {nome:undefined, cpf:undefined, dataDeNascimento:undefined, naturalidade:undefined, email:undefined, telefone:undefined,
                   nomeComercial:undefined, categoria:undefined, descricao:undefined, cep:undefined, rua:undefined, numero:true, complemento:undefined, bairro:undefined, cidade:undefined, estado:undefined,
                   numeroCartao:true, vencimentoCartao:true, titularCartao:true,
                   nomeDeUsuario:undefined, senha:undefined, confirmacaoSenha:undefined, linkPaginaWeb:true};

  verificaNome(){ 
    if (!(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.nome)) || /\d/.test(this.novoUsuario.nome)) this.verificadores.nome = false;
    else this.verificadores.nome = true; 
  }

  verificaCPF(){
    if (this.novoUsuario.cpf.length !== 11 || !(+(this.novoUsuario.cpf))) this.verificadores.cpf = false;
    else this.verificadores.cpf = true; 
  }

  //verificar se é menor de idade
  verificaDataDeNascimento(){
    if (this.novoUsuario.dataDeNascimento == "" || !(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.novoUsuario.dataDeNascimento))) this.verificadores.dataDeNascimento = false;
    else this.verificadores.dataDeNascimento = true;
  }

  verificaNaturalidade(){
    if (!(/\S/.test(this.novoUsuario.naturalidade))) this.verificadores.naturalidade = false;
    else this.verificadores.naturalidade = true;
  }

  verificaEmail(){
    if (this.novoUsuario.email == "" || !(/\S+@\S+\.\S+/.test(this.novoUsuario.email))) this.verificadores.email = false;
    else this.verificadores.email = true;
  }

  verificaTelefone(){
    if (this.novoUsuario.telefone == "" || !(/^\((\d{2})\)?(\d{4,5}\-?\d{4})$/.test(this.novoUsuario.telefone))) this.verificadores.telefone = false;
    else this.verificadores.telefone = true;
  }

  verificaNomeComercial(){
    if (!(/\S/.test(this.novoUsuario.nomeComercial))) this.verificadores.nomeComercial = false;
    else this.verificadores.nomeComercial = true;
  }

  verificaCategoria(){
    if (this.novoUsuario.categoria == "") this.verificadores.categoria = false;
    else this.verificadores.categoria = true;
  }

  verificaDescricao(){
    if (!(/\S/.test(this.novoUsuario.descricao))) this.verificadores.descricao = false;
    else this.verificadores.descricao = true;
  }

  verificaCep(){
    if (this.novoUsuario.cep.length !== 9 || (/\d{5}[-]\\d{2}/.test(this.novoUsuario.cep))) this.verificadores.cep = false;
    else this.verificadores.cep = true;
  }

  verificaRua(){
    if (!(/\S/.test(this.novoUsuario.rua))) this.verificadores.rua = false;
    else this.verificadores.rua = true;
  }

  verificaNumero(){
    if (!(/\S/.test(this.novoUsuario.numero))) this.verificadores.numero = false;
    else this.verificadores.numero = true;
  }

  verificaComplemento(){
    if (this.novoUsuario.complemento !== "")
      if (!(/\S/.test(this.novoUsuario.complemento))) this.verificadores.complemento = false;
      else this.verificadores.complemento = true;
    else this.verificadores.complemento = true;
  }

  verificaBairro(){
    if (!(/\S/.test(this.novoUsuario.bairro))) this.verificadores.bairro = false;
    else this.verificadores.bairro = true;
  }

  verificaCidade(){
    if (!(/\S/.test(this.novoUsuario.cidade))) this.verificadores.cidade = false;
    else this.verificadores.cidade = true;
  }

  verificaEstado(){
    if (!(/\S/.test(this.novoUsuario.estado))) this.verificadores.estado = false;
    else this.verificadores.estado = true;
  }

  verificaNumeroCartao(){
    if (this.novoUsuario.numeroCartao !== "")
      if (this.novoUsuario.numeroCartao.length < 16 || !(/^\d+$/.test(this.novoUsuario.numeroCartao))) this.verificadores.numeroCartao = false;
      else this.verificadores.numeroCartao = true;
    else this.verificadores.numeroCartao = true;
  }

  verificaVencimentoCartao(){
    if (this.novoUsuario.vencimentoCartao !== "")
      if (!(/[\d]{2}\/[\d]{4}/.test(this.novoUsuario.vencimentoCartao))) this.verificadores.vencimentoCartao = false;
      else this.verificadores.numeroCartao = true;
    else this.verificadores.vencimentoCartao = true;
  }

  verificaTitularCartao(){
    if (this.novoUsuario.titularCartao !== "")
      if (this.novoUsuario.titularCartao == "" || !(/([a-zA-Z]+\s?\b){2,}/g.test(this.novoUsuario.titularCartao)) || /\d/.test(this.novoUsuario.titularCartao)) this.verificadores.titularCartao = false;
      else this.verificadores.numeroCartao = true;
    else this.verificadores.titularCartao = true;
  }

  verificaNomeDeUsuario(){
    if (!(/^[a-zA-Z0-9]+$/.test(this.novoUsuario.nomeDeUsuario))) this.verificadores.nomeDeUsuario = false;
    else this.verificadores.nomeDeUsuario = true;
  }

  verificaSenha(){
    if (!(/\S/.test(this.novoUsuario.senha)) || this.novoUsuario.senha.length < 6) this.verificadores.senha = false;
    else this.verificadores.senha = true;
  }

  verificaConfirmacaoSenha(){
    if (this.novoUsuario.senha !== this.confirmacaoSenha) this.verificadores.confirmacaoSenha = false;
    else this.verificadores.confirmacaoSenha = true;
  }

  verificaLinkPaginaWeb(){
    if (this.novoUsuario.linkPaginaWeb !== "")
      if (!(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/).test(this.novoUsuario.linkPaginaWeb)) this.verificadores.linkPaginaWeb = false;
      else this.verificadores.linkPaginaWeb = true;
    else this.verificadores.linkPaginaWeb = true;
  }

  formularioOk(){
    let v = this.verificadores;
    if (this.pageCount == 0)
      if (v.nome && v.cpf && v.dataDeNascimento && v.naturalidade && v.email && v.telefone) return true;
      else return false;
    if (this.pageCount == 1)
      if (v.nomeComercial && v.categoria && v.descricao && v.cep && v.rua && v.numero && v.complemento && v.bairro && v.cidade && v.estado) return true;
      else return false;
    if (this.pageCount == 2)
      if (v.numeroCartao && v.vencimentoCartao && v.titularCartao) return true;
      else return false;
    if (this.pageCount == 4)
      console.log(v.nomeDeUsuario, v.senha, v.confirmacaoSenha, v.linkPaginaWeb)
      if (v.nomeDeUsuario && v.senha && v.confirmacaoSenha && v.linkPaginaWeb) return true;
      else return false;
  }

  gerarMensagemDeErro(){

  }

  ngOnInit() {
  }

}
