const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
const toTop = document.querySelector('.to-top');
if (toTop) { const sync = () => toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8); window.addEventListener('scroll', sync, { passive: true }); sync(); toTop.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); history.replaceState(null, '', window.location.pathname + window.location.search); }); }
document.querySelectorAll('.accordion details').forEach((item) => item.addEventListener('toggle', () => { if (item.open) document.querySelectorAll('.accordion details').forEach((other) => { if (other !== item) other.removeAttribute('open') }); item.querySelector('b').textContent = item.open ? '−' : '+'; }));
