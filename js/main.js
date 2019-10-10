let punkti = 0;
let kludas = 0;
let jautajums = 1;
let par;
let nep;
let jau;
let atb; 
let karogs; 
// valstis arra
// Kristaps Muižnieks
var jautajumi = { 
    0: { jautajums: "Latvijas galvaspilsēta ir ?", atbildes: "Rīga|Maskava|Pēterburga|Jelgava", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Latvia.png"}, 
    1: { jautajums: "Afganistānas galvaspilsēta ir ?", atbildes: "Luanda|Maskava|Kabula|Jelgava", c: 2,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Afghanistan.png"}, 
    2: { jautajums: "Albānijas galvaspilsēta ir ?", atbildes: "Tirāna|Maskava|Pēterburga|Jelgava", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Albania.png"}, 
    3: { jautajums: "Alžīrijas galvaspilsēta ir ?", atbildes: "Rīga|Luanda|Pēterburga|Alžīra", c: 3,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Algeria.png"}, 
    4: { jautajums: "Andoras galvaspilsēta ir ?", atbildes: "Rīga|Andora la Velja|Pēterburga|Buenosairesa", c: 1,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Andorra.png"}, 
    5: { jautajums: "Angolas galvaspilsēta ir ?", atbildes: "Luanda|Maskava|Pēterburga|Jelgava", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Angola.png"}, 
    6: { jautajums: "Argentīnas galvaspilsēta ir ?", atbildes: "Rīga|Maskava|Pēterburga|Buenosairesa", c: 3,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Argentina.png"}, 
    7: { jautajums: "Armēnijas galvaspilsēta ir ?", atbildes: "Rīga|Erevāna|Pēterburga|Jelgava", c: 1,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Armenia.png"}, 
    8: { jautajums: "ASV galvaspilsēta ir ?", atbildes: "Rīga|Maskava|Pēterburga|Vašingtona", c: 3,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png"}, 
    9: { jautajums: "Austrālijas galvaspilsēta ir ?", atbildes: "Kanbera|Maskava|Pēterburga|Vašingtona", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Austria.png"}, 
    10: { jautajums: "Baltkrievijas galvaspilsēta ir ?", atbildes: "Rīga|Minska|Bridžtauna|Jelgava", c: 1,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Belarus.png"}, 
    11: { jautajums: "Bangladešas galvaspilsēta ir ?", atbildes: "Daka|Maskava|Pēterburga|Jelgava", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Bangladesh.png"}, 
    12: { jautajums: "Barbadosas galvaspilsēta ir ?", atbildes: "Rīga|Maskava|Brisele|Bridžtauna", c: 3,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Barbados.png"}, 
    13: { jautajums: "Beļģijas galvaspilsēta ir ?", atbildes: "Brisele|Maskava|Pēterburga|Jelgava", c: 0,flag:"https://www.countries-ofthe-world.com/flags-normal/flag-of-Belgium.png"}, 
     

}
let cikvar = Object.keys(jautajumi).length;


function sakt(){
	punkti = 0;
	kludas = 0;
	jautajums = 1;
	// atrod visus objektus
	par = document.getElementById("pareizas");
	nep = document.getElementById("nepareizas");
	jau = document.getElementById("jautajums");
	atb = document.getElementById("atbildes"); 
	karogs = document.getElementById("karogs"); 
	document.getElementById("poga").remove();
	jautajumu(); 
}
function jautajumu(){
	let pogas = Array();
	let atbtemp = "";
	let atbindekss = "";
	jsk = Math.floor(Math.random() * cikvar); 
	jau.innerHTML =	jautajums+". jautājums <br> "+jautajumi[jsk].jautajums;
	karogs.innerHTML =	"<img src='"+jautajumi[jsk].flag+"'>";
	pogas = jautajumi[jsk].atbildes.split("|");
	console.log(pogas.length);
	for(let sk = 0; sk < pogas.length;sk++){
 
		atbtemp += "<button id='atb"+(sk+1)+"' onclick='atbilde("+jsk+","+sk+")'>"+(sk+1)+". "+pogas[sk]+"</button> <br>";
	}
	atb.innerHTML = atbtemp;
	renderlaukums();
}
function atbilde(j,sk){
	 if(jautajumi[j].c == sk){
		punkti++;	
		 pareiza();
	 }else{
		kludas++;
		nepareiza();
	 }
	 jautajums++;
	 if(jautajums > 20){
		 spelesbeigas();
	 }else{
		document.getElementById("atb"+(sk+1)).disabled = true;
		setTimeout(function(){
			jautajumu(); 
		}, 1000);
		 
	 }
	 
 
}
function pareiza(){
	var konteineris = document.getElementById("konteiners");
	konteineris.classList.add("pareiza");
	setTimeout(function(){
	   konteineris.classList.remove("pareiza");
	}, 1000);
}
function nepareiza(){
	 var konteineris = document.getElementById("konteiners");
	konteineris.classList.add("nepareiza");
	setTimeout(function(){
	   konteineris.classList.remove("nepareiza");
	}, 1000);
	
}
function renderlaukums(){
	
	par.innerHTML = "Pareizas atbildes:"+punkti;
	nep.innerHTML = "Nepareizas atbildes:"+kludas;
	
}
function spelesbeigas(){
	document.getElementById("konteiners").innerHTML = "";
	document.getElementById("konteiners").innerHTML = "<h1> Spēles beigas! Jūs atbildējāt pareizi uz "+punkti+" jautājumiem, kļūdijāties "+kludas+".</h1> ";
	document.getElementById("konteiners").innerHTML += '<button onClick="window.location.href=window.location.href"> Sākt no jauna</button>';
 
	
}
