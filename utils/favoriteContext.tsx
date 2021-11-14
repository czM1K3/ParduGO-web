import React, { FC, createContext, useState, useContext, useEffect } from "react";

const localStorageName = "favorite";

const FavoriteContext = createContext<any>(null);

export const FavoriteProvider: FC = ({ children }) => {
	const [state, setState] = useState<string[]>([]);

	useEffect(() => {
		const tmp = localStorage.getItem(localStorageName);
		if (tmp) {
			try {
				const parsedTmp = JSON.parse(tmp);
				if (parsedTmp) setState(parsedTmp);
			} catch {}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(localStorageName, JSON.stringify(state));
	}, [state]);

	return (
		<FavoriteContext.Provider value={{state, setState}}>
			{children}
		</FavoriteContext.Provider>
	);
}

export const useFavorite = (): [
	string[],
	React.Dispatch<React.SetStateAction<string[]>>
] => {
	const context = useContext(FavoriteContext);
	return [context.state, context.setState];
}