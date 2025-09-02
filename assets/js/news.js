// --- assets/js/news.js ---

document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.getElementById("news-container");

  // Verificar se o container de notícias existe nesta página antes de tentar renderizar
  if (newsContainer) {
    // Simulação de dados de notícias (em um ambiente real, viria de um backend/API)
    const newsData = [
      {
        title: "--  --",
        content: "",
        imagem: "assets/img/setembro.jpeg",
        date: "07 de Setembro de 2025",
      },
      {
        title: "-- Conta de Luz Mais Barata! --",
        content:
          "Sua conta de luz mais barata com a Energia por Assinatura da Sunne!",
        imagem: "assets/img/energia_solar.png",
        date: "08 de Agosto de 2025",
      },
      {
        title: "-- Promoção 2025 --",
        content:
          "Sua conta de luz mais barata com a Energia por Assinatura da Sunne!",
        imagem: "assets/img/promocao.jpg",
        date: "08 de Agosto de 2025",
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
                    ${
                      news.imagem
                        ? `<img src="${news.imagem}" alt="${news.title}" width="100%">`
                        : ""
                    }
                    <span class="date">${news.date}</span>
                `;
        newsContainer.appendChild(newsItem);
      });
    }

    // Chamar a função para carregar as notícias ao carregar a página
    renderNews();
  }
});
