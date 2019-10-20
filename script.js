function carregar()
{
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML =`Agora são ${hora} horas.` 

    
if(hora>=0 && hora<12 )
    {
        foto.src = ("manha.png")
        document.body.style.background = "red"
    }
else if(hora>=12 && hora < 18)
    {
        foto.src = ("tarde.png")
        document.body.style.background ="black"
    }

else 
    {
        foto.src = ("noite.png")
        document.body.style.background ="yellow"
    }

}
