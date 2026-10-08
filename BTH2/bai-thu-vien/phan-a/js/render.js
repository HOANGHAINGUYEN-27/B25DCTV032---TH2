const $=id=>document.getElementById(id);
export function renderGenres(books){
  const genres=[...new Set(books.map(b=>b.genre))].sort();
  for(const sel of [$('genre'),document.querySelector('form [name=genre]')])
    for(const g of genres){const o=document.createElement('option');o.value=g;o.textContent=g;sel.append(o)}
}
function card(b,favs){
  const el=document.createElement('article');
  el.className='card'+(favs.has(b.id)?' fav':'');el.dataset.id=b.id;
  const h=document.createElement('h3');h.textContent=b.title;
  const a=document.createElement('p');a.textContent=b.author;
  const m=document.createElement('p');m.textContent=`${b.genre} – ${b.year}`;
  const act=document.createElement('div');act.className='actions';
  const f=document.createElement('button');f.dataset.action='fav';
  f.className='fav-btn'+(favs.has(b.id)?' on':'');f.textContent=favs.has(b.id)?'Đã yêu thích':'Yêu thích';
  const d=document.createElement('button');d.dataset.action='delete';d.textContent='Xóa';
  act.append(f,d);el.append(h,a,m,act);return el;
}
export function renderBooks(list,total,favs){
  const grid=$('grid');grid.replaceChildren(...list.map(b=>card(b,favs)));
  $('status').textContent=`Đang hiển thị ${list.length} / ${total} cuốn`;
  $('fav-count').textContent=favs.size;
}
export const setStatus=t=>{$('status').textContent=t};
