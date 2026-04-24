/* ── Broken-image → avatar placeholder ────────────────────────── */
function rprImgFallback(img){
var p=img.parentNode;
var initial=img.getAttribute('data-initial')||img.alt.trim().charAt(0).toUpperCase()||'?';
var cls='psychic-card__avatar';
if(p.classList.contains('profile-header__photo'))cls='profile-header__avatar';
if(p.classList.contains('photo-grid'))cls='photo-grid__placeholder';
var d=document.createElement('div');
d.className=cls;
d.textContent=initial;
img.replaceWith(d);
}
document.addEventListener('DOMContentLoaded',function(){
document.querySelectorAll('.psychic-card__photo img, .profile-header__photo img, .photo-grid img').forEach(function(img){
if(img.complete&&img.naturalWidth===0)rprImgFallback(img);
else img.addEventListener('error',function(){rprImgFallback(img)});
});
var t=document.querySelector('.hdr__toggle'),n=document.querySelector('.hdr__nav');
if(t&&n)t.addEventListener('click',function(){var o=n.classList.toggle('active');t.setAttribute('aria-expanded',o);t.querySelector('.hdr__toggle-open').style.display=o?'none':'block';t.querySelector('.hdr__toggle-close').style.display=o?'block':'none'});
document.querySelectorAll('.faq-row__q').forEach(function(b){b.addEventListener('click',function(){var r=b.closest('.faq-row'),w=r.classList.contains('open');document.querySelectorAll('.faq-row').forEach(function(x){x.classList.remove('open');x.querySelector('.faq-row__q').setAttribute('aria-expanded','false')});if(!w){r.classList.add('open');b.setAttribute('aria-expanded','true')}})});
});