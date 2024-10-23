export default class Pergunta {
    constructor(pergunta, alternativas, resposta){
        this.pergunta = pergunta;
        this.alternativas = alternativas;
        this.resposta = resposta;
    }
    get pergunta(){
        return this.pergunta;
    }
    get alternativas(){
        return this.alternativas;
    }
    get resposta(){
        return this.resposta;
    }
    set pergunta(pergunta){
        this.pergunta = pergunta;
    }
    set alternativas(alternativas){
        this.alternativas = alternativas;
    }
    set resposta(resposta){
        this.resposta = resposta;
    }
    getJson(){
        return JSON.stringify(this);
    }
    setFromJson(json){
        let obj = JSON.parse(json);
        this.pergunta = obj.pergunta;
        this.alternativas = obj.alternativas;
        this.resposta = obj.resposta;
    }
    getAlternativa(index){
        return this.alternativas[index];
    }
}