let btn = document.getElementById("button");
let text = document.getElementById("text_area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let message = document.getElementById("message");



function addNotes() {
    if (text.value === "") {
        alert("Please enter some text in sticky notes");
        return;
    }
    message.innerText = "";

    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    
    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;

    div.style.width = "200px"; // Adjust as needed
    div.style.height = "150px"; // Adjust as needed
    notes_container.appendChild(div);
    
    console.log(div);
    text.value = "";
    
    cross_btn.addEventListener("click", function(){
        
        notes_container.removeChild(div);
        isEmpty();
    });
    
}

btn.addEventListener("click", addNotes);
function isEmpty(){
    if(notes_container.childElementCount === 0){
        message.innerText = "No sticky notes found";
    } else {
        message.innerText = "";
    }
}