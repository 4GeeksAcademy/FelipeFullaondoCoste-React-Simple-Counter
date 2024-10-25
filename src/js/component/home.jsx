import React, { useEffect, useState } from "react";
import SecondCounter from "./SecondCounter";


const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count + 1);
		}, 500);
		return () => clearInterval(interval);
	}, [count]
	)

	const sixDigitsFormat = (count) => {
		const formatoContador = count.toString().padStart(6, "0");
		return formatoContador.split('');
	}

	return (
		<>
			<SecondCounter digits={sixDigitsFormat(count)} />
		</>
	);
};

export default Home;
