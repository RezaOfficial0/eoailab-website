const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.querySelectorAll('.accordion details').forEach((item) => item.addEventListener('toggle', () => { if (item.open) document.querySelectorAll('.accordion details').forEach((other) => { if (other !== item) other.removeAttribute('open') }); item.querySelector('b').textContent = item.open ? '−' : '+'; }));
