const colors=['#070C20','#17777D','#2B5558','#652D2D','#652D2D']

const btn=document.querySelector('.btn')
const color=document.querySelector('.color')







btn.addEventListener('click',function(){
 const randomNumber=getRandomNumber()
 document.body.style.backgroundColor=colors[randomNumber]
 color.innerHTML=colors[randomNumber]
})

const getRandomNumber=()=>{
 return Math.floor(Math.random()*colors.length)
 
}


