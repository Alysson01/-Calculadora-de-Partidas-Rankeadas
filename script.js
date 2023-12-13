// Função que calcula o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calculando o saldo de Rankeadas
  const saldoVitorias = vitorias - derrotas;

  // Determinando o nível com base nas condições
  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retornando a mensagem
  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
const mensagemNivel = calcularNivel(65, 20);
console.log(mensagemNivel);