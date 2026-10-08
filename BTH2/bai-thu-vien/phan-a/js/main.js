import {fetchBooks} from './api.js';
import {loadFavs,saveFavs} from './storage.js';
import {renderGenres,renderBooks,setStatus} from './render.js';
import {validateField} from './validate.js';
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
let books=[],favs=loadFavs();
const search=document.getElementById('search'),genre=document.getElementById('genre'),
  grid=document.getElementById('grid'),form=document.getElementById('form');
function update(){
  const q=norm(search.value.trim()),g=genre.value;
  const list=books.filter(b=>norm(b.title).includes(q)&&(!g||b.genre===g));
  renderBooks(list,books.length,favs);
}
async function init(){
  setStatus('Đang tải…');
  try{books=await fetchBooks();renderGenres(books);update()}
  catch(e){setStatus('Không tải được dữ liệu: '+e.message)}
}
search.addEventListener('input',update);
genre.addEventListener('change',update);
grid.addEventListener('click',e=>{
  const btn=e.target.closest('button[data-action]');if(!btn)return;
  const id=btn.closest('.card').dataset.id;
  if(btn.dataset.action==='fav'){favs.has(id)?favs.delete(id):favs.add(id);saveFavs(favs)}
  else if(confirm('Bạn chắc chắn muốn xóa cuốn sách này?')){
    books=books.filter(b=>b.id!==id);favs.delete(id);saveFavs(favs)}
  update();
});
function check(field){
  const msg=validateField(field.name,field.value);
  field.parentElement.querySelector('.err').textContent=msg;return !msg;
}
form.addEventListener('input',e=>check(e.target));
form.addEventListener('submit',e=>{
  e.preventDefault();
  const fields=[...form.querySelectorAll('[name]')];
  const ok=fields.map(check).every(Boolean);
  if(!ok)return;
  const f=Object.fromEntries(fields.map(x=>[x.name,x.value.trim()]));
  books.unshift({id:String(Date.now()),title:f.title,author:f.author,genre:f.genre,year:Number(f.year)});
  form.reset();update();
});
init();
