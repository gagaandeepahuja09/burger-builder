import React from 'react';
import ip from './Input.css';

const input = (props) => {
	let inputElement = null;
	let validationError = null;
	const inputClasses = [ip.inputElement];

	if(props.invalid && props.shouldValidate && props.touched)
	{
		inputClasses.push(ip.Invalid);
		validationError = <p className = {ip.ValidationError}>Please enter a valid {props.elementName}</p>
	}
	switch(props.elementType)
	{
		case('input'):
			inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value = {props.value}  onChange = {props.changedIP}/>;
			break;
		case('textarea'):
			inputElement = <textarea className={inputClasses} {...props.elementConfig} value = {props.value}  onChange = {props.changedIP}/>;
			break;
		case('select'):
			inputElement = <select className = {inputClasses} value = {props.value} onChange = {props.changedIP}>
				{props.elementConfig.options.map(opt => (
						<option key = {opt.value} value = {opt.value}>
							{opt.displayValue}
						</option>
						))}
			</select>;
			break;
		default:
			inputElement = <input className={ip.InputElement} {...props.elementConfig} value = {props.value} />;		
	}

	return (
		<div className = {ip.Input}>
			<label className = {ip.label}>{props.label}</label>
			{inputElement}
			{validationError}
		</div>
	);
}
export default input;