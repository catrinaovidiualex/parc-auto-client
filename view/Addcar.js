import ControllerMasini from "../controller/ControlMasina.js";
import Masina from "../model/Masina.js";
import Home from "./Home.js";

class Addcar{

    constructor(){
    this.containerAddCar=document.querySelector(".container");
    this.createAddCarPage();
    this.control= new ControllerMasini();

    this.masina= new Masina();

    this.inputCars= document.querySelector(".inputCars");

    this.inputCars.addEventListener("input",this.handleChange);
    this.add=document.querySelector(".newCars");

    this.add.addEventListener("click",this.handleclickadd);

    this.anulare=document.querySelector(".anuleaza");
    this.add.addEventListener("click",this.handleCancelation);

 
 
    }


    createAddCarPage=()=>{



        this.containerAddCar.innerHTML=`

        <h3>Masina Noua</h3>

        <div class="inputCars">

            <label for="text">ID</label>
            <input type="text" class="idMasina"></input>

            <label for="text">Marca<label>
            <input type="text" class="marcaMasina"></input>

            <label for="text">Pret</label>
            <input type="text" class="pretMasina"></input>

            <label for="text">An<label>
            <input type="text" class="anMasina"></input>
        </div>

        <div class="buttonsAddCars">
            <input type="" value="Salveaza masina noua" class="newCars">
            <button class="anuleaza">Anuleaza</button>
        </div>
        
        `
    }


   

    handleChange=(e)=>{


         let obj=e.target;

         if(obj.classList.contains("idMasina")){
            this.masina.id=obj.value;
           
        }


         if(obj.classList.contains("marcaMasina")){

            this.masina.marca=obj.value;
          
         }
         if(obj.classList.contains("pretMasina")){
             this.masina.pret=obj.value;
            
         }

         if(obj.classList.contains("anMasina")){
            this.masina.an=obj.value;
            
        }



        console.log(this.masina);

       


    }

    handleclickadd=()=>{
       
        this.control.adaugareMasinaNoua(this.masina);
       

        new Home();
    
  
       }
       
    handleCancelation=(e)=>{
        e.preventDefault();
        new Home();
       
    }   
 

}


export default Addcar;