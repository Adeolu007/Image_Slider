const pictures = ['1','2','3','4','5','6','7']

const buttons = document.querySelectorAll('.btn')
const imgDiv = document.querySelector('.img-container')

let counter = 0;

function left (){
    counter--;
    if(counter < 0){
        counter = pictures.length-1
    }
    imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
}

function right (){
    counter++;
    if(counter > pictures.length-1){
        counter = 0
    }
    imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
}

buttons.forEach((button)=>{
    button.addEventListener('click', function (e){
        
        if(button.classList.contains('btn-left')){
           
            left()
        }       
        if(button.classList.contains('btn-right')){
            right()
        }  
    }) })


document.body.addEventListener('keydown', function(e){
    if(e.key=="ArrowRight"){
        right()
    } else if(e.key=="ArrowLeft"){
      left()
    }
})