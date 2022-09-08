function id(id) {
    return document.getElementById(id)
}


id("menuToggle").addEventListener('click',()=>{
    id('toggleData').classList.toggle('show')
})

id('close').addEventListener('click',()=>{
    id('toggleData').classList.toggle('show')
})