const list = [];

function initialize() {
    listOutput = document.getElementById("list");
}

function getInfo() {
    item = (document.getElementById("item")).value;
    list.push(item);
    console.log(list);
    display();
}

function getRemoveIndex() {
    remove = (document.getElementById("remove")).value;
    list.splice(parseInt(remove) - 1, 1);
    display();
}

function moveUp() {
    move = (document.getElementById("move")).value;
    let index = parseInt(move) - 1;
    if (index > 0) {
        let temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
    }
    display();
}

function moveDown() {
    move = (document.getElementById("move")).value;
    let index = parseInt(move) - 1;
    if (index > 0) {
        let temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
    }
    display();
}

function display() {
    listOutput.innerHTML = "";
    for (i in list) {
        let num = parseInt(i) + 1;
        listOutput.innerHTML += num + ". " + list[i] + "<br>";
    }
}