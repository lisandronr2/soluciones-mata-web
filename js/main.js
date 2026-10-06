// Soluciones Mata SL — comportamiento común del sitio

document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  const setOpen = (open) => {
    mainNav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.textContent = open ? '✕' : '☰';
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };
  navToggle.addEventListener('click', () => setOpen(!mainNav.classList.contains('open')));
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });
}

// Formulario de contacto: sin backend, se abre el cliente de correo con
// los datos ya redactados (asunto + cuerpo), dirigido a administración.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    const subject = `Contacto web — ${asunto}`;
    const body =
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono || '(no indicado)'}\n` +
      `Email: ${email}\n\n` +
      `Mensaje:\n${mensaje}`;

    const mailto = `mailto:administracion@solucionesmata.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
