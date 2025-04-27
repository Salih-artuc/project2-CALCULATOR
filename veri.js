const ekran = document.getElementById('ekran');
const tuslar = document.querySelectorAll('.tuşlar button');
const backspace = document.querySelector('.bi-backspace-fill');
const history = document.querySelector('.bi-clock-history');
const history_page = document.getElementById('history-page');
const history_page_text = document.getElementById('history-page-text');
const calculator = document.getElementById('calculator');
const trash = document.getElementById('trash');

/*backspace */
backspace.addEventListener('click', function(){
	ekran.value = ekran.value.slice(0,-1)
})

/*ekran yazdırma ve history yazdırma bölümü*/
for(let i=0;i<tuslar.length;i++){
	tuslar[i].addEventListener("click", function(){
		const value=tuslar[i].value;

		if(tuslar[i].value==='C'){
			ekran.value='';
		}
		else if(tuslar[i].value==='='){

			try{
				history_page_text.innerHTML += ekran.value + " =<br>";
				ekran.value=eval(ekran.value);
				history_page_text.innerHTML += ekran.value + "<br><br>";
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

/*çöp kutusu*/
trash.addEventListener('click', function(){
	history_page_text.innerHTML = '';
})

/*mor buton yaptığım bölüm */
for(let i=0; i<tuslar.length; i++){
	tuslar[i].addEventListener("click", function() {
		for(let j=0; j<tuslar.length; j++){
			tuslar[j].classList.remove('active-button');
		}
		this.classList.add('active-button');
	})
}

/*açılır kapanır geçmiş bölümü*/
if (window.getComputedStyle(history_page).display === 'none') {
    calculator.classList.remove('col-lg-7');
    document.querySelector('.row').style.maxWidth = '654.73px';
}

history.addEventListener('click', function() {
    if (history_page.style.display === 'none') {
        history_page.style.display = 'block';
        document.querySelector('.row').style.maxWidth = '75%';
        calculator.classList.add('col-lg-7');
    }
	else {
        history_page.style.display = 'none';
        calculator.classList.remove('col-lg-7');
        document.querySelector('.row').style.maxWidth = '654.73px';
    }
})