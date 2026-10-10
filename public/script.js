const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') }), { threshold: 0, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
const toTop = document.querySelector('.to-top');
if (toTop) { const sync = () => toTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8); window.addEventListener('scroll', sync, { passive: true }); sync(); toTop.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); history.replaceState(null, '', window.location.pathname + window.location.search); }); }
// FAQ accordion: one answer open at a time, with the answer's height animated
// instead of the native instant toggle. Without JS, <details> still works.
const faqItems = document.querySelectorAll('.accordion details');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setFaq(item, open) {
  const body = item.querySelector('.answer');
  item.dataset.open = open ? 'true' : 'false';
  item.querySelector('b').textContent = open ? '−' : '+';
  const from = item.open ? body.getBoundingClientRect().height : 0;
  if (item._anim) item._anim.cancel();
  if (reduceMotion || !body.animate) { item.open = open; return; }
  item.open = true;
  const to = open ? body.scrollHeight : 0;
  item._anim = body.animate([{ height: from + 'px', opacity: open ? 0 : 1 }, { height: to + 'px', opacity: open ? 1 : 0 }], { duration: 460, easing: 'cubic-bezier(.22,.61,.36,1)' });
  item._anim.onfinish = () => { item._anim = null; if (!open) item.open = false; };
}
faqItems.forEach((item) => {
  item.dataset.open = item.open ? 'true' : 'false';
  item.querySelector('summary').addEventListener('click', (e) => {
    e.preventDefault();
    const open = item.dataset.open !== 'true';
    if (open) faqItems.forEach((other) => { if (other !== item && other.dataset.open === 'true') setFaq(other, false); });
    setFaq(item, open);
  });
});
