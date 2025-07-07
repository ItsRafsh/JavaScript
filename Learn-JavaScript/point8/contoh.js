var list_penumpang = [];
var addPenumpang = function(nama,list_penumpang){
    // jika angkot kosong
    if(list_penumpang.length == 0){
        // tambah penumpang di awal array
        list_penumpang.push(nama);
        // kembalikan isi array & keluar dari function
        return list_penumpang
    }
    else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < list_penumpang.length; i++){
            // jika ada kursi kosong
            if(list_penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                list_penumpang[i] = nama;
                // kembalikan isi array & keluar dari function
                return list_penumpang;
            }
            // jika sudah ada nama yg sama
            else if(list_penumpang[i] == nama){
                // tampilkan pesan kesalahan
                console.log(nama+' sudah ada di angkot')
                // kembalikan isi array & keluar dari function
                return list_penumpang
            }
            // jika seluruh kursi terisi
            else if( i == list_penumpang.length - 1){
                // tambah penumpang di akhir array
                list_penumpang.push(nama);
                // kembalikan isi array & keluar dari function
                return list_penumpang;
            }
        }
    }
}

// membuang penumpang 8.6

var deletePenumpang = function(nama,list_penumpang){
    if(list_penumpang.length == 0){
        console.log('angkotnya masih kosong');
        return list_penumpang
    } else{
        for(var i = 0; i < list_penumpang.length; i++){
            if(list_penumpang[i] == nama){
                list_penumpang[i] = undefined;
                return list_penumpang;
            } else if( i == list_penumpang.length -1){
                console.log(nama+' gada di dalam angkot.');
                return list_penumpang;
            }
        }
    }
}
















