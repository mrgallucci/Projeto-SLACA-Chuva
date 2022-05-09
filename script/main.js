let initDiscussion = document.getElementById("sharing-session")
let showHideComments = document.getElementById("hidden-comments");
let form = document.getElementById("form-message");
let confirmShip = document.getElementById("confirm-shipping");

let hideText = document.getElementById("hideText");
let showText = document.getElementById("showText");


/* Função para mostrar conteúdo do resumo */

function showContent() {
  if (hideText.style.display === "none") {
    hideText.style.display = "inline";
    showText.style.display = "none";
  } else {
    hideText.style.display = "none";
    showText.style.display = "inline";
  }
} 

/*criar topico */

function createTopic() {
  initDiscussion.style.display = "none";
  form.style.display = "block";
  confirmShip.style.display = "none";
}

/* Voltar campo compartilhamento */

const initialPosition = () => {
    initDiscussion.style.display = "block";
    form.style.display = "none";
    confirmShip.style.display = "none";
  }

/* enviar a pergunta*/
function sendPost() {
  form.style.display = "none";
  confirmShip.style.display = "block";
  setInterval(initialPosition, 10000);
}

/*comentario */

function showComments() {
  if (showHideComments.style.display === "none") {
    showHideComments.style.display = "block";
  } else {
    showHideComments.style.display = "none"
  }
}


