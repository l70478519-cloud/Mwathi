const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'×':'☰'});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const roles=['Software Developer','Full-stack Engineer','Cloud & DevOps Engineer','Data & AI Builder'];
const roleEl=document.querySelector('.typed-role');
let roleIndex=0,charIndex=roles[0].length,deleting=true;
function typeRole(){
  if(!roleEl)return;
  const role=roles[roleIndex];
  charIndex+=deleting?-1:1;
  roleEl.textContent=role.slice(0,charIndex);
  if(!deleting&&charIndex===role.length){deleting=true;setTimeout(typeRole,1400);return}
  if(deleting&&charIndex===0){deleting=false;roleIndex=(roleIndex+1)%roles.length}
  setTimeout(typeRole,deleting?45:75);
}
setTimeout(typeRole,1200);
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav-wrap nav a[href^="#"]')];
const activeNav=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55%',threshold:0});
sections.forEach(section=>activeNav.observe(section));
