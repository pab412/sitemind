(function(){
var b=document.querySelector('.nav .menu'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.hasAttribute('hidden');if(o){m.removeAttribute('hidden')}else{m.setAttribute('hidden','')}b.setAttribute('aria-expanded',String(o));b.textContent=o?'Close':'Menu'});}
})();
