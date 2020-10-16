// 'use strict';
// ! создание массява данных получнных от пользователя
// const answers = [];

// answers[0] = prompt('Как ваша фамилия?','');
// answers[1] = prompt('Как ваше Имя?','');
// answers[2] = prompt('Сколько Вам лет','');

// document.write(answers);

//! ИНтерполяция, используется для склеивания строковых переменных, используя обратные кавычки
 
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);


// ! Подготавливаем проект к дальнейшим урокам

/* 1) Создать HTML страницу и подключить к ней файл скрипта

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

·      Первая будет спрашивать "Ваш бюджет на месяц?"

·      Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
*/
let money = +prompt ('Ваш бюджет на месяц?','');
let time = prompt ('Введите дату в формате YYYY-MM-DD','');

let appData = {
	budget: money,
	timeData: time,
	expenses : {},
	optionalExpenses: {},
	income : [],
	saving : false
}

for ( let i = 0; i < 2; i++) {
	let a = prompt ('Введите обязательную статью расходов',''),
			b = +prompt ('Во сколько обойдется?','');
	
	if ((typeof(a) === 'string') && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 10 ) {
		console.log("done!");
		appData.expenses[a] = b;
	} else {

	}
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
	console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 2000){
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 )	{
	console.log("Высокий уровень достатка");
} else {
	console.log("Ошибка!!!")
};
