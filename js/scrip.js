let barra=document.getElementById('barra')
        let porcentaje=document.getElementById('porcentaje')
        let cantidad=0
        let tiempo=setInterval(()=>{
            cantidad+=1
            barra.style.width=`${cantidad}%`
            if(cantidad>=100)
            {
                clearInterval(tiempo)
            }
            porcentaje.textContent=`${cantidad}%`
        },80)
