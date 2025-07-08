// FUNZIONE EMAIL CHE APPARE

document.getElementById('mail-button').addEventListener('click', function(e) {
  e.preventDefault();
  
  const container = document.getElementById('email-container');
  const emailText = document.getElementById('email-text');
  const feedback = document.querySelector('.copy-feedback');
  
  // Mostra/nascondi l'email
  container.classList.toggle('visible');
  
  if (container.classList.contains('visible')) {
      emailText.textContent = 'info.iicreators@gmail.com'; // Sostituisci con la tua email
      
      // Copia automatica negli appunti
      navigator.clipboard.writeText(emailText.textContent)
          .then(() => {
              feedback.style.display = 'inline-block';
              setTimeout(() => {
                  feedback.style.display = 'none';
              }, 2000);
          })
          .catch(err => {
              console.error("Errore durante la copia:", err);
          });
  }
});





//SFONDI CHE CAMBIANO

document.addEventListener("DOMContentLoaded", function() {
  // Elementi degli sfondi
  const homeBg = document.querySelector('.background-home');
  const projectsBg = document.querySelector('.background-services-container'); // Modificato qui
  
  // Sezioni della pagina
  const homeSection = document.getElementById('home-section');
  const servicesSection = document.getElementById('services-section'); // Cambiato da projectsSection
  const infoSection = document.getElementById('info-section');

  let transitionInProgress = false;

  function startTransition(fromBg, toBg) {
    if (transitionInProgress) return;
    
    transitionInProgress = true;
    console.log('Cambio sfondo da:', fromBg.classList, 'a', toBg.classList);

    setTimeout(() => {
      transitionInProgress = false;
    }, 600);

    fromBg.classList.remove('active');
    toBg.classList.add('active');
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      const isVisible = entry.isIntersecting;

      console.log(target.id, 'è visibile:', isVisible);

      // Sezione Home visibile
      if (target === homeSection && isVisible && !transitionInProgress) {
        startTransition(projectsBg, homeBg);
      }

      // Sezione Services visibile (sostituisce projectsSection)
      if (target === servicesSection && isVisible && !transitionInProgress) {
        startTransition(homeBg, projectsBg);
      }
      
      // Sezione Info mantiene lo sfondo di services
    });
  }, observerOptions);

  // Osserva le sezioni (aggiunto servicesSection)
  sectionObserver.observe(homeSection);
  sectionObserver.observe(servicesSection); // Cambiato da projectsSection
  sectionObserver.observe(infoSection);

  // Inizializzazione
  homeBg.classList.add('active');
});



