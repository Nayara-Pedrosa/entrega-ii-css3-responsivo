// JavaScript mínimo para menu, modal, toast e validação
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');

  if(navToggle){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Toast
  const toast = document.getElementById('toast');
  document.getElementById('showToast').addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 2500);
  });

  // Modal
  const modal = document.getElementById('modal');
  const openModal = document.getElementById('openModal');
  const closeModal = document.querySelector('.modal-close');

  openModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
  });
  closeModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.setAttribute('aria-hidden', 'true');
  });

  // Form validation visual (client-side)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;
    [...form.querySelectorAll('[required]')].forEach((el) => {
      const error = el.parentElement.querySelector('.form-error');
      if(!el.value.trim()){
        valid = false;
        el.setAttribute('aria-invalid','true');
        error.textContent = 'Campo obrigatório.';
      } else {
        el.removeAttribute('aria-invalid');
        error.textContent = '';
      }
      if(el.type === 'email' && el.value){
        const re = /^\S+@\S+\.\S+$/;
        if(!re.test(el.value)){
          valid = false;
          el.setAttribute('aria-invalid','true');
          error.textContent = 'Email inválido.';
        }
      }
    });
    if(valid){
      toast.textContent = 'Formulário enviado com sucesso!';
      toast.classList.add('show');
      setTimeout(()=> toast.classList.remove('show'), 2500);
      form.reset();
    }
  });
});
