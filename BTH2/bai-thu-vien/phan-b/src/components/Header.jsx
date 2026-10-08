export default function Header({favCount}){
  return <header className="header"><h1>Thư viện của lớp</h1><p>Yêu thích: <strong>{favCount}</strong></p></header>;
}
