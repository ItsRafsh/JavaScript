// membuat objek angkot
function Angkot(sopir,trayek,penumpang,kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namapnumpang){
        this.penumpang.push(namapnumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namapnumpang,bayar){
        if(this.penumpang.length === 0){
            alert('angkot kosong');
            return false;
        }
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namapnumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}
var angkot1 = new Angkot('rafa',['tapis','jone'],[],0)
var angkot2 = new Angkot('rimuru',['tempest','blumund'],[],0)
// cara manggil ini program tulis aja var angkot1 di consol, kanyk manggil method gitu