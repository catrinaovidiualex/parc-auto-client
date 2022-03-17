class Inchiriere{
    constructor(idMasina,idPersoana){
        this.idInchiriere=idInchiriere;
        this.idMasina=idMasina;
        this.idPersoana=idPersoana;
        this.createdate=createdate;
    }

    descriereInchiriere=()=>{
        let descriereInch="";
        descriereInch+=" ID inchiriere: "+this.idInchiriere+",";
        descriereInch+=" ID masina: "+this.idMasina+",";
        descriereInch+=" ID persoana: "+this.idPersoana+",";
        descriereInch+=" Data inchiriere: "+this.createdate;
        return descriereInch;

        }
    }

    export default Inchiriere;