export class DadosExibirMensagens{
  constructor(
    public idUsuarioEnviou:string,
    public IdUsuarioRecebeu:string,
    public conteudo:string,
    public data:Date,
  ){}
}
