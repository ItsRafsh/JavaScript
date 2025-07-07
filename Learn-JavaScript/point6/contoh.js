// INI CONTOH PR YG DIBERIKAN ---- menebak angka 1-10 ----


let ulang = true;
while (ulang){
	let comp = Math.floor(Math.random() * 10 + 1);
	for (i = 3; i>=1; i--){
		
		let player  = prompt("Tebak angka dari 1 sampai 10 \nKamu punya " +i+  " kali kesempatan menebak"),
		hasil = "";
		if (i == 1){
			hasil = "\nKesempatan habis, GAME OVER";
		}
		if (player == "" || player > 10 || player == null){
			alert("Anda belum memasukkan nilai atau  Anda masukkan nilai lebih dari 10. \nGAME OVER");
			break;
		} else if (player == comp){
			alert("SELAMAT !!! Angka yang anda tebak benar" );
			break;
		} else if (player > comp){
			alert("Angka yang anda tebak terlalu besar" + hasil);
		} else if(player < comp) {
			alert("Angka yang anda tebak terlalu kecil" + hasil);
		} else {
			alert("Yang anda masukkan bukan angka, GAME OVER");
			break;
		}
	}
	ulang = confirm("Mau main lagi?");
}
alert("Terimakasih sudah bermain game tebak angka");

