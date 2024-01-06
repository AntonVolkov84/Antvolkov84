const data = [
	{title: 'React',
	price: '120USD'},
	{title: 'C++',
	price: '180USD'},
	{title: 'JS',
	price: '200USD'}];
console.log(data);
class Form {
	constructor(data) {
	this.data = data;
	}
	createMarkup() {
		console.log(data);
		const {title, price} = data;
		const body = document.getElementsByTagName('body');
		this.body.insertAdjacentHTML('afterstart', `
		return <div>
			<h1>${title}</h1>
			<h2>${price}</h2>
		</div>
		`)
		}
	};
document.addEventListener('DOMContentLoaded', () => {

})
export {Form}