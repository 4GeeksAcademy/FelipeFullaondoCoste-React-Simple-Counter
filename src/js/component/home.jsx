import React, { useEffect, useState } from "react";
import SecondCounter from "./SecondCounter";
import Buttons from "./Buttons";


const Home = () => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setCount(count + 1);
			}, 500);
			return () => clearInterval(interval);
		}
	}, [count]
	)

	const stopCount = () => {
		setIsRunning(false);
	}

	const resumeCount = () => {
		setIsRunning(true);
	}




	const sixDigitsFormat = (count) => {
		const formatoContador = count.toString().padStart(6, "0");
		return formatoContador.split('');
	}

	return (
		<>
			<div className="card container border border-0 bg-black mt-5 rounded-5">
				<div className="card-body">

					<SecondCounter digits={sixDigitsFormat(count)} />
					<Buttons
						//pauseCount={pauseCount}
						stopCount={stopCount}
						resumeCount={resumeCount}
					/>

				</div>
			</div>
		</>
	);
};

export default Home;
