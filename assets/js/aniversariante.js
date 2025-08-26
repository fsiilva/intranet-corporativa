document.addEventListener("DOMContentLoaded", () => {
  // Lista de aniversariantes (você pode carregar isso de um JSON, API, etc.)
  const aniversariantes = [
    { nome: "RAIMUNDO NONATO", data: "06/08" },
    { nome: "IRANILSON FAUSTO", data: "07/08" },
    { nome: "CARLOS ALEXANDRE", data: "08/08" },
    { nome: "FRANCISCO FABRICIO", data: "10/08" },
    { nome: "RAFAEL COSTA", data: "21/08" },
    { nome: "JOSE VALDEMAR", data: "26/08" },
    { nome: "CÉSAR JUCÁ", data: "27/08" },
    { nome: "ELIAS MORAIS", data: "28/08" },
    { nome: "SIDNEY MACIEL", data: "29/08" },
    { nome: "DJAMILTON DORO", data: "04/08" },
    { nome: "MIKAELLY JOYCE", data: "15/08" },
    { nome: "THAMIRES CONSTÂNCIO", data: "15/08" },
    { nome: "DÉBORA MELO", data: "24/08" },
    { nome: "JAMILE TORRES", data: "29/08" },
  ];

  const destaqueDiv = document.getElementById("destaque");
  const aniversariantesPorMesDiv = document.getElementById(
    "aniversariantes-por-mes"
  );

  // Obtém a data atual
  const hoje = new Date();
  const diaAtual = hoje.getDate();
  // getMonth() retorna de 0 (janeiro) a 11 (dezembro), então adicionamos 1
  const mesAtual = hoje.getMonth() + 1;

  // Formata a data atual para comparação (DD/MM)
  const dataAtualFormatada = `${diaAtual.toString().padStart(2, "0")}/${mesAtual
    .toString()
    .padStart(2, "0")}`;

  let aniversariantesDoDia = [];

  // Organiza os aniversariantes por mês
  const aniversariantesAgrupados = {};

  aniversariantes.forEach((aniversariante) => {
    const [dia, mes] = aniversariante.data.split("/");
    const dataAniversario = `${dia}/${mes}`;

    if (dataAniversario === dataAtualFormatada) {
      aniversariantesDoDia.push(aniversariante);
    }

    // Garante que o mês existe como chave no objeto
    if (!aniversariantesAgrupados[mes]) {
      aniversariantesAgrupados[mes] = [];
    }
    aniversariantesAgrupados[mes].push(aniversariante);
  });

  // Exibe o(s) aniversariante(s) do dia
  if (aniversariantesDoDia.length > 0) {
    destaqueDiv.innerHTML = aniversariantesDoDia
      .map(
        (aniversariante) =>
          `<p class="aniversariante-card">${aniversariante.nome}</p>`
      )
      .join("");
  } else {
    destaqueDiv.innerHTML = "<p>Nenhum aniversariante hoje.</p>";
  }

  // Exibe a lista de aniversariantes por mês
  const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  // Ordena os meses e depois os aniversariantes dentro de cada mês
  const mesesOrdenados = Object.keys(aniversariantesAgrupados).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  mesesOrdenados.forEach((mesNumero) => {
    const nomeDoMes = mesesDoAno[parseInt(mesNumero) - 1];
    const aniversariantesDoMes = aniversariantesAgrupados[mesNumero].sort(
      (a, b) => {
        const diaA = parseInt(a.data.split("/")[0]);
        const diaB = parseInt(b.data.split("/")[0]);
        return diaA - diaB;
      }
    );

    const mesDiv = document.createElement("div");
    mesDiv.classList.add("aniversariante-mes");
    mesDiv.innerHTML = `<h3>${nomeDoMes}</h3>`;

    aniversariantesDoMes.forEach((aniversariante) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("aniversariante-item");
      itemDiv.innerHTML = `
                <span class="nome">${aniversariante.nome}</span>
                <span class="data">${aniversariante.data}</span>
            `;
      mesDiv.appendChild(itemDiv);
    });
    aniversariantesPorMesDiv.appendChild(mesDiv);
  });
});
