import {useState} from 'react';

export const Form = ({array, setArray, count, setCount}) => {
	const [text, setText] = useState('')
	return (
			<form className="Form__form" action="#" onSubmit={(event) => {
				event.preventDefault();
				setText('');
				text && setArray([...array, text])
				text && setCount(array.length + 1)
			}}>
				<input type="text" value={text} onChange={(event) => {
					setText(event.target.value)
				}}/>
				<button>Add</button>
			</form>
		)
}