var arr = ['aldi', 'ali', 'shohib'];
function tambahPenumpang(namaPenumpang, penumpang){
  if (penumpang.length==0) {
    return penumpang[0] = namaPenumpang;
  }else{
    for(var i=0; i<=penumpang.length;i++){
      if(penumpang[i]==undefined){
        console.log('kosong '+i);
        return penumpang[i] = namaPenumpang;
      }else if (penumpang[i]==namaPenumpang){
        console.log("Nama sudah ada "+i);
        return penumpang;
      }
    }
    console.log('push '+i);
    penumpang.push(namaPenumpang);
  }
};

function hapusPenumpang(namaPenumpang, arrPenumpang) {
  if (arrPenumpang.length==0) {
    console.log('Lagi kosong');
  }else{
    for(var i=0; i<=arrPenumpang.length; i++){
      if (arrPenumpang[i]==namaPenumpang) {
        return arrPenumpang[i] = undefined;
      }else if (i == arrPenumpang.length-1){
        console.log('Nama tidak ada');
      }
    }
  }
};

// let lagi = true;
// while(lagi){
//   var nama = prompt('nama penumpang');
//   tambahPenumpang(nama, arr);
//   alert('isi bangku: '+arr.join('-'));
//   lagi = confirm('tambah lagi?');
// }
