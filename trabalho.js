// Exemplo simples: animação de rolagem suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const alvo = document.querySelector(link.getAttribute('href'));
      alvo.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Feedback simples no envio do formulário
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    form.reset();
  });
  