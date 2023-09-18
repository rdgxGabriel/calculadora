function soma() {
    // Obtém o valor do primeiro número a partir do campo de entrada com id 'num1'
    let numero1 = document.getElementById('num1').value;
    // Obtém o valor do segundo número a partir do campo de entrada com id 'num2'
    let numero2 = document.getElementById('num2').value;
  
    // Verifica se pelo menos um dos campos está vazio (apenas espaços em branco)
    if (numero1.trim() === '' || numero2.trim() === '') {
      // Exibe um alerta indicando que ambos os números devem ser inseridos
      alert('Inserir os dois números');
      return; // Sai da função prematuramente
    }
  
    // Verifica se pelo menos um dos campos não contém um número válido ou se algum dos números é menor que zero
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      // Exibe um alerta indicando que os números são inválidos ou menores que zero
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return; // Sai da função 
    }
  
    // Calcula a soma dos números convertidos e armazena o resultado na variável 'resultado'
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    // Define o valor do campo de resultado com o valor calculado
    document.getElementById('resultado').value = resultado;
  }
  
  // As outras funções (subtrai, multiplica, divide, potenciacao, raiz, factorialize e log) têm uma estrutura semelhante, com diferenças apenas na operação realizada e nas mensagens de alerta, e realizam operações matemáticas diferentes.
  
  
  function subtrai() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
    let resultado = parseFloat(numero1) - parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
  function multiplica() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
  
    let resultado = parseFloat(numero1) * parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
  function divide() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  
  
    let resultado = parseFloat(numero1) / parseFloat(numero2);
    document.getElementById('resultado').value = resultado;
  }
  
function potenciacão(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    
    if (numero1.trim() === '' || numero2.trim() === '') {
        alert('Insirir os dois números');
        return;
      }
  
    if (isNaN(numero1) || isNaN(numero2) || parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      alert('Números inválidos. Colocar valores maiores ou iguais a zero');
      return;
    }
  

    potencia = Math.pow(numero1, numero2);

    return document.getElementById('resultado').value = potencia;
}
function raiz(){
    let numero1 = document.getElementById('num1').value;

    
    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }

    resultado = Math.sqrt(numero1);

    return document.getElementById('resultado').value = resultado;
}
function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
}
function fatoracao() {
    let numero1 = document.getElementById('num1').value;

    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }

    let fatorial = factorialize(numero1);
  
    document.getElementById('resultado').value = fatorial;
}
function log() {
    let numero1 = document.getElementById('num1').value;

    if (numero1.trim() === '' ) {
        alert('Inserir um número');
        return;
      }

    if (isNaN(numero1) || numero1 <= 0) {
        alert('Número inválido. Colocar valor maior ou igual a zero ');
        return;
    }
    let logaritmo = Math.log(numero1);

    document.getElementById('resultado').value = logaritmo;
}
  