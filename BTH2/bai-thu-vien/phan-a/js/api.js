// Dùng books.json; nếu dùng mockapi.io, đổi URL và thêm POST/DELETE bằng fetch.
const URL_BOOKS='books.json';
export async function fetchBooks(){
  const res=await fetch(URL_BOOKS);
  if(!res.ok) throw new Error('Lỗi máy chủ: '+res.status);
  return res.json();
}
