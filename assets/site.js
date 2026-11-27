(function(){
var b=document.querySelector('.nav .menu'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.hasAttribute('hidden');if(o){m.removeAttribute('hidden')}else{m.setAttribute('hidden','')}b.setAttribute('aria-expanded',String(o));b.textContent=o?'Close':'Menu'});}
})();
(function(){
window.__mo=true;
var d=document.documentElement;
if(!d.classList.contains('mo'))return;
var sd=window.CSS&&CSS.supports('animation-timeline: view()');
if(!sd)d.classList.add('no-sd');
document.querySelectorAll('[data-reveal]').forEach(function(el){var k=0,c=el.parentElement.firstElementChild;while(c&&c!==el){if(c.hasAttribute('data-reveal'))k++;c=c.nextElementSibling}el.style.setProperty('--i',Math.min(k,6))});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('[data-rise],[data-reveal]'+(sd?'':',[data-open]')).forEach(function(el){io.observe(el)});
})();
