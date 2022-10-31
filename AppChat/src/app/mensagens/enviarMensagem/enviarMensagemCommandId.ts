export class EnviarMensagemCommandId{
  constructor(
    public id:string,
    public idUsuarioEnviou:string,
    public conteudo:string,
    public data:Date,
  ){}
}
