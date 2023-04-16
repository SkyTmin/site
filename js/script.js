var texts = ["Привет)", "Наша история ", "вот-вот начнется ", "ты Герой", "который в любви признается", "Отчасти сошла с ума", "но верный путь найдется", "открыть свое сердце", "тебе вот-вот придется", "Это стихотворение пришло мне в голову той тревожной ночи", "А идея создать вот это пришла прямо за ней"
,"что такое любовь?", "Сделай звук чуть потише, чтобы это прекрасная музыка не сильно мешала думать", "Хотя похрен, эта музыка прекрасна","так что такое любовь?", 
"К этой мысли вернуться придется", "Любовь - это одно из самых загадочных и прекрасных явлений в жизни", "Любовь может быть как источником счастья и благополучия", "так и источником страдания и боли",
"Но даже при всей сложности и двойственности", "любовь остается одним из самых важных и значимых чувств", "на многое ли люди готовы пойти ради любви?", "ответ однозначен"," ДА! на многое", "ибо это так прекрасно",
"ты же знаешь, я мечтатель", "мечтать - это быть свободным", "но быть в мыслях своих одним парой бывает опасно", "ты уже дошла до сюда, это так мило)","пообещай мне выполнить следующею легкую просьбу","обещаешь? не переживай, просьба не сложная","так, я сейчас скажу слово пармезан, а вот ты обязательно должна улыбнуться","хорошо?", "прекрасно", "пармезан", "пармезан", "пармезан", 
"надеюсь, что ты улыбнулась", "жаль, я не вижу сейчас эту прекрасную улыбку", "в разное время, мы разные люди", "это точно", "жаль тут нельзя поставить тыканье пальцев, ох я бы понаставил", "ты", "чудесна", "и почему ты не любишь себя?",
"как не любить себя?", "так дело не пойдет!", "я буду поддерживать тебя","не отсавлю тебя одну", "вкусняшка, ты ебобо)", "пармезан","я скучаю по тебе милая", "я скучаю❤", "выбор за тобой", ]; // массив с текстами
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
    if (index === 11) { // если индекс равен 11 (т.е. 12 элемент массива), включаем музыку
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
