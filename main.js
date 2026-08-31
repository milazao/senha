// --- CORREÇÃO DE SEGURANÇA (Sem apagar nada abaixo) ---
// Declaramos as variáveis no topo usando 'var' para que a linha 16 consiga encontrá-las imediatamente
var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
var simbolos = "!?$@#%&*-+";
var checkboxesReais = document.querySelectorAll("input[type='checkbox']");

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


   // --- ADIÇÃO DOS IFs QUE VOCÊ PEDIU (Apontando para as caixas reais) ---
   let alfabeto = "";
   
   if (typeof checkboxesReais !== 'undefined' && checkboxesReais.length > 0) {
       if (checkboxesReais[0].checked) { alfabeto += letrasMaiusculas; }
       if (checkboxesReais[1] && checkboxesReais[1].checked) { alfabeto += letrasMinusculas; }
       if (checkboxesReais[2] && checkboxesReais[2].checked) { alfabeto += simbolos; }
   }

   // Caso nenhuma esteja marcada ou seja o primeiro segundo do carregamento
   if (alfabeto === "") {
       alfabeto = letrasMaiusculas;
   }


   // Repete o processo conforme o tamanho escolhido
   for (let i = 0; i < tamanhoSenha; i++) {


       // Gera um número aleatório
       let numeroAleatorio =
           Math.random() * alfabeto.length;


       // Remove a parte decimal
       numeroAleatorio =
           Math.floor(numeroAleatorio);


   // Escolhe uma letra e adiciona à senha
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


//constante "checkbox"
const checkboxes =
   document.querySelectorAll ("checkbox")
   checkboxes[0].checked = true ;


//constante letras maiúsculas
const letrasMaiusculas =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//constante letras minúsculas
const letrasMinusculas =
   "abcdefghijklmnopqrstuvwxyz";


//constante símbolos
const simbolos =
   "!?$@#%&*-+";


// --- ADIÇÃO DO LAÇO FOR QUE VOCÊ PEDIU ---
// Ativa o clique em todas as caixas de seleção na tela
for (let i = 0; i < checkboxesReais.length; i++) {
    checkboxesReais[i].onclick = geraSenha;
}

// Atualiza a tela com as configurações corretas após o carregamento total
geraSenha();
