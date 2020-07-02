var count = 0;

function AddItemToList() {
    var Item = document.getElementById('input').value;
    var CreateList = document.createElement("li");
    var checkBox = document.createElement("input");
    var deleteBtn = document.createElement("input");
    var listId = "list" + count;
    var Task = document.createTextNode(Item);


    if (Item == "") {
        alert("Must Enter something ..");
    } else {


        checkBox.type = "checkbox";
        deleteBtn.type = "button";
        deleteBtn.id = "btn" + count;
        deleteBtn.name = listId;
        deleteBtn.value = "Delete";
        document.getElementById("list").appendChild(CreateList);
        CreateList.id = listId;
        CreateList.appendChild(checkBox);
        CreateList.appendChild(Task);
        CreateList.appendChild(deleteBtn);
        input.value = null;
    }

    document.getElementById("btn" + count).addEventListener("click", Deletelistitem());

    function Deletelistitem() {
        var ul = document.getElementById("list");
        var li = ul.children;
        
    };
    count++;
}