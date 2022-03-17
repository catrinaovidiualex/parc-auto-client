import Persoana from "../model/Persoana.js";




class ControlPersoana{
constructor(){
this.list=[];

this.load();            
}

load=()=>{
let items=localStorage.getItem("persoane");

JSON.parse(items).forEach(pers => {
    this.list.push(new Persoana(pers.idPers,pers.nume,pers.prenume,pers.varsta,pers.user,pers.parola));
    
});

}

afisare=()=>{
this.list.forEach((e)=>{
    console.log(e);
});
}

//CRUD

adaugarePers=(pers)=>{

this.list.push(pers);
localStorage.removeItem("persoane");
localStorage.setItem('persoane',JSON.stringify(this.list));


}

updatePers=(pers)=>{

let pozitie=this.pozitiePers(pers);

if(pozitie!=-1){
    
    if(pers.nume!=""&&pers.nume){
        this.list[pozitie].nume=pers.nume;
    }
    if(pers.prenume!=""&&pers.prenume){
        this.list[pozitie].prenume=pers.prenume;
    }

    if(pers.varsta!=""&&pers.varsta){
        this.list[pozitie].varsta=pers.varsta;
    }
    
    if(pers.user!=""&&pers.user){
        this.list[pozitie].user=pers.user;
    }
    if(pers.parola!=""&&pers.parola){
        this.list[pozitie].parola=pers.parola;
    }

    
    this.save();

}


}

pozitiePers=(pers)=>{

for(let i=0;i<this.list.length;i++){
    if(this.list[i].idPers==pers.idPers){
        return i;
    }
}

return -1;

}

save=()=>{
localStorage.removeItem("persoane");
localStorage.setItem('persoane',JSON.stringify(this.list));
}

stergePers=(pers)=>{
let vec=this.list.filter((e)=>e.idPers!=pers.idPers);
this.list=vec;
this.save();

} 

//todo functie ce  primeste ca  parametru username si parola si returneaza persoana daca exista

checkUserDetails(username, pass){
  
    let arr=this.list.filter(e=>e.user===username&&e.parola===pass);

    console.log(arr);
    return arr;

}



 
}

export default ControlPersoana;