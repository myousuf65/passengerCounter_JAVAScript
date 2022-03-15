//pointing to the address of the element that has id of "count"
//acting as a pointer
let count_el = document.getElementById('count'); 
let prev = document.getElementById('entries');
let count = 0;


function increment(){
    count += 1;
    count_el.innerText = count;
    
}

function save(){
    prev.textContent += count + " - ";
    count = 0;
    count_el.textContent = 0
}




