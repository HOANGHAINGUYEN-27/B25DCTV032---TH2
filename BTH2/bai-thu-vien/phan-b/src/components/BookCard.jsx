export default function BookCard({book,isFav,onToggleFav}){
  return(<article className={'card'+(isFav?' fav':'')}>
    <h3>{book.title}</h3><p>{book.author}</p><p>{book.genre} – {book.year}</p>
    <div className="actions">
      <button className={'fav-btn'+(isFav?' on':'')} onClick={()=>onToggleFav(book.id)}>{isFav?'Đã yêu thích':'Yêu thích'}</button>
    </div>
  </article>);
}
