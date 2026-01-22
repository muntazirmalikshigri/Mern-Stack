let list = document.getElementById("list");
function addTodo(){
    let todo_item = document.getElementById('todo-item');
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)
    list.appendChild(li);
    let btnText = document.createTextNode("Edit");
    btn.setAttribute("onclick","editItem(this);");
    btn.appendChild(btnText);
    li.appendChild(btn);

    /// delte btn
    let deletBtn = document.createElement("button");
    let delteText = document.createTextNode("Delete");
    deletBtn.setAttribute("class","btn");
    deletBtn.setAttribute("onclick","deletItem(this);");
    deletBtn.appendChild(delteText);
    li.appendChild(deletBtn);

    console.log(li);

}
function deletItem(e){
   e.parentNode.remove();
}

function deleteAll(){
   list.innerHTML=""; 
}
function editItem(e){
    let promt = prompt("Edit please",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = promt;
    console.log(e.parentNode.firstChild);
}