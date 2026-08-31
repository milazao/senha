// Localiza o campo onde a senha será exibida
const campoSenha =
   document.querySelector("#campo-senha");


// Localiza o número que mostra o tamanho da senha
const numeroSenha =
   document.querySelector("#numero-senha");


// Tamanho inicial da senha
let tamanhoSenha = 8;


// Gera a primeira senha quando a página abrir
geraSenha();


// Função responsável por gerar a senha
function geraSenha() {


   // Começamos com uma senha vazia
   let senha = "";

   // --- ADIÇÃO: Cria a base de caracteres baseada nas checkboxes marcadas ---
   let alfabeto = "";
   if (checkboxes[0].checked) { alfabeto += letrasMaiusculas; }
   if (checkboxes[1].checked) { alfabeto += letrasMinusculas; }
   if (checkboxes[2].checked) { alfabeto += simbolos; }

   // Evita erro caso nenhuma checkbox esteja marcada
   if (alfabeto.length === 0) {
       campoSenha.value = "Selecione uma opção";
       return;
   }


   // Repete o processo conforme o tamanho escolhido
   for (let i = 0; i < tamanhoSenha; i++) {


       // Gera um número aleatório (Alterado de letrasMaiusculas para alfabeto)
       let numeroAleatorio =
           Math.random() * alfabeto.length;


       // Remove a parte decimal
       numeroAleatorio =
           Math.floor(numeroAleatorio);


   // Escolhe uma letra e adiciona à senha (Alterado de letrasMaiusculas para alfabeto)
   senha =
       senha +
       alfabeto[numeroAleatorio];
}


// Exibe a senha no campo
campoSenha.value = senha;
}


// Diminui o tamanho da senha
function diminuiTamanho() {
   if (tamanhoSenha > 1) {
       tamanhoSenha--;
}
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}


// Aumenta o tamanho da senha
function aumentaTamanho() {


   if (tamanhoSenha < 20) {
       tamanhoSenha++;
}


numeroSenha.textContent = tamanhoSenha;
geraSenha();
}


//constante "checkbox" (Corrigido o seletor para buscar elementos do tipo checkbox)
const checkboxes =
   document.querySelectorAll("input[type='checkbox']");
   if (checkboxes.length > 0) { checkboxes[0].checked = true; }


//constante letras maiúsculas
const letrasMaiusculas =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//constante letras minúsculas
const letrasMinusculas =
   "abcdefghijklmnopqrstuvwxyz";


//constante símbolos
const simbolos =
   "!?$@#%&*-+";

// --- ADIÇÃO: Vincula o clique de cada checkbox para gerar uma nova senha automaticamente ---
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = geraSenha;
}
