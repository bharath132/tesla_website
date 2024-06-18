let price=document.getElementsByClassName("price_box")
console.log(price)

for (let i = 0; i < price.length; i++){
 
   
    price[i].addEventListener("click",changecolour)
    function changecolour(){ 
        price[0].classList.remove("active")
        price[1].classList.remove("active")
        price[2].classList.remove("active")
        price[3].classList.remove("active")
        price[4].classList.remove("active")
        price[5].classList.remove("active")
        price[6].classList.remove("active")
        price[7].classList.remove("active")
        price[8].classList.remove("active")
        
        price[i].classList.add("active")
    
    }
}
let pay=document.getElementsByClassName("link")

for (let i = 0; i < pay.length; i++){
 
   
    pay[i].addEventListener("click",paycolour)
    function paycolour(){ 
        pay[0].classList.remove("link1")
        pay[1].classList.remove("link1")
        pay[2].classList.remove("link1")
        pay[i].classList.add("link1")
        if(i==0){
           payselect1.classList.add("link1") 
           payselect2.classList.remove("link1") 
           payselect3.classList.remove("link1") 
        }
        if(i==1)
        {
            payselect1.classList.remove("link1") 
            payselect2.classList.add("link1") 
            payselect3.classList.remove("link1") 
        }
        if(i==2){
            payselect1.classList.remove("link1") 
            payselect2.classList.remove("link1") 
            payselect3.classList.add("link1")  
        }
        
    
    }
}

let payselect1=document.getElementsByClassName("zero")[0]
let payselect2=document.getElementsByClassName("one")[0]
let payselect3=document.getElementsByClassName("two")[0]

// payselect.classList.add("link1")


