const  imgc = document.querySelector(".img-contianer")

const btn  = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    updateimg();

})

function updateimg(){
    for(let i=0 ; i<6 ;i++){
        const newimg = document.createElement("img")
        newimg.src = `https://picsum.photos/300?random=${Math.random()*10000}`
    
       imgc.appendChild(newimg)
    }
    
}
