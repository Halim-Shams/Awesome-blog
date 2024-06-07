import React, {useContext, useState, useEffect} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [darkTheme, setDarkTheme] = useState(false);
	const [loading, setLoading] = useState(true);
	const [database, setDatabase] = useState([]);

	const themeToggler = () => {
		const switchOn = new Audio('/switch-on.wav');
		const switchOff = new Audio('/switch-off.wav');

		if (darkTheme) {
			switchOff.play();
		} else {
			switchOn.play();
		}

		setDarkTheme(!darkTheme);
		document.body.classList.toggle('dark');
	};

	const fetchDatabase = async () => {
		setLoading(true);
		const response = await fetch(import.meta.env.VITE_API);
		const data = await response.json();
		setDatabase(data.data);
		setLoading(false);
	};

	useEffect(() => {
		fetchDatabase();
	}, []);

	return (
		<AppContext.Provider value={{loading, database, darkTheme, themeToggler}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export {AppContext, AppProvider};
