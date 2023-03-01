

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto, i ) => {
    punto[i].addEventListener('click', ()=> {

        let posicion = i;
        let operacion = posicion * -14.3;

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto, i)=> {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
} )

const etiquetaMañana = document.getElementById('etiqueta-mañana')
const etiquetaTarde  = document.getElementById('etiqueta-tarde')
const iconoUbi       = document.getElementById('icon-ubi')
const iconoDelivery  = document.getElementById('icon-delivery')
const h3             = document.querySelectorAll('.h3-ubi')
const icon           = document.querySelectorAll('.icons-ubi')
const pMañana        = document.getElementById('p-mañana')
const pTarde         = document.getElementById('p-tarde')


etiquetaMañana.addEventListener('mouseover', ()=> {
    iconoUbi.src = './imgs/ubi-claro.svg'
    pMañana.innerHTML = 'Barrio Belgrano, mza D, casa 15'
})

etiquetaMañana.addEventListener('mouseout', ()=> {
    iconoUbi.src = './imgs/casa.svg'
    pMañana.innerHTML = '9 a 12 hs'
})

etiquetaTarde.addEventListener('mouseover', ()=> {
    iconoDelivery.src = './imgs/delivery-claro.svg'
    pTarde.innerHTML = 'Mandanos un mensaje'
})

etiquetaTarde.addEventListener('mouseout', ()=> {
    iconoDelivery.src = 'imgs/delivery.svg'
    pTarde.innerHTML = 'Te lo llevamos'
})



// etiquetaMañana.forEach( ( cadaEtiqueta, i) => {
//     etiquetaMañana[i].addEventListener('mouseover', ()=> {
//         etiqueta[i].classList.toggle('etiqueta-oscura')  
//         h3[i].classList.toggle('h3-claro')
//         p[i].classList.toggle('p-claro')
//         icon[i] = icon[i].src='./imgs/ubi-claro.svg'
//         etiquetaMañana[i].addEventListener('mouseout', ()=> {
//             icon[i] = icon[i].src = './imgs/casa.svg'
//         })
//     })
// })