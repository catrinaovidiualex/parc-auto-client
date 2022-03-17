class Persoana{
    constructor(idPers, nume, prenume, varsta,user, parola){
           this.idPers=idPers;
           this.nume=nume;
           this.prenume=prenume;
           this.varsta=varsta;
           this.user=user;
           this.parola=parola;
    }

    descrierePersoana=()=>{
           let descriereP="";
           descriereP+=" ID persoana: "+this.idPers+",";
           descriereP+=" Nume persoana: "+this.nume+",";
           descriereP+=" Prenume persoana: "+this.prenume+",";
           descriereP+=" Varsta persoana: "+this.varsta+";";
           descriereP+=" User: "+this.user+";";
           descriereP+=" Parola: "+this.parola+";"

           return descriereP;
    }

}

export default Persoana;