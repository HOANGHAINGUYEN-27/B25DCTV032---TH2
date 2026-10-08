export function validateField(name,value){
  const v=String(value).trim();
  if(name==='title') return v.length<3?'Tên sách phải từ 3 ký tự.':'';
  if(name==='author') return v?'':'Tác giả là bắt buộc.';
  if(name==='genre') return v?'':'Hãy chọn thể loại.';
  if(name==='year'){const y=Number(v),max=new Date().getFullYear();
    return !v||!Number.isInteger(y)||y<1900||y>max?`Năm phải từ 1900 đến ${max}.`:''}
  return '';
}
