import React, { useEffect, useState } from "react";
import SecondCounter from "./SecondCounter";
import Buttons from "./Buttons";


const Home = () => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [isCountdown, setIsCountdown] = useState(false);
	const [countdownValue, setCountdownValue] = useState(0);


	// Formato de 6 digitos
	const sixDigitsFormat = (count) => {
		const formatoContador = count.toString().padStart(6, "0");
		return formatoContador.split('');
	}


	// Contador
	useEffect(() => {
		if (isRunning) {
			const interval = setInterval(() => {
				setCount(prevCount => {
					// Si es cuenta regresiva, resta el valor
					if (isCountdown) {
						if (prevCount > 0) {
							return prevCount - 1;
						} else {
							clearInterval(interval);
							setIsRunning(false);
							setIsCountdown(false); // Detener cuenta regresiva
							return 0;
						}
					}
					// Si no es cuenta regresiva, incrementa el valor
					return prevCount + 1;
				});
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [isRunning, isCountdown]);


	// Funciones de los botones
	const restartCount = () => {
		setCount(0);
		setIsCountdown(false);
		setIsRunning(true);
	}

	const stopCount = () => {
		setIsRunning(false);
	}

	const resumeCount = () => {
		setIsRunning(true);
	}


	// Función para manejar el input
	const handleCountdownChange = (e) => {
		setCountdownValue(e.target.value);
	}
	// Iniciar regresiva
	const startCountdown = () => {
		setCount(countdownValue);
		setIsCountdown(true);
		setIsRunning(true);
	}

	return (
		<>
			<div className="card container border border-0 bg-black mt-5 rounded-5">
				<div className="card-body">
					<h1 className="text-white text-center mt-4"> Simple Counter </h1>

					<SecondCounter digits={sixDigitsFormat(count)} />

					<Buttons
						restartCount={restartCount}
						stopCount={stopCount}
						resumeCount={resumeCount}
					/>

					<h5 className="text-white text-center mt-4 mb-3">Cuenta Regresiva</h5>
					<div className="container d-flex justify-content-center mb-5">
						<input
							type="number"
							className="form-control me-2"
							placeholder="Ingrese una cantidad en segundos"
							style={{ width: "40vw" }}
							onChange={handleCountdownChange}
						/>
						<button
							className="btn btn-outline-secondary text-light"
							type="button"
							onClick={startCountdown}
						>
							Iniciar
						</button>
					</div>


				</div>
			</div>
		</>
	);
};

export default Home;
