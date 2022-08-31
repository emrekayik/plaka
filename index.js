import {iller} from './iller.js';

function plaka(str){
	str.trim()
	str.toLocaleUpperCase()
	var plakaBolum = str.split(" ")
	var plakaBolumSayisi = plakaBolum.length
	if(plakaBolumSayisi!= 3){
		return Error(`
			Plaka normal değil!
			Lütfen kontrol edip tekrar deneyiniz!
		`)
	}else{
		var sehir = plakaBolum[0],
		kod = plakaBolum[1],
		numara = plakaBolum[2];
		return `
		${sehir} ${kod} ${numara}
		Plakanın kayıtlı olduğu şehir: ${JSON.stringify(iller[sehir].trim())}
		Plakanın kodu                : ${kod}
		Plakanın sonundaki numara    : ${numara}
		`
	}
}

console.log(plaka("24 GG 1675"))
console.log(plaka("11 ABS 1345"))
