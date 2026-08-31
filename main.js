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


   // --- ADIÇÃO DOS IFs QUE VOCÊ PEDIU (Ajustados com os índices certos) ---
   let alfabeto = "";
   
   // Verificamos se as checkboxes já foram corrigidas e carregadas na tela
   if (typeof checkboxes Corrigidas !== 'undefined') {
       if (checkboxesCorrigidas[0].checked) { alfabeto += letrasMaiusculas; }
       if (checkboxesCorrigidas[1].checked) { alfabeto += letrasMinusculas; }
       if (checkboxesCorrigidas[2].checked) { alfabeto += simbolos; }
   }

   // Se nenhuma checkbox estiver marcada ou se for o carregamento inicial, usa as maiúsculas como padrão
   if (alfabeto === "") {
       alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }


   // Repete o processo conforme o tamanho escolhido
   for (let i = 0; i < tamanhoSenha; i++) {


       // Gera um número aleatório (Alterado para ler do alfabeto dinâmico)
       let numeroAleatorio =
           Math.random() * alfabeto.length;


       // Remove a parte decimal
       numeroAleatorio =
           Math.floor(numeroAleatorio);


   // Escolhe uma letra e adiciona à senha (Alterado para ler do alfabeto dinâmico)
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


// --- CORREÇÃO E ATIVAÇÃO DO CÓDIGO (Sem apagar nada acima) ---

// 1. Criamos a lista correta apontando para os elementos reais do HTML
var checkboxesCorrigidas = document.querySelectorAll("input[type='checkbox']");

// 2. Garante que a primeira caixa comece marcada no carregamento
if (checkboxesCorrigidas.length > 0) {
    checkboxesCorrigidas[0].checked = true;
}

// 3. O LAÇO FOR QUE VOCÊ PEDIU: Aplica a função geraSenha ao clicar em qualquer checkbox
for (let i = 0; i < checkboxesCorrigidas.length; i++) {
    checkboxesCorrigidas[i].onclick = geraSenha;
}

// 4. Executa a função final para exibir a senha certa logo de início
geraSenha();
