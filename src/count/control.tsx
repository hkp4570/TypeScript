import React from 'react';
interface IProps {
	count: number,
	onChange: (n: number) => void
}

export const Control: React.FC<IProps> = (props: IProps) => {
	return (
		<div>
			<button onClick={() => {
				if (props.onChange) {
					props.onChange(props.count + 1)
				}
			}}>+</button>
			<div>{props.count}</div>
			<button onClick={() => {
				if (props.onChange) {
					props.onChange(props.count - 1)
				}
			}}>-</button>
		</div>
	)
}