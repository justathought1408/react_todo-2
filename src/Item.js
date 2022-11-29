import { RiDeleteBin2Fill, RiCheckFill, RiCloseFill } from "react-icons/ri";
import {useState} from 'react'


export const Item = ({item, index, deleteHandler, count, setCount, compCount, setCompCount}) => {
	const [isBlue, setIsBlue] = useState(true)
	return (
		<div className={isBlue?"blue_row":"green_row"}>
			<div className="Item__item" item={item}>{item}</div>
			<div>
				<RiCheckFill className={isBlue ? "icon" : "icon-cancel"} onClick={() => {
					setIsBlue(!isBlue);
					isBlue ? setCompCount(compCount + 1) : setCompCount(compCount - 1)
				}}/>
				<RiCloseFill className={isBlue ? "icon-cancel" : "icon"} onClick={() => {
					setIsBlue(!isBlue);
					isBlue ? setCompCount(compCount + 1) : setCompCount(compCount - 1)
				}}/>
				<RiDeleteBin2Fill className="icon" index={index} onClick={() => {
					deleteHandler(index);
					setCount(count - 1);
					(compCount > 0) ? setCompCount(compCount - 1) : setCompCount(0);
				}}/>
			</div>
		</div>
		)
} 