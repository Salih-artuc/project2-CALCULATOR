const ekran = document.getElementById("ekran");
const tuslar = document.querySelectorAll(".tuşlar button");

for(let i=0;i<tuslar.length;i++){
	tuslar[i].addEventListener("click", function(){
		const value=tuslar[i].value;

		if(tuslar[i].value==='C'){
			ekran.value='';
		}
		else if(tuslar[i].value==='='){
			try{
				ekran.value=eval(ekran.value);
			}
			catch(e){
				ekran.value='HATA';
			}
		}
		else{
			ekran.value+=value;
		}
	})
}