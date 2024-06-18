
let navbar=document.getElementsByClassName("drop_navbar")[0]

let bar=document.getElementsByClassName("nav-bar")[0]

function navbar_hover(){
    navbar.classList.add("active")
    
}
function navbar_hover1(){
    navbar.classList.remove("active")
    document.getElementsByClassName("vehicles")[0].classList.remove("vactive")
    document.getElementsByClassName("energys")[0].classList.remove("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.remove("vactive")
    document.getElementsByClassName("shop")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[1].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.remove("vactive")
    bar.classList.remove("bar")
}
function energy(){
   
    document.getElementsByClassName("energys")[0].classList.add("vactive") 
    document.getElementsByClassName("vehicles")[0].classList.remove("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.remove("vactive")
    document.getElementsByClassName("shop")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[1].classList.add("vactive")
    document.getElementsByClassName("list")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.remove("vactive")
    bar.classList.add("bar")
    // document.getElementsByClassName("drop_content")[0].childNodes[3].classList.remove("vactive")
}
function vehicle(){
    document.getElementsByClassName("vehicles")[0].classList.add("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.remove("vactive")
    document.getElementsByClassName("energys")[0].classList.remove("vactive")
    document.getElementsByClassName("shop")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[0].classList.add("vactive")
    document.getElementsByClassName("list")[1].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.remove("vactive")
    bar.classList.add("bar")
}
function charging(){
    document.getElementsByClassName("shop")[0].classList.remove("vactive")
    document.getElementsByClassName("vehicles")[0].classList.remove("vactive")
    document.getElementsByClassName("charging")[0].classList.add("vactive")
    document.getElementsByClassName("energys")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.add("vactive")
    document.getElementsByClassName("list")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[1].classList.remove("vactive")
    bar.classList.add("bar")
    
}
function Discover(){
    document.getElementsByClassName("vehicles")[0].classList.remove("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive")
    document.getElementsByClassName("energys")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.add("vactive")
    document.getElementsByClassName("shop")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.remove("vactive")
    document.getElementsByClassName("list")[1].classList.remove("vactive")
    bar.classList.add("bar")
}
function shop(){
    document.getElementsByClassName("shop")[0].classList.add("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive") 
    document.getElementsByClassName("energys")[0].classList.remove("vactive")
    document.getElementsByClassName("discover")[0].classList.remove("vactive")
    document.getElementsByClassName("charging")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[0].classList.remove("vactive")
    document.getElementsByClassName("list")[1].classList.remove("vactive")
    document.getElementsByClassName("list")[2].classList.remove("vactive")
    bar.classList.add("bar")
}


// let loc=document.querySelectorAll(".location")
// loc.forEach(element => {
//     // document.querySelectorAll(".location")?.classList.remove("active")
//     element.addEventListener("click",()=>{
//         document.querySelector(".active")?.classList.remove("active")
//         element.classList.add("active")
//     })
// });

// let bt=document.querySelectorAll('.secondarybtn')[0]
// // console.log(bt)

// function hello(){
//     let car=document.querySelector(".car_title").innerHTML
//     localStorage.setItem('carname', car);
    
    
    
// }
// let carname1=localStorage.getItem('carname');
// let vs=document.querySelector(".carName")
//     vs.innerHTML=carname1


// let carbtn=document.querySelector(".secondarybtn").addEventListener("click",()=>{
//     console.log("daw")
//     let car=document.querySelector(".car_title").innerHTML
//     localStorage.setItem('carname', car);
// })
let carbtn=document.querySelectorAll(".secondarybtn")

carbtn.forEach(e=>{
    
    if(`${e.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML}`.length<=`Model3`.length+1){
           e.addEventListener("mouseenter",()=>{
        console.log("daw")
    
        let car=e.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML
        console.log(car)
    
        localStorage.setItem('carname', car);
        console.log(localStorage.getItem('carname'))
    })
    }
    else{
        e.addEventListener("mouseenter",()=>{
            console.log("dafaw")
            let car=null
            localStorage.setItem('carname', car);
            console.log(localStorage.getItem('carname'))
        })
    }
    // console.log(e.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML)
   
 
})
