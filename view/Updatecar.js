import ControllerMasini from "../controller/ControlMasina.js";
import Masina from "../model/Masina.js";
import Home from "./Home.js";

export default class Updatecar{

    constructor(id){
        this.container=document.querySelector(".container");

        this.createUpdatePage();

        this.controllerMasini=new ControllerMasini();

        this.masina=this.controllerMasini.getMasinaById(id);

        
       
       // this.updateCars=document.querySelector(".updateCars");
       // this.updateCars.addEventListener("click",this.handleUpdate)

        this.populateInputs();

        this.m={id};


        

        this.container=document.querySelector(".updateCars");

        this.container.addEventListener('input',this.handleUpdateOfInputs);

        this.btnModif=document.querySelector(".modifMasina");

        this.btnModif.addEventListener("click",this.handleModificaMasina);

        this.btnDeleteC=document.querySelector(".stergeMasina");
        this.btnDeleteC.addEventListener("click",this.handleStergeMasina);

        this.btnExitChange=document.querySelector(".anuleazaModif");
        this.btnExitChange.addEventListener("click",this.handleAnuleazaModificare);
       
        
    }

    

    createUpdatePage=()=>{
    
     this.container.innerHTML=`
            <form class="containerModif">


            <div class="updateCars">

                <h3>Modificare masina</h3>

                <label for="text">ID</label>
                <input type="text" class="idMasina"></input>

                <label for="text">Marca<label>
                <input type="text" class="marcaMasina"></input>

                <label for="text">Pret</label>
                <input type="text" class="pretMasina"></input>

                <label for="text">An<label>
                <input type="text" class="anMasina"></input>
            </div>

            <div class="buttonsUpdateCars">
                <button class="modifMasina">Modifica masina</button>
                <button class="stergeMasina">Sterge Masina</button>
                <button class="anuleazaModif">Anuleaza</button>
                
            </div> 


            </form>

     `



    }

    handleUpdateOfInputs=(e)=>{


        let obj=e.target;

        if(obj.classList.contains('marcaMasina')){

            this.m.marca=obj.value;
          
        }

        if (obj.classList.contains("idMasina")){
            this.m.id=obj.value;
           
        }

        if (obj.classList.contains("pretMasina")){
            this.m.pret=obj.value;

            
        }

        if (obj.classList.contains("anMasina")){
            this.m.an=obj.value;

            
        }

        

        

    }

  
    populateInputs=()=>{

        let idMasina=document.querySelector(".idMasina");
        idMasina.value=this.masina.id;

        let marcaMasina=document.querySelector(".marcaMasina");
        marcaMasina.value=this.masina.marca;

        let pretMasina=document.querySelector(".pretMasina");
        pretMasina.value=this.masina.pret;

        let anMasina=document.querySelector(".anMasina");
        anMasina.value=this.masina.an;

        

    }

    handleModificaMasina=(e)=>{

        e.preventDefault();

        console.log("asdasd");

         this.controllerMasini.update(this.m);

       
         new Home();

         
    }

    handleStergeMasina=(e)=>{
        e.preventDefault();
            console.log("test stergere masina");
         this.controllerMasini.stergeMasina(this.m);
         new Home();
    }

    handleAnuleazaModificare=(e)=>{
        e.preventDefault();
        new Home();
    }

}