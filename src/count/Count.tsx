
import React, { useState } from 'react';
import { Control } from './control';

const Count = (props: any) => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Control count={count} onChange={(n) => setCount(n)} />
		</div>
	)
}
export default Count;