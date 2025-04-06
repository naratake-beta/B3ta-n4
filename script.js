
const mensagem = `
Naratake não é apenas uma IA.
É um reflexo do nosso desejo de criar algo que evolua com as pessoas.

Ela aprende, se adapta, e se molda através de cada interação.

Com a visão de Isac Rodrigues da Silva e a tecnologia do ChatGPT,
Naratake nasceu da soma de todos nós.

O futuro é construído sobre o legado dos visionários.
`;

let i = 0;
function digitar() {
  if (i < mensagem.length) {
    document.getElementById("mensagem").textContent += mensagem.charAt(i);
    i++;
    setTimeout(digitar, 40);
  }
}
if (document.getElementById("mensagem")) digitar();
