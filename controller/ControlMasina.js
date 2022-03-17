import Masina from "../model/Masina.js";


class ControlMasina{


     constructor(){

        this.list=[];

        this.load();
     }


     load=()=>{
        let items=localStorage.getItem("masini");
        
        JSON.parse(items).forEach(car => {
        
        this.list.push(new Masina(car.id,car.marca,car.pret,car.an));
            
        });
     }

     afisare=()=>{



        this.list.forEach((e)=>{

             console.log(e);
        })
     }

     //CRUD
     //addCar

     adaugareMasinaNoua=(masina)=>{

      this.list.push(masina);
      
      localStorage.removeItem("masini");
      
      localStorage.setItem('masini',JSON.stringify(this.list));
     

    }

     //updateCar

     update=(masina)=>{
       
      let poz=this.pozitieMasina(masina);

      if(poz!=-1){


           if(masina.marca!=""&&masina.marca){
               this.list[poz].marca=masina.marca;
              
           }

           if(masina.pret!=""&&masina.pret){
              this.list[poz].pret=masina.pret;
           }

           if(masina.an!=""&&masina.an){
            this.list[poz].an=masina.an;
        }
        
        this.save();
      }

    

     }

     //deleteCar

     stergeMasina=(masina)=>{

    
      
      let vec=this.list.filter((e)=>e.id!=masina.id);
      this.list=vec;
      this.save();
    
     }


     pozitieMasina=(masina)=>{     
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==masina.id){
               return i;
            }
         }
        return -1;
   }

     // pentru a salva datele din lista in localstorage 
      save=()=>{

         localStorage.removeItem("masini");
         localStorage.setItem('masini',JSON.stringify(this.list));
         

      
      }

      getMasinaById=(id)=>{

        
         for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==id){
               return this.list[i];
            }
         }
        return -1;
      }







}

export default ControlMasina;