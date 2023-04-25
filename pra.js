function showMessage(){
    alert("Hello everyone!");   
}

showMessage();

function showreturn(from, text) {
    alert(from + ': ' + text);
}

showreturn('Ann', 'Hello!'); // Ann: Hello!
showreturn('Ann', "What's up?"); // Ann: What's up?

function showmessage1(text){
    if(text == undefined){
        text = "empty message";
    }
    alert(text);
}

showmessage1();

function sum(a, b){
    return a + b;
}
let result = sum(1, 2);
alert(result);

function Age(age){
    if(age < 18){
        return false;
    } else {
        return true;
    }
}
let age = prompt("How old are you?", 18);
if(Age(age)){
    alert("You are adult");
} else {
    alert("You are child");
}