let loc=document.querySelectorAll(".location")
loc.forEach(element => {
    // document.querySelectorAll(".location")?.classList.remove("active")
    element.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active")
        element.classList.add("active")
    })
});

let bt=document.querySelectorAll('.secondarybtn')[0]
// console.log(bt)

// function hello(){
//     let car=document.querySelector(".car_title").innerHTML
//     localStorage.setItem('carname', car);
    
    

    
// }

let carname1=localStorage.getItem('carname');
if(carname1==`null`){
    console.log("dw")
    
    
}
else{
    console.log("ddcdwaw")
    let vs=document.querySelector(".carName")
    console.log(carname1)
    vs.innerHTML= `${carname1}`
    // localStorage.clear();
}
