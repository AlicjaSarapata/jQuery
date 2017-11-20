$(document).ready(function () {
	changeColor();
	znajdzP();
})

$(window).scroll(function () {
	addClassToNav();
});


//$ = jQuery

function changeColor() {
	$('#first').css('background', 'red').hide('slow').show(3000);
}

var first = $('#first');
console.log(first);

var paragrafy = $('.par');
console.log(paragrafy);

//selektor elementu
var wszystkiePargarafy = $('#first p');
console.log(wszystkiePargarafy.length);

//metoda text()
//wywolanie metody text() bez argumentow powoduje wyciagniecie zawartosci tekstowej z selektora
//wywolanie metody text z argumentem (jako argument podajemy string) powoduje ustawienie zawartosci tekstowej w selektorze
//console.log(wszystkiePargarafy.text());
console.log(wszystkiePargarafy.text('test'));

//metoda html()
//przy get (bez parametru) - zwraca string z pierwszego dopasowania
//przy set (z parametrem) - dotyczy wszystkich trafien danego selektora (mozna wstrzykiwac html)
console.log(wszystkiePargarafy.html());
console.log(wszystkiePargarafy.html('<h1>Tytul</h1>'));

//metoda append()
//$('.append').append('<span>zostalem dodany</span>');

$('.append').append('<span class="lalala">zostalem dodany</span>');

$('.prepend').prepend('<span>zostalem tez dodany</span>');

$('.before').before('zostalem tez dodany');
$('.after').after('<span>zostalem tez dodany</span>');

//metoda remove
$('.append').remove();

//metoda empty usuwa zawartosc kontenera
$('.prepend').empty();

//metoda css()
console.log($('#css_method p').css('color'));
console.log($('#css_method p').css('font-size'));

//jezeli podajemy jedna wlasciwosc z wartoscia, wystarczy oddzielic je przecinkiem np. $('#css_method p').css(wlasciwosci', wartosc)


$('#css_method p').css({
	'background-color': 'yellow',
	'color': 'grey',
	'font-size': '25px'
});

//metoda val() - do pol formularz
console.log($('#formularz input:nth-child(3)').val());

var inputy = $('#formularz input');

//przy val() bez parametru, pobieramy z jednego trafienia
//przy val('parametr') ustawiamy we wszystkich trafieniach
$('#formularz input').val('jednolity tekst');

function addClassToNav() {
	var actualPos = $(document).scrollTop();
	console.log(actualPos);
	var navHeight = $('.main-nav').height();
	console.log(navHeight);

	if (actualPos > navHeight) {
		$('.main-nav').addClass('after-fix');
	}	else {
			$('.main-nav').removeClass('after-fix');
		}
	}
//metoda find
function znajdzP () {
	var paragrafy = $('#find').find('p');
	console.log(paragrafy);
	paragrafy.each(function() {
		$(this).css('background-color', 'red');
	})
}
	
	
	
	
	
	
	
	