
class Masina{
      

       constructor(id,marca,pret,an){
              this.id=id;
              this.marca=marca;
              this.pret=pret;
              this.an=an;
       }

        descriere=()=>{
            let descriere="";
            descriere+=" Id Masina: "+this.id+",";
            descriere+=" Marca masina: "+this.marca+",";
            descriere+=" Pret masina: "+this.pret+",";
            descriere+=" An masina: "+this.an+";";
            
            return descriere;
        }


}





export default Masina;