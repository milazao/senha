// Localiza o campo onde a senha será exibida
const campoSenha = document.querySelector("#campo-senha");

// Localiza o número que mostra o tamanho da senha
const numeroSenha = document.querySelector("#numero-senha");

// Localiza todos os checkboxes da página
const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Constantes de caracteres
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const simbolos = "!?$@#%&*-+";

// Tamanho inicial da senha
let tamanhoSenha = 8;

// Deixa o primeiro checkbox (Maiúsculas) marcado por padrão
if (checkboxes.length > 0) {
    checkboxes[0].checked = true;
}

// Gera a primeira senha quando a página abrir
geraSenha();

// Função responsável por gerar a senha
function geraSenha() {
    // Cria o "alfabeto" que começará vazio
    let alfabeto = "";

    // Verifica quais caixas estão marcadas e junta no alfabeto
    if (checkboxes[0] && checkboxes[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkboxes[1] && checkboxes[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkboxes[2] && checkboxes[2].checked) {
        alfabeto = alfabeto + simbolos;
    }

    // Se nenhuma caixa estiver marcada, exibe aviso e para a função
    if (alfabeto === "") {
        campoSenha.value = "Selecione uma opção";
        return;
    }

    let senha = "";

    // Repete o processo conforme o tamanho escolhido
    for (let i = 0; i < tamanhoSenha; i++) {
        // Gera um número aleatório baseado no tamanho do alfabeto atualizado
        let numeroAleatorio = Math.random() * alfabeto.length;

        // Remove a parte decimal
        numeroAleatorio = Math.floor(numeroAleatorio);

        // Escolhe o caractere e adiciona à senha
        senha = senha + alfabeto[numeroAleatorio];
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
