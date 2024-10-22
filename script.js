const progress = document.getElementById('progress')
const previ=document.getElementById('previ')
const next=document.getElementById('next')
const classes =document.querySelectorAll('.closs')

let currentActive = 1

next.addEventListener('click',()=>{
  currentActive++

  if(currentActive > classes.length){
    currentActive=classes.length
  }
  
  update()

})

previ.addEventListener('click',()=>{
    currentActive--
  
    if(currentActive < 1){
      currentActive=1
    }
    update()
  
  })
  
function update() {

    console.log(currentActive);

    classes.forEach((closs,idx) =>{
        if (idx < currentActive) {
            closs.classList.add('active')
        } else {
            closs.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    console.log(actives.length * 30)

    if(actives.length == 1){
        progress.style.width= 0 + "px";
    }

    else if(actives.length == classes.length){
        progress.style.width= 350 + "px";
    }

    else{
        progress.style.width= ((actives.length * (335/classes.length )) - (30)) + "px";
    }



    

}