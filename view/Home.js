import Data from "../Api.js";
import ControllerMasini from "../controller/ControlMasina.js"

import Addcar from "../view/Addcar.js";

import Updatecar from "../view/Updatecar.js";

class Home{


     constructor(person){

        this.data = new Data();


        this.container=document.querySelector(".container");

        this.createPage();

        this.controllMasini=new ControllerMasini();

        this.populateTable();

        this.btnCreareMasina=document.querySelector(".creeazaMasina");
        this.btnCreareMasina.addEventListener("click",this.handleclick);

        
        this.tableCars=document.querySelector(".tableCars");
        this.tableCars.addEventListener("click",this.handleSelectCar);
        this.person=person;

        

       
     }

     createPage=()=>{

        this.container.innerHTML=`
        
        
        <h3>Masini</h3>
        <button class="creeazaMasina">Creeaza Masina</button>
        <!--<button class="inchiriazaMasina">Inchiriaza Masina</button>-->
        <table class="tableCars"> 
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Pret</th>
                    <th scope="col">An</th>
                 </tr>
    
            </thead>
    
            <tbody class="table">
               
    
               
            </tbody>
    
        </table>
        
        `

     }

     populateTable= async()=>{

        let cars=await this.data.cars();
        let table=document.querySelector(".table");

        cars.forEach((e)=>{

            table.innerHTML+=`
            <tr>
                <th scope="row">${e.id}</th>
                <td><a href="#" class="linkCars">${e.marca}</a></td>
                <td>${e.pret}</td>
                <td>${e.an}</td>
              </tr>
            
            `
        })
     }

     handleclick=(e)=>{


        e.preventdefault;

        console.log("aici");


        new Addcar();
       


     }

    

     handleSelectCar=(e)=>{
        

      let obj=e.target;

      if(obj.classList.contains("linkCars")){
       
          // extragem id-ul masinii
         
         let idparseInt=obj.parentNode.previousSibling.parentNode.textContent.trim();

         new Updatecar(parseInt(idparseInt));

      }

     }

     handleUpdateCar=(e)=>{
        let obj=e.target;

      console.log(obj);

     }

}
export default Home;
