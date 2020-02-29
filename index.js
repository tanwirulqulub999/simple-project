function domSection(){
    const microclone = document.getElementById("microclone");

    microclone.innerHTML = "<font color='green'>root@MicroClone:~$ ./life code</font>";
    microclone.style.backgroundColor = "black";
    microclone.head.title = "Hello World";
    microclone.style.padding = "15px";
    microclone.style.fontColor = "white";
    microclone.style.textAlign = "center";
    microclone.body.backgroundColor = "dodgeblue";
}
alr();

function alr(){
    window.alert("WELCOME");
    const inputName = prompt("what is your name?");
    document.write(`<center>selamat datang ${inputName} semoga bahagia selalu ya ^_^</center>`);
}
domSection();