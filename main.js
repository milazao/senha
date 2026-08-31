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


   // --- ADIÇÃO DOS IFs PEDIDOS (Tratando os índices corretamente) ---
   let alfabeto = "";
   if (typeof checkboxes !== 'undefined' && checkboxes.length > 0) {
       if (checkboxes[0].checked) { alfabeto += letrasMaiusculas; }
       if (checkboxes[1] && checkboxes[1].checked) { alfabeto += letrasMinusculas; }
       if (checkboxes[2] && checkboxes[2].checked) { alfabeto += simbolos; }
   }

   // Se o alfabeto estiver vazio (ou antes de carregar as variáveis), usa as maiúsculas como padrão
   if (alfabeto === "") {
       alfabeto = typeof letrasMaiusculas !== 'undefined' ? letrasMaiusculas : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }


   // Repete o processo conforme o tamanho escolhido
   for (let i = 0; i < tamanhoSenha; i++) {


       // Gera um número aleatório (Alterado para usar a variável alfabeto)
       let numeroAleatorio =
           Math.random() * alfabeto.length;


       // Remove a parte decimal
       numeroAleatorio =
           Math.floor(numeroAleatorio);


   // Escolhe uma letra e adiciona à senha (Alterado para usar a variável alfabeto)
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
   // CORREÇÃO SEM APAGAR: Como querySelectorAll("checkbox") não encontra os inputs, redefinimos abaixo:
   checkboxes = document.querySelectorAll("input[type='checkbox']"); 
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


// --- ADIÇÃO DO LOOP FOR PEDIDO ---
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = geraSenha;
}

// Executa a função novamente aqui no fim, agora que todas as variáveis existem de fato
geraSenha();
