class Block {
	constructor (name, surename, age, score) {
	this.name = name,
	this.surename = surename,
	this.age = age,
	this.score = score
	const l = document.getElementById('32');
	l.insertAdjacentHTML('afterbegin', `
		<div id=${this.surename} style="margin-right: 1rem">
			<h1>${this.name} ${this.surename}</h1>
			<h2>${this.age}</h2>
			<h3 id="h3">${this.score}</h3>
		</div>
`)
}

	plusBonus(){
		this.score += 40;
		document.getElementById(`${this.surename}`).firstElementChild('h3').innerText = this.score;
		
	}
	minusBonus(){
		this.score -= 30;
		document.getElementById(`${this.surename}`).firstElementChild('h3').innerText = this.score;
		
	}
}
const user1 = new Block ('Anton', 'Volkov', 39, 200);
const user2 = new Block ('Tima', 'Kitaev', 39, 200);
