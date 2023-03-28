valorTotal = 0
function formatarInput(input) {
    const maxLength = 7; // Define o número máximo de caracteres antes do traço
    input.value = input.value.toUpperCase();// Define os caracteres todos maiusculos
    if (input.value.length > 3 && input.value.charAt(3) !== '-') {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
}
// verificação da entrada de dados 

function verificarInput() {
    const placa = document.getElementById('placa').value;
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");
    const categoria = sBtn_text.textContent
    const optionMenu2 = document.querySelector(".select-menu2");
    const selectBtn2 = optionMenu2.querySelector(".select-btn2");
    const options2 = optionMenu2.querySelectorAll(".option2");
    const sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
    const hora = sBtn_text2.textContent;
    const resultado = document.getElementById('resultado');

    if (placa === '') {
        resultado.textContent = 'Nenhuma placa foi adicionada.';
    } else if (categoria === 'Selecione a categoria' && hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma categoria e nenhuma hora foram selecionadas.';
    } else if (categoria === 'Selecione a categoria') {
        resultado.textContent = 'Nenhuma categoria foi selecionada.';
    } else if (hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma hora foi selecionada.';
    } else {
        calcular(placa, categoria, hora);

    }
}

//calculo dos dados 

function calcular(placa, categoria, hora) {
    var valor = 0
    switch (categoria) {
        case 'Subcompacto':
            valor = 3.5;

            break;
        case 'Compacto':
            valor = 4;

            break;
        case 'Hatch':
            valor = 4.5;

            break;
        case 'Sedan':
            valor = 5;

            break;
        case 'SUV':
            valor = 6;

            break;
        case 'Pick-up':
            valor = 7;

            break;
        default:
            console.log('Nenhuma categora selecioanda')
    }
    valorTotal = valor * parseFloat(hora)
    const tela = document.querySelector('#tela');
    tela.classList.remove('escondido');
    const divResultado1 = document.getElementById("resultado1");
    divResultado1.innerHTML = "Valor total R$ " + valorTotal + " " + ", Placa do veículo: " + placa+"Modelo: "+categoria;
}


//funçaõ para exibir os dados na tela 


function fechar(){
    const tela = document.querySelector('#tela');
    tela.classList.add('escondido');
}

//exibir na tela a resposta 


//funçao pra abrir o select 
function selecionarC() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
        selectBtn.classList.toggle("selected");
        setTimeout(() => {
            selectBtn.classList.toggle("selected");
        }, 1000);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
}

function selecionarH() {
    const optionMenu = document.querySelector(".select-menu2");
    const selectBtn = optionMenu.querySelector(".select-btn2");
    const options = optionMenu.querySelectorAll(".option2");
    const sBtn_text = optionMenu.querySelector(".sBtn-text2");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text2").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });

    selectBtn.classList.add("selected");
    setTimeout(function () {
        selectBtn.classList.remove("selected");
    }, 1000);
}


valorTotal = 0
function formatarInput(input) {
    const maxLength = 7; // Define o número máximo de caracteres antes do traço
    input.value = input.value.toUpperCase();// Define os caracteres todos maiusculos
    if (input.value.length > 3 && input.value.charAt(3) !== '-') {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
}
// verificação da entrada de dados 

function verificarInput() {
    const placa = document.getElementById('placa').value;
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");
    const categoria = sBtn_text.textContent
    const optionMenu2 = document.querySelector(".select-menu2");
    const selectBtn2 = optionMenu2.querySelector(".select-btn2");
    const options2 = optionMenu2.querySelectorAll(".option2");
    const sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
    const hora = sBtn_text2.textContent;
    const resultado = document.getElementById('resultado');

    if (placa === '') {
        resultado.textContent = 'Nenhuma placa foi adicionada.';
    } else if (categoria === 'Selecione a categoria' && hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma categoria e nenhuma hora foram selecionadas.';
    } else if (categoria === 'Selecione a categoria') {
        resultado.textContent = 'Nenhuma categoria foi selecionada.';
    } else if (hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma hora foi selecionada.';
    } else {
        calcular(placa, categoria, hora);

    }
}

//calculo dos dados 

function calcular(placa, categoria, hora) {
    var valor = 0
    switch (categoria) {
        case 'Subcompacto':
            valor = 3.5;

            break;
        case 'Compacto':
            valor = 4;

            break;
        case 'Hatch':
            valor = 4.5;

            break;
        case 'Sedan':
            valor = 5;

            break;
        case 'SUV':
            valor = 6;

            break;
        case 'Pick-up':
            valor = 7;

            break;
        default:
            console.log('Nenhuma categora selecioanda')
    }
    valorTotal = valor * parseFloat(hora)
    const tela = document.querySelector('#tela');
    tela.classList.remove('escondido');
    const divResultado1 = document.getElementById("resultado1");
    divResultado1.innerHTML = "Valor total R$ " + valorTotal + " " + ", Placa do veículo: " + placa+"Modelo: "+categoria;
}


//funçaõ para exibir os dados na tela 


function fechar(){
    const tela = document.querySelector('#tela');
    tela.classList.add('escondido');
}

//exibir na tela a resposta 


//funçao pra abrir o select 
function selecionarC() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
        selectBtn.classList.toggle("selected");
        setTimeout(() => {
            selectBtn.classList.toggle("selected");
        }, 1000);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
}

function selecionarH() {
    const optionMenu = document.querySelector(".select-menu2");
    const selectBtn = optionMenu.querySelector(".select-btn2");
    const options = optionMenu.querySelectorAll(".option2");
    const sBtn_text = optionMenu.querySelector(".sBtn-text2");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text2").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });

    selectBtn.classList.add("selected");
    setTimeout(function () {
        selectBtn.classList.remove("selected");
    }, 1000);
}


valorTotal = 0
function formatarInput(input) {
    const maxLength = 7; // Define o número máximo de caracteres antes do traço
    input.value = input.value.toUpperCase();// Define os caracteres todos maiusculos
    if (input.value.length > 3 && input.value.charAt(3) !== '-') {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
}
// verificação da entrada de dados 

function verificarInput() {
    const placa = document.getElementById('placa').value;
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");
    const categoria = sBtn_text.textContent
    const optionMenu2 = document.querySelector(".select-menu2");
    const selectBtn2 = optionMenu2.querySelector(".select-btn2");
    const options2 = optionMenu2.querySelectorAll(".option2");
    const sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
    const hora = sBtn_text2.textContent;
    const resultado = document.getElementById('resultado');

    if (placa === '') {
        resultado.textContent = 'Nenhuma placa foi adicionada.';
    } else if (categoria === 'Selecione a categoria' && hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma categoria e nenhuma hora foram selecionadas.';
    } else if (categoria === 'Selecione a categoria') {
        resultado.textContent = 'Nenhuma categoria foi selecionada.';
    } else if (hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma hora foi selecionada.';
    } else {
        calcular(placa, categoria, hora);

    }
}

//calculo dos dados 

function calcular(placa, categoria, hora) {
    var valor = 0
    switch (categoria) {
        case 'Subcompacto':
            valor = 3.5;

            break;
        case 'Compacto':
            valor = 4;

            break;
        case 'Hatch':
            valor = 4.5;

            break;
        case 'Sedan':
            valor = 5;

            break;
        case 'SUV':
            valor = 6;

            break;
        case 'Pick-up':
            valor = 7;

            break;
        default:
            console.log('Nenhuma categora selecioanda')
    }
    valorTotal = valor * parseFloat(hora)
    const tela = document.querySelector('#tela');
    tela.classList.remove('escondido');
    const divResultado1 = document.getElementById("resultado1");
    divResultado1.innerHTML = "Valor total R$ " + valorTotal + " " + ", Placa do veículo: " + placa+"Modelo: "+categoria;
}


//funçaõ para exibir os dados na tela 


function fechar(){
    const tela = document.querySelector('#tela');
    tela.classList.add('escondido');
}

//exibir na tela a resposta 


//funçao pra abrir o select 
function selecionarC() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
        selectBtn.classList.toggle("selected");
        setTimeout(() => {
            selectBtn.classList.toggle("selected");
        }, 1000);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
}

function selecionarH() {
    const optionMenu = document.querySelector(".select-menu2");
    const selectBtn = optionMenu.querySelector(".select-btn2");
    const options = optionMenu.querySelectorAll(".option2");
    const sBtn_text = optionMenu.querySelector(".sBtn-text2");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text2").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });

    selectBtn.classList.add("selected");
    setTimeout(function () {
        selectBtn.classList.remove("selected");
    }, 1000);
}


valorTotal = 0
function formatarInput(input) {
    const maxLength = 7; // Define o número máximo de caracteres antes do traço
    input.value = input.value.toUpperCase();// Define os caracteres todos maiusculos
    if (input.value.length > 3 && input.value.charAt(3) !== '-') {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
}
// verificação da entrada de dados 

function verificarInput() {
    const placa = document.getElementById('placa').value;
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");
    const categoria = sBtn_text.textContent
    const optionMenu2 = document.querySelector(".select-menu2");
    const selectBtn2 = optionMenu2.querySelector(".select-btn2");
    const options2 = optionMenu2.querySelectorAll(".option2");
    const sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
    const hora = sBtn_text2.textContent;
    const resultado = document.getElementById('resultado');

    if (placa === '') {
        resultado.textContent = 'Nenhuma placa foi adicionada.';
    } else if (categoria === 'Selecione a categoria' && hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma categoria e nenhuma hora foram selecionadas.';
    } else if (categoria === 'Selecione a categoria') {
        resultado.textContent = 'Nenhuma categoria foi selecionada.';
    } else if (hora === 'Selecione a hora') {
        resultado.textContent = 'Nenhuma hora foi selecionada.';
    } else {
        calcular(placa, categoria, hora);

    }
}

//calculo dos dados 

function calcular(placa, categoria, hora) {
    var valor = 0
    switch (categoria) {
        case 'Subcompacto':
            valor = 3.5;

            break;
        case 'Compacto':
            valor = 4;

            break;
        case 'Hatch':
            valor = 4.5;

            break;
        case 'Sedan':
            valor = 5;

            break;
        case 'SUV':
            valor = 6;

            break;
        case 'Pick-up':
            valor = 7;

            break;
        default:
            console.log('Nenhuma categora selecioanda')
    }
    valorTotal = valor * parseFloat(hora)
    const tela = document.querySelector('#tela');
    tela.classList.remove('escondido');
    const divResultado1 = document.getElementById("resultado1");
    divResultado1.innerHTML = "Valor total R$ " + valorTotal + " " + ", Placa do veículo: " + placa+" Modelo: "+categoria;
}


//funçaõ para exibir os dados na tela 


function fechar(){
    const tela = document.querySelector('#tela');
    tela.classList.add('escondido');
}

//exibir na tela a resposta 


//funçao pra abrir o select 
function selecionarC() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
        selectBtn.classList.toggle("selected");
        setTimeout(() => {
            selectBtn.classList.toggle("selected");
        }, 1000);
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
}

function selecionarH() {
    const optionMenu = document.querySelector(".select-menu2");
    const selectBtn = optionMenu.querySelector(".select-btn2");
    const options = optionMenu.querySelectorAll(".option2");
    const sBtn_text = optionMenu.querySelector(".sBtn-text2");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text2").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });

    selectBtn.classList.add("selected");
    setTimeout(function () {
        selectBtn.classList.remove("selected");
    }, 1000);
}


