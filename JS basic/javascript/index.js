// const win = Math.ceil(Math.random() * 10);
// let i = 1;
// function game(number){
// 	if (i >= 5) return alert("Не угадал, игра окончена. Если еще раз хочешь - перезагрузи страницу!");
	
// 	if (number === win){
// 		alert("ТЫ ВЫИГРАЛ. СУПЕР ЧЕМПИОН");
// 		i = 5;
// 	}else if(number < win){
// 		alert("Нет, попробуй число больше");
// 		i++
// 		}else {
// 		alert("Нет, попробуй число меньше");
// 		i++;
// 		}
// }
// const developer = {
// 	name: "Anton",
// 	sureName: "Volkov",
// 	age: 39,
// 	maried: true,
// 	skills: ["CSS", "HTTP", "Javascript"],
// };
// for (let prop in developer){
// 	// console.log(prop, developer[prop]);
// }
// const numbers = [1,2,3,4,5,6,7];
// for (let number of numbers){
// 	// console.log(number);
// }



// const riddle = {
// 	question: "Висит груша, нельзя скушать?",
// 	correctAnswer: "лампочка",
// 	hints: ["это съедобное", "это фрукт"],
// 	tries: 3,
// 	checkAnswer(str){
// 		if(this.tries < 1){
// 			return alert("Игра окончена");
// 		}
// 		if (str.toLowerCase().includes(this.correctAnswer)){
// 			alert("Правильный ответ!!!");
// 			console.log('Правильный ответ');
// 			this.tries = 0;
// 		}else{
// 			alert("Неправильный отет");
// 			console.log('Неправильный ответ');
// 			this.tries--;
// 			const hint = this.hints[this.tries === 2 ? 0 : 1];
// 			if(this.tries){
// 			alert("Подсказка: " + hint);
// 			}else{
// 				return alert("Игра окончена");
// 			}
// 		}


// 	},
// }
// window.onload = function() {
// 	document.getElementById("riddle").innerText = riddle.question;
// }

// function check(){
// 	const input = document.getElementsByTagName("input")[0];
// 	const guessedAnswer = input.value;
// 	if(guessedAnswer){
// 		riddle.checkAnswer(guessedAnswer);

// 	}
// }

// // // // pop, push удаляеь и добавляет последний элемент массива


// // // // const str = "Hello World";
// // // // console.log(str.toLowerCase());
// // // // console.log(str.toUpperCase());
// // // // console.log(str.includes("world"));
// // // // console.log(str.indexOf("World"));
// // // // console.log(str.toLowerCase().includes("hello"));
// // // // console.log(str.slice(0, 4));
// // // // console.log(str.split(" ").join(" | "));

// // // // const num2 = 1756231.00158;
// // // // console.log(num2.toFixed(3));
// // // // console.log(num2.toLocaleString("ru-RU"));

// // // // function copyArrayAndSmth(arr, instructions){
// // // // 	const output = [];
// // // // 	for(let i = 0; i < arr.length; i++){
// // // // 		output.push(instructions(arr[i]));
// // // // 	}
// // // // 	return output;
// // // // }

// // // // function nuSquared(num){
// // // // 	return num ** 2;
// // // // }

// // // // const result = copyArrayAndSmth([1, 2, 3, 4, 5], nuSquared);
// // // // console.log(result);

// const numbers123 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr123 = [];

// // function pushEl(el){
// // 	arr123.push(el);
// // }
// // numbers123.forEach(pushEl);
// function doubleNum(num){
// 	return num * 2;
// }

// const numbers12 = numbers123.map(doubleNum);
// // // console.log(numbers12);
// const cities = ['London', 'Paris', 'Belis', 'Antwerpen'];
// // // cities.includes('Belis');
// // const developers = [
// // {
// // 	id:1,
// // 	fullName: 'Timofey Kitaev',
// // 	skils: ['HTML', 'CSS', 'JavaScript', 'HTML5'],
// // 	area: 'backend',
// // },
// // {
// // 	id:2,
// // 	fullName: 'Rodomanov Roma',
// // 	skils: ['HTML', 'CSS', 'JavaScript', 'Paskal'],
// // 	area: 'frontend',
// // },
// // {
// // 	id:3,
// // 	fullName: 'Andrey Piskorskiy',
// // 	skils: ['HTML', 'CSS', 'JavaScript', 'React'],
// // 	area: 'frontend',
// // },
// // {
// // 	id:4,
// // 	fullName: 'Slava Lisovets',
// // 	skils: ['HTML', 'CSS', 'JavaScript', 'React'],
// // 	area: 'backend',
// // },
// // {
// // 	id:5,
// // 	fullName: 'Yevgen Sinko',
// // 	skils: ['HTML', 'CSS', 'JavaScript', 'React'],
// // 	area: 'fullstack',
// // },
// // ]
// console.log(cities);
// console.log(...cities);
// const arr2 = ['Riga', 'Rim', ...cities, 'Moscow', 'Reykyavik'];
// console.log(...arr2);

// // console.log(developers.find((item) => 
// // 	item.skils.includes('React')));
// // console.log(developers.findIndex((item) => 
// // 	item.skils.includes('React')));
// function sorting(a, b) {
// 	if(a > b){
// 		return 1;
// 	}
// 	if (a < b) {
// 		return -1;
// 	}
// 	return 0;
// };

// // developers.sort((a, b) => sorting (a.area, b.area));
// // console.log(developers);
// // // const = cities
// // const dev2 = {
// // 	id:5,
// //  	fullName: 'Yevgen Sinko',
// //  	skils: ['HTML', 'CSS', 'JavaScript', 'React'],
// //  	area: 'fullstack',
// //  };
// //  const dev3 = {...dev2};
// //  dev3.fullName = 'Salamaha Vetal';
// //  console.log(dev3);
// const numbers = null;
// // // sum(...numbers456);
// // console.log(ler(4,5,6,7));
// // console.log(ler(...numbers456));

// // function ler(a, b, ...args) {
// // 	let resu = a + b;
// // 	for (let i = 0; i < args.length; i++) {
// // 		resu += args[i];
// // 	}
// // 	return resu;
// // }
// const cities = ['London', 'Paris', 'Belis', 'Antwerpen'];
// const cities = null;
// const [
// 	london = "Лондон",  
// 	paris = 'Paris', 
// 	...otherCities] = cities || [];
// console.log(london, paris, otherCities);
// const[
// 	a = 0,
// 	b = 0,
// 	[c = 1, d = 1] = [],
// 	] = numbers || [];
// console.log(a, b, c, d);
// const developer = {
// id: 1,
// fullName: "Anton Volkov",
// skills: ['HTML', 'css', 'JS'],
// area: 'frontend',
// languages: {
// 	english: 'B2',
// 	spanish: 'native',
// 	hebrew: 'A1',}
// };
// };
// const area = 'abcde';
// const {
// 	area: areaDeveloper,
// 	fullName,
// 	languages: {
// 		spanish
// 	} = {},
// 	skills: [,,basicSkill] = [],
// 	...otherProp

// } = developer || {};
// console.log(area, fullName, spanish, otherProp);
// console.log(areaDeveloper, otherProp, basicSkill);
// let area, id;
// ({area, id} = developer);
// console.log(area, id);
// const firstName = 'John';
// const lastName = 'Doe';
// console.log('Hy, my name is ' + firstName + ' ' + lastName + '!');
// console.log(`Hi, my name is ${firstName} ${lastName}!`)
// const products = [
// {
// 	id:1,
// 	title: 'Lenovo 5m10',
// 	price: 3000,
// },
// {
// 	id:2,
// 	title: 'Acer Aspire',
// 	price: 1800,
// },
// {
// 	id:3,
// 	title: 'Samsung p13',
// 	price: 3400,
// },
// ];
// let order = [];

// function addToBasket(productId){
// 	if (order.find(el => el.id === productId))
// 	{
// 		return alert('Товар уже в корзине!');

// 	};

// 	const product = products.find((item) => item.id === productId);
// 	order = [...order, product];

// 	renderCart();
// 	rerenderTotalPrice();
// };


// function removeFromBasket(productId){
// order = order.filter(item => item.id !== productId);
// renderCart();
// rerenderTotalPrice();
// };


// function rerenderTotalPrice() {
// 	const totalPrice = order.reduce((acc, item) => {
// 		return acc + item.price;
// 	}, 0);


// document.getElementById("total").innerText = totalPrice;
// };


// function renderCart() {
// 	const cart = document.getElementById("basket-items");

// 	cart.innerHTML = "";
// 	order.forEach((item) => {
// 		const el = document.createElement("li");
// 		el.innerText = item.title;
// 		el.onclick = () => removeFromBasket(item.id);
// 		cart.appendChild(el);
// 	});
// };
// const btn = document.getElementById('btn');
// const text = document.querySelector('.btn1');
// function toggleDivVisibility(){
// 	text.classList.toggle('hide');
// }
// btn.addEventListener('click', toggleDivVisibility);

// const btn1 = document.getElementById('btn1');
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => input.addEventListener('keypress', handleClick));
// btn1.addEventListener('click', handleClick);
// input.addEventListener('keypress', handleClick);
// document.querySelector('button').addEventListener('click', handleClick);
// document.querySelector('section').addEventListener('click', handleClick);
// document.querySelector('div').addEventListener('click', handleClick);
// function handleClick(event){
	
// 	// event.stopPropagation();
// 	console.log(event);
// 	console.log(event.target);
// 	console.log(event.currentTarget);
// if (event.key === 'Enter'){
// 	event.target.nextElementSibling.focus();
// }
// }

// // Добавление элементов на страницу

// const list = document.getElementById('todos');
// document.querySelector('button').addEventListener('click', handleClick);
// document.addEventListener('DOMContentLoaded', loadTodos);

// function handleClick () {
// 	const newTodo = this.previousElementSibling.value.trim();
// 	if (newTodo) {
// 		createTodo(newTodo);
// 		saveToStorage(newTodo);
// 		this.previousElementSibling.value = '';
// 	}else{
// 		alert('Ничего не введено');
// 	}
// }
// function createTodo(text){
// 	const li = document.createElement('li');
// 	li.innerText = text;
// 	li.className = 'todo__item';
// 	li.style.listStyle = 'none';
// 	list.append(li);
// 	li.addEventListener('click', removeTodo);
// }
// function removeTodo(){
// 	this.removeEventListener('click', removeTodo);
// 	this.remove();
	

// }
// function loadTodos(){
// 	const todos = JSON.parse(localStorage.getItem('tasks'));
	
// 	console.log(todos);
// 	if (todos){
// 		todos.forEach(todo => createTodo(todo));
// 	}
// }

// function saveToStorage(todo){
// 	const todos = JSON.parse(localStorage.getItem('tasks')) || [];
// 	localStorage.setItem('tasks', JSON.stringify([...todos, todo]));
// }
// const block1 = document.querySelector('#block');
// const block2 = block1.querySelector('#too');
// const x = 123;
// block2.insertAdjacentHTML('beforeend', `
// 	<h2 class='subtitle'>Text</h2>
// 	<p>${x}</p>
// 	`);
// console.log(block2.closest('#block'));

//  Модальное окно

// const btn = document.getElementById('myBtn');
// const modal = document.getElementById('myModal');

// btn.addEventListener('click', openModal);

// function openModal(){
// 	modal.classList.add('open');
// 	attachModalEvents()
// }

// function attachModalEvents(){
// 	modal.querySelector('.close').addEventListener('click', closeModal);
// 	document.addEventListener('keydown', handleEscape);
// 	modal.addEventListener('click', handleOutside);

// }
// function handleOutside(event){
// 	const isClickOutside = !!event.target.closest('.modal-content');
// 	if (!isClickOutside){
// 		closeModal();

// 	}
// }
// function handleEscape(event){
// 	if (event.key === 'Escape'){
// 		closeModal();
// 	}

// }
// function closeModal(){
// 	modal.classList.remove('open');

// 	detachModalEvents();
// }
// function detachModalEvents(){
// 	modal.querySelector('.close').removeEventListener('click', closeModal);
// 	document.removeEventListener('keydown', handleEscape);
// 	modal.removeEventListener('click', handleOutside);
// }

// document.getElementById('btn').addEventListener('click', openModal);
// const x = document.querySelector('#div');



// function openModal(){
// 	x.classList.toggle('open');
// 	if (x.classList.contains('open')) {addesc();
// 	}else {
// 		deesc();
// 	}

// }
// function esc(event) {
// 	if(event.key === 'Escape'){
// 		x.classList.remove('open');
// 	}
// }
// function addesc(){
// document.addEventListener('keydown', esc);
// }
// function deesc() {
// 	document.removeEventListener('keydown', esc);
// }
// let hidenElement = document.getElementById('box');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', scroll);

// function scroll(){
// 	hidenElement.scrollIntoView({block: 'start', behavior: 'smooth'})
// }
// IMask (document.getElementById('phone'), {
// mask: '+{38}(000)000-00-00',
// });
// IMask (document.getElementById('age'), {
// mask: Number,
// min: 0,
// max: 108,
// });
// IMask (document.getElementById('date'), {
//     mask: Date,
//     overwrite:true,
//     lazy: false,
//     autofix: true,
//     blocks: {
//       d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
//       m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
//       Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2025, maxLength: 4}
//     }
//   }
// );
// const btn5 = document.querySelectorAll('.btn5');
// btn5.forEach(button => button.addEventListener('click', handle));

// function handle (event) {
// 	this.nextElementSibling.innerText = 'Button ';
// 	console.log("Target ", event);

// }
// function handle() {
// document.getElementById('h1').innerText = document.getElementById('h1').innerText.replace(/Число/ig, 'Сам число');
// };
// const promise1 = new Promise((resolve, reject) => {
// 	resolve(10);
// });
// promise1.then ((value) =>{
// 	console.log(value);
// 	return value + 4;
// })
// .then((value) => {console.log(value); return value - 1})
// .then((value) => {console.log(value); return value * 2})
// .then((value) => {console.log(value); return value *3; console.log(value)})
// .then ((value) => {console.log(value)})
// async function getPictures(){
	// const response = await fetch('https://jsonplaceholder.typicode.com/pictures');
	// const data = await response.json();
	// return data;
	// return Promise.resolve([{id: 1, src: ''}])
// 	return Promise.reject('Invalid user')
// }
// getPictures()
// .then()
// .catch()


const form0 = document.getElementById('formin');
const container = document.getElementById('contul');
const submit0 = document.getElementById('form');
const finish = document.getElementById('contul2');
// console.log(formin);
// console.log(contul);
// console.log(submit);


submit0.addEventListener('submit', printValue, fn1);

function fn1 () {console.log(event)};

function printValue (event){
	// console.log(event);
	event.preventDefault();
	const div = document.createElement('div');
	div.className = 'contul1';

	const li = document.createElement('li');
	li.className = 'contli';
	li.innerText = form0.value;
	// console.log(form0.value);

	const status = document.createElement('input');
	status.type = 'checkbox';
	status.addEventListener('change', handleSvitch);

	const span = document.createElement('span');
	span.innerHTML = '&times;';
	span.className = 'spanpointer';
	span.addEventListener('click', handleClose)

	div.appendChild(status);
	div.appendChild(li);
	div.appendChild(span);

	container.appendChild(div);

	function handleClose(){
		span.closest('div').remove();
	}
	function handleSvitch(){
		const completed = this.checked;
		if (completed) {
			const li2 = document.createElement('li');
			li2.className = 'contli2';
			li2.innerText = li.innerText;
			
			finish.appendChild(li2);

			status.closest('div').remove();
		}
	}
		

}









