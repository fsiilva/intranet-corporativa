// --- assets/js/main.js ---

document.addEventListener("DOMContentLoaded", function () {
  // Lógica para marcar o link do menu como ativo
  const navLinks = document.querySelectorAll(".sidebar nav ul li a");

  // Obter o caminho da URL atual
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    // Remover 'active' de todos
    link.classList.remove("active");

    // Se o href do link for vazio (apenas para links placeholder) ou corresponder ao caminho atual
    if (
      link.getAttribute("href") === currentPath ||
      (link.getAttribute("href") === "index.html" && currentPath === "")
    ) {
      link.classList.add("active");
    }
  });

  // Você pode adicionar outras funcionalidades gerais aqui, como:
  // - Abrir/fechar modais
  // - Manipulação de elementos de UI comuns
  // - Funções de utilidade
});
