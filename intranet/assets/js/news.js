// --- assets/js/news.js ---

document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.getElementById("news-container");

  // Verificar se o container de notícias existe nesta página antes de tentar renderizar
  if (newsContainer) {
    // Simulação de dados de notícias (em um ambiente real, viria de um backend/API)
    const newsData = [
      {
        title: "Lançamento do Novo Sistema de RH!",
        content: "",
        date: "10 de Julho de 2025",
      },
      {
        title: "Dia da Família no Parque - Inscrições Abertas",
        content: "",
        date: "08 de Julho de 2025",
      },
      {
        title: "Novas Medidas de Segurança Cibernética",
        content:
          "Para reforçar a segurança de nossos dados, novas políticas de senhas e autenticação de dois fatores serão implementadas a partir de 1º de agosto.",
        date: "05 de Julho de 2025",
      },
      {
        title: "Campanha de Doação de Sangue - Participe!",
        content: "",
        date: "02 de Julho de 2025",
      },
    ];

    // Função para renderizar as notícias
    function renderNews() {
      newsContainer.innerHTML = ""; // Limpa o container antes de adicionar
      newsData.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                    <span class="date">${news.date}</span>
                `;
        newsContainer.appendChild(newsItem);
      });
    }

    // Chamar a função para carregar as notícias ao carregar a página
    renderNews();
  }
});
