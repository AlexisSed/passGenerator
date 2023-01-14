function generate() {
    let longitud = parseInt(inputLongitud.value);

    let base = "";
    const letraMin = "abcdefghijklmnopqrstuvwxyz";
    const letraMax = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!#$%&/()=?¡-_><@{}[]☼↑♀↨";

    if(checkboxMin.checked){
        base+=letraMin;
    }
    if(checkboxMay.checked){
        base+=letraMax;
    } 
    if(checkboxNum.checked){
        base+=numeros;
    } 
    if(checkboxSimb.checked){
        base+=simbolos;
    } 
    
    passGenerated.innerText = generarPassword(base,longitud);
};

const generarPassword = (base,longitud) => {
    let password = "";
    for (let x = 0; x < longitud; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

window.addEventListener('DOMContentLoaded', () =>{
    btnCopy.addEventListener("click", ()=>{
        copyToClipboard();
    })
    btnRefresh.addEventListener("click", ()=>{
        generate();
    })
    checkboxMin.addEventListener("click", ()=>{
        generate();
    })
    checkboxMay.addEventListener("click", ()=>{
        generate();
    })
    checkboxNum.addEventListener("click", ()=>{
        generate();
    })
    checkboxSimb.addEventListener("click", ()=>{
        generate();
    })
    inputLongitud.addEventListener("change", ()=>{
        generate();
    })
    rangeLongitud.addEventListener("change", ()=>{
        generate();
    })
});

function copyToClipboard() {
    var copyText = document.getElementById("passGenerated");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    if(textArea.value === ''){
        SwalertError();
    } else {
        SwalertSuccess();
    }
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}


function SwalertSuccess(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard',
        showConfirmButton: false,
        timer: 1000
      })
}

function SwalertError(){
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password not generated',
        showConfirmButton: false,
        timer: 1000
      })
}
