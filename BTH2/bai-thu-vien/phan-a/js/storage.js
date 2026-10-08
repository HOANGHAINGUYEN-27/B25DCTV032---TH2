const KEY='favorites';
export const loadFavs=()=>{try{return new Set(JSON.parse(localStorage.getItem(KEY))||[])}catch{return new Set()}};
export const saveFavs=s=>localStorage.setItem(KEY,JSON.stringify([...s]));
