count = 0;

function add(){
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function minus(){
    if(count > 0){
        count -= 1;
        document.getElementById("count-el").textContent = count;
    }
}

function reset(){
    count = 0;
    document.getElementById("count-el").textContent = count;
}

function save(){
    if(count > 0){
        document.getElementById("entries").textContent += " - " + count;
    }
}

function clear(){
    document.getElementById("entries").textContent = ""
}