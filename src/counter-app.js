const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

let countValue = 0;

const addCount = () => {
    countValue += 1;
    return displayCount(countValue);
}

const decreaseCount = () => {
    if(countValue === 0){
        $('#exampleModalCenter').modal();
        return ;
    }
    countValue -=1;
    return displayCount(countValue);
}

const resetValue = () => {
    countValue = 0;
    return displayCount(countValue);
}

const displayCount = (value) =>{
    // console.log(value);
    document.getElementById("counter-text").innerHTML = value;
}

increment.addEventListener('click', addCount);
decrement.addEventListener('click', decreaseCount);
reset.addEventListener('click', resetValue);