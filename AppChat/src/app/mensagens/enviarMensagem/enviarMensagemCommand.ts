export class EnviarMensagemCommand{
  constructor(
    public idUsuarioEnviou:string,
    public idUsuarioRecebe:string,
    public conteudo:string,
  ){}
}
