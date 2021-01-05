/** @format */

import React from 'react';
import SlotM from './Cards';

const App = () => {
	return (
		<>
			<h1 className='heading'>
				Welcome To ❤️
				<span
					style={{
						fontWeight: 'bold',
					}}>
					Slot Machine game
				</span>
			</h1>
			<div className='slot-matchine'>
				<SlotM x=' 👍 ' y=' 👎 ' z=' ❤️ ' />
				<SlotM x=' 👍' y=' 👍 ' z=' 👍 ' />
				<SlotM x=' 🙉 ' y=' ❤️ ' z=' 🌹 ' />
			</div>
		</>
	);
};

export default App;
