import { listContacts } from "./dependencies.mjs";

let addcontac = document.getElementById("btn-add")
addcontac.addEventListener("click",function(){
    const card= document.createElement("div");
    divchar.appendChild(card)

    let chartxt= document.createElement("p");
    chartxt.innerText="ingrese el nombre del contacto" 
    card.appendChild(chartxt)
    let char= document.createElement("input");
    card.appendChild(char)

    chartxt= document.createElement("p");
    chartxt.innerText="ingrese el apellido del contacto" 
    card.appendChild(chartxt)
    char= document.createElement("input");
    card.appendChild(char)
  
    chartxt= document.createElement("p");
    chartxt.innerText="ingrese el numero telefonico del contacto" 
    card.appendChild(chartxt)
    char= document.createElement("input");
    card.appendChild(char)

    chartxt= document.createElement("p");
    chartxt.innerText="ingrese el correo electronico del contacto" 
    card.appendChild(chartxt)
    char= document.createElement("input" );
    card.appendChild(char)

    let Btn= document.createElement("button");
    Btn.innerText="agregar contacto" 
    card.appendChild(Btn)
 
    Btn.addEventListener('click', function() {
    let inputs = document.querySelectorAll('input');
    let i=0
    
    let nombre=null;
    let apellido=null;
    let numero=0;
    let correo=null;
    
        inputs.forEach(function(input) {
            let valor = input.value;
            i++;
            if(i==1){nombre=valor}
            if(i==2 ){apellido=valor}
            if(i==3 ){numero=valor}
            if(i==4 ){ correo=valor}
        });
        if (nombre!=""&&apellido!=""&&numero!=null&&correo!="") {
            listContacts.addContacto(nombre,apellido,numero,correo)
            console.log(listContacts.comprobacion())
        }else{
            alert("Por favor, complete todos los campos.");
        }
    });
});
let seecontac = document.getElementById("btn-see")
seecontac.addEventListener("click",function(){
    if(listContacts.comprobacion()>0){
        let comprobacion= listContacts.seeContacto()
        let comprobacion2=comprobacion
        do{ 
        const card= document.createElement("div");
        divchar.appendChild(card)
    
        let charTXT= document.createElement("h1");
        charTXT.innerText="nombre" 
        card.appendChild(charTXT)
        let chartxt= document.createElement("p");
        chartxt.innerText= comprobacion.getNombre()
        card.appendChild(chartxt)
    
        charTXT= document.createElement("h1");
        charTXT.innerText="apellido" 
        card.appendChild(charTXT)
        chartxt= document.createElement("p");
        chartxt.innerText=comprobacion.getApellido()
        card.appendChild(chartxt)
    
        charTXT= document.createElement("h1");
        charTXT.innerText="numero" 
        card.appendChild(charTXT)
        chartxt= document.createElement("p");
        chartxt.innerText=comprobacion.getTelefono()
        card.appendChild(chartxt)

        charTXT= document.createElement("h1");
        charTXT.innerText="correo" 
        card.appendChild(charTXT)
        chartxt= document.createElement("p");
        chartxt.innerText=comprobacion.getCorreoElectronico()
        card.appendChild(chartxt)
        
        listContacts.moveContacto()
        comprobacion= listContacts.seeContacto()
       } while (comprobacion.getNombre()!=comprobacion2.getNombre());
    }
    else{
        alert("ingrese un contacto.");
    }
    
})

let findcontac = document.getElementById("btn-find")
findcontac.addEventListener("click",function(){
    if(listContacts.comprobacion()>0){
       
            const card= document.createElement("div");
            divchar.appendChild(card)

            let chartxt= document.createElement("p");
            chartxt.innerText="ingrese el nombre del contacto" 
            card.appendChild(chartxt)
            let char= document.createElement("input");
            card.appendChild(char)
            char.setAttribute("id", "idinput");
            
            let Btn= document.createElement("button");
            Btn.innerText="buscar contacto" 
            card.appendChild(Btn)
            Btn.addEventListener("click",function(){
            let info=document.getElementById("idinput").value;
            let contac = listContacts.searchContacto(info)

            let charTXT= document.createElement("h1");
            charTXT.innerText="nombre" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText= contac.getNombre()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="apellido" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contac.getApellido()
            card.appendChild(chartxt)
        
            charTXT= document.createElement("h1");
            charTXT.innerText="numero" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contac.getTelefono()
            card.appendChild(chartxt)

            charTXT= document.createElement("h1");
            charTXT.innerText="correo" 
            card.appendChild(charTXT)
            chartxt= document.createElement("p");
            chartxt.innerText=contac.getCorreoElectronico()
            card.appendChild(chartxt)
            })
            
    
    }
    else{
        alert("ingrese un contacto.");
    }
})

let delcontac = document.getElementById("btn-del")
delcontac.addEventListener("click",function(){
    if(listContacts.comprobacion()>0){
    listContacts.deleteContacto()
    alert("se elimino un contacto.");
    }else{
        alert("nop hay contactos para borrar.");
    }
})