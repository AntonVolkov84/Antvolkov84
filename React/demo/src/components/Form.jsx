import React from 'react';
class Form extends React.Component {
state = {
	firstName: '',
	email: '',
	message: '',
	select: '',
	subscription: false,
	gender: '',
}
handleChange = (event) => {
	this.setState({[event.target.name]: event.target.value})
}

validateName = () => {
	if(this.state.firstName.length < 5){
		alert('You name can\'t be less 5');
	}
}
handleCheckboxChange = (event) => {this.setState({[event.target.name]: event.target.checked})

}

render(){
	const{firstName, email, message, select, subscription, gender} = this.state;
	return <div>
		<input 
		type="text"
		name="firstName"
		placeholder="firstName"
		value={firstName}
		onChange={this.handleChange}
		onBlur={this.validateName}

		/>
		<input 
		type="email"
		name="email"
		placeholder="email"
		value={email}
		onChange={this.handleChange}
		onBlur={this.validateName}
		/>
		<br />
		<textarea name="message" value={message} onChange={this.handleChange}/>
		<br />
		<select name="select" value={select} onChange={this.handleChange}>
			<option value="" disabled></option>
			<option value="1">1</option> 
			<option value="2">2</option> 
			<option value="3">3</option> 
		</select>
		<br />
		<input type="checkbox" 
		name="subscription" 
		checked={subscription} 
		onChange={this.handleCheckboxChange} />
		<br />
		<input type="radio" name="gender" value="male" onChange={this.handleChange} />Male
		<input type="radio" name="gender" value="female" onChange={this.handleChange} />Female
	</div>
	}
}

export {Form}