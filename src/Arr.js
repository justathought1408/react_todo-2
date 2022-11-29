import {Item} from './Item.js'

export const Arr = ({array, deleteHandler, count, setCount, compCount, setCompCount}) => {
	return array.map((item, index) => 
		<Item compCount={compCount} setCompCount={setCompCount} deleteHandler={deleteHandler} count={count} setCount={setCount} key={index} item={item} index={index}/>)
}