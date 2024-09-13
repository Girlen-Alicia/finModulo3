document.querySelector(".chat-btn-contact").addEventListener("click", function(){
   const contact = document.querySelector(".chat-contact")
   if(contact.style.display == "" || contact.style.display == "none"){
    contact.style.display = "block"
   }
   
   else{
    contact.style.display = "none"
   }
})

window.addEventListener("resize", function(){
    const screensize = window.innerWidth
    if(screensize>768){
        document.querySelector(".chat-contact").style.display = "block"
    }
})