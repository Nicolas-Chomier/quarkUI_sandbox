import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { DisplayLabel } from './label/DisplayLabel';
import { DisplayContent } from './content/DisplayContent';
import styles from './DisplayRoot.module.css';

type DisplayProps = {
	width?: 's' | 'm' | 'l' | 'xl' | '25' | '50' | '75' | '100';
	disable?: boolean;
	children: ReactNode;
	className?: string;
};

type DisplayComponent = React.FC<DisplayProps> & {
	Label: typeof DisplayLabel;
	Content: typeof DisplayContent;
};

const DisplayRootContext = createContext<DisplayProps | undefined>(undefined);

// Composant principal
export const DisplayRoot: DisplayComponent = ({
	width,
	disable,
	children,
	className = '',
}) => {
	const contextValue = useMemo(
		() => ({ width, disable, children, className }),
		[width, disable, children, className],
	);

	if (!children) return null;

	return (
		<DisplayRootContext.Provider value={contextValue}>
			<div className={`${styles.displayRoot} ${className}`}>
				{children}
			</div>
		</DisplayRootContext.Provider>
	);
};

DisplayRoot.Label = DisplayLabel;
DisplayRoot.Content = DisplayContent;

// Hook de securité évitant l'utilisation des composants Display sans le contexte
export const useDisplayRootContext = () => {
	const context = useContext(DisplayRootContext);
	if (context === undefined) {
		throw new Error(
			'Bad context usage: useDisplayRootContext must be used within a DisplayRoot',
		);
	}
	return context;
};
