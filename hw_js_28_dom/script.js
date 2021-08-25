//------------------------------------------------------------------------------
function styledLinksInUL(){
let linksUL = document.querySelector('.linksUL');
let links = linksUL.querySelectorAll('.link');
links.forEach(link => {
  if (link.href.startsWith('http://') || link.href.startsWith('https://')) link.style.cssText = 'border-bottom: 1px dashed #000;';
});
linksUL.addEventListener('click', (e) => e.preventDefault());
}
styledLinksInUL();
//------------------------------------------------------------------------------
function hiddenSubList(){
let mainUl = document.querySelector('.mainUL');
mainUl.addEventListener('click', function(e){
if (e.target.tagName == 'SPAN'){
  e.target.parentElement.querySelector('ul').classList.toggle('hidden');
  e.target.style.fontWeight = (!e.target.parentElement.querySelector('ul').classList.contains('hidden'))? 'normal': 'bold';
}
});
}
hiddenSubList();
//------------------------------------------------------------------------------
