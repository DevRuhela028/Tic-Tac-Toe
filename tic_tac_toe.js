let currplayer = 'X'
let arr = Array(9).fill(null);
let bool = false
const b = document.getElementById("b1");
function checkwinner(){
    if(arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[0]+"  wins !!"
        result.appendChild(ele)
        bool =true
    }
    else if(arr[3] == arr[4] && arr[4] == arr[5] &&  arr[3] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[3]+"  wins !!"
        result.appendChild(ele)
        bool =true

    }
    else if(arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[6]+"  wins !!"
        result.appendChild(ele)
        bool =true

    }
    else if(arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[0]+"  wins !!"
        result.appendChild(ele)
        bool =true

    }
    else if(arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[1]+"  wins !!"
        result.appendChild(ele)
        bool =true

    }
    else if(arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[2]+"  wins !!"
        result.appendChild(ele)
        bool =true

    }
    else if(arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[0]+"  wins !!"
        result.appendChild(ele)
        bool = true

    }
    else if(arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != null){
        const ele = document.createElement('h1')
        ele.innerText = arr[2]+"  wins !!"
        result.appendChild(ele)
        bool = true
    }
    else{
        if(!arr.some((e) => e === null)){
            const ele = document.createElement('h1')
            ele.innerText = "It's a draw"
            result.appendChild(ele)
            bool =true
        }
    }
    if (bool) {
        const restartButton = document.createElement('button');
        restartButton.innerText = 'Restart Game';
        restartButton.addEventListener('click', function() {
            location.reload(); 
        });
        result.appendChild(restartButton);
    }
}
if(bool == true){
    b.style.display = "block";
}
function handleClick(el){
    if(bool == true) return
    const id = Number(el.id)
    if(arr[id] != null) return
    el.innerText = currplayer
    arr[id] = currplayer
    if(currplayer == 'X') currplayer = 'O'
    else currplayer = 'X'
    checkwinner()
    console.log(arr)
}



