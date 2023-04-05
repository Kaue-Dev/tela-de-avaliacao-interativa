//Referencia todos os botões que contem a classe .rating-button
let ratingButtons = document.querySelectorAll(".rating-button");
let selectedRating = 0

//For para percorrer todos os 5 botões
for (let i = 0; i < ratingButtons.length; i++) {
    //Evento para quando algum botão for clicado
    ratingButtons[i].addEventListener("click", function() {
        //Remove a classe .selected de todos os botões
        for (let j = 0; j < ratingButtons.length; j++) {
            ratingButtons[j].classList.remove("selected");
        }
        //Adiciona a classe .selected ao botão clicado
        this.classList.add("selected");
        //Contabiliza a classificação selecionada
        selectedRating = parseInt(this.getAttribute("data-value"))
    });
}

//Referenciando o botão de submit e a div que contem a mensagem de avalição
const submitButton = document.querySelector(".btn-submit")
const printAvaliation = document.getElementById("print-avaliation")

//Referenciando a tela de avaliação e a de agradecimento
const mainContent = document.querySelector(".main-container")
const thanksContent = document.querySelector(".thanks-container")

//Evento para quando o botão submit for clicado
submitButton.addEventListener("click", function() {
    if (selectedRating > 0) {
        //Torna a tela de avaliação invisivel 
        mainContent.style.display = "none"
        //Torna a tela de agradecimento visivel
        thanksContent.style.display = "flex"
        //Exibe o texto mostrando a avaliação do usuario
        printAvaliation.textContent = "You selected " + selectedRating + " out of 5"
    } else {
        alert("Por favor, selecione uma classificação antes de enviar.")
    }
})