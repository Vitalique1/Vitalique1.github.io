function isElementValid(email){
    var verification =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verification.test(email.toLowerCase());
}

function main(){
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var message = document.getElementById("message");
    var name = document.getElementById("name");

    function submit(){
        var inputValue = input.value;
        var isEmailVerified = isElementValid(inputValue);
        var inputName = name.value;
        message.className = isEmailVerified ? "correctly" : "wrong";
        message.innerHTML = isEmailVerified ? "I 'm coming for you" + ", " + inputName : "You are not prepeared" + ", " + inputName;       
    }
    button.addEventListener ("click", function(event) { submit() } );

    input.addEventListener("keypress", function(event) {
        if (event.charCode === 13) {
            submit();
        }
    });
}
window.onload = function(){
    main();
}