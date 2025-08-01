function button(){
    let bgColor = document.body.style.backgroundColor;
    if( bgColor === 'black'){
        document.body.style.backgroundColor='white';
        document.body.style.color = 'black' 
    }
    else{
        document.body.style.backgroundColor='black';
        document.body.style.color = 'white'
       
    }
}
