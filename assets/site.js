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
(function(){
var b=document.querySelector('.ddbtn'),p=document.getElementById('svcmenu');if(!b||!p)return;
var t=0,at=0,hov=window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
function open(){clearTimeout(t);if(!p.hidden)return;p.hidden=false;b.setAttribute('aria-expanded','true');at=Date.now()}
function close(f){clearTimeout(t);if(p.hidden)return;p.hidden=true;b.setAttribute('aria-expanded','false');if(f)b.focus()}
b.addEventListener('click',function(){if(p.hidden)open();else if(Date.now()-at>450)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!p.hidden){close(p.contains(document.activeElement)||document.activeElement===b)}});
document.addEventListener('click',function(e){if(!p.hidden&&!p.contains(e.target)&&!b.contains(e.target))close()});
p.addEventListener('focusout',function(e){if(e.relatedTarget&&!p.contains(e.relatedTarget)&&e.relatedTarget!==b)close()});
if(hov){[b,p].forEach(function(el){
el.addEventListener('pointerenter',function(e){if(e.pointerType!=='mouse')return;clearTimeout(t);t=setTimeout(open,80)});
el.addEventListener('pointerleave',function(e){if(e.pointerType!=='mouse')return;clearTimeout(t);t=setTimeout(function(){close()},240)})})}
})();
(function(){var s=document.querySelector('.svcin'),c=s&&s.querySelector('[aria-current=page]');if(c&&s.scrollWidth>s.clientWidth){s.scrollLeft=c.offsetLeft-(s.clientWidth-c.offsetWidth)/2}})();
