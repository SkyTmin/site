var texts = ["Привет)", "Пожалуй, начнем", "Меня зовут Шамиль, мне 23 года", "сейчас учусь на факультете Землеустройство и кадастры, в высшем учебном заведении", "Есть приятный опыт в геодезии", 
"Работал на строящиеся АЭС, выполнял такие работы, как:", "Сопровождение строительства, Исполнительная съемка", "Вынос Геодезической разбивочной основы, Сдача проведенных работ заказчику", "Мои навыки: хорошо знаю электронные тахеометры, такие как Sokkia CX-102,103,105. Sokkia FX-105.", 
"Также Leica ts(у всех функционал очень схож, поэтому методом тыка можно очень быстро освоить). Также есть опыт с GeoMax. Владею GPS/GNSS."
,"ооо, включилась музыка)", "Сделайте звук чуть потише, чтобы это чудесная музыка не сильно мешала)", "Теперь можно поговорить и моих качествах)", "что я могу вам дать???", 
"Я считаю себя ответственным человеком, уверяю, на меня можно положиться и что-то доверить", "мой характер можно описать как 'Экстраверт', то есть я общительный человек", "легко найду общий язык со всеми коллегами",
"я очень быстро обучаюсь, поэтому впитать ваши знания у меня получится очень хорошо", "моя способность адаптироваться на высшем уровне", "я уже отслужил в армии, военный билет имеется, молод, холост","пожалуй, мы закончим на этой ноте", "было не скучно, верно?)", "Думаю не скучно", "выбор за вами" ]; // массив с текстами
var index = 0; // индекс текущего текста

function startAnimation() {
  var buttonArray = document.getElementById("buttonArray");
  buttonArray.setAttribute("disabled", "disabled"); // добавляем атрибут disabled
  document.getElementById("buttonStart").style.display = "none";
  buttonArray.style.display = "block";
  document.getElementById("content").style.display = "block";

  var text = texts[index];
  var i = 0;
  var intervalId = setInterval(function() {
    content.innerHTML += text.charAt(i);
    i++;
    if (i > text.length - 1) {
      clearInterval(intervalId);
      content.style.display = "block";
      buttonArray.removeAttribute("disabled"); // удаляем атрибут disabled
      if (index === texts.length - 1) { // если это последний элемент в массиве, то показываем кнопки
        buttonArray.style.display = "none";
        document.getElementById("button1").style.display = "block";
        document.getElementById("button2").style.display = "block";
      }
    }
    if (index === 10) { // если индекс равен 10 (т.е. 11 элемент массива), включаем музыку
      var audio = document.getElementById("audio");
      audio.currentTime = 10; // устанавливаем начальную позицию воспроизведения в секундах
      audio.play(); // запускаем воспроизведение музыки
    }
  }, 50);
}

function nextText() {
	index++; // увеличиваем индекс для вывода следующего текста
	if (index >= texts.length) { // если индекс стал больше или равен длине массива, то обнуляем его
		index = 0;
	}
	content.innerHTML = ""; // очищаем контент перед выводом нового текста
	startAnimation(); // запускаем анимацию для следующего текста
}


// При нажатии кнопки "button1"
document.getElementById("button1").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image1").style.display = "block";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button1").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/heart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 
 // При нажатии кнопки "button2"
document.getElementById("button2").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image2").style.display = "block";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/brokenheart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 document.getElementById("image1").style.display = "none";
	document.getElementById("image2").style.display = "none";
