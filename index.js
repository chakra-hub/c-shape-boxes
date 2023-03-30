all_squares = Array.from(document.getElementsByClassName('square'))
let color_counter = 0

all_squares.map((square)=>{
    square.addEventListener('click', ()=>{
        if(square.style.backgroundColor!='red' && color_counter<6){
            square.style.backgroundColor='red'
            color_counter++;
            console.log(color_counter)
        }
        else if(square.style.backgroundColor=='red'){
            square.style.backgroundColor='white'
        }
        else{
            const remove_color_every_2sec = (n)=>{
                for (let i = 0; i < n; i++) {
                    setTimeout( () =>{
                        all_squares[i].style.backgroundColor='white'
                    }, i * 1000)
                  }
              }
              remove_color_every_2sec(all_squares.length);
        }
        
    })
})