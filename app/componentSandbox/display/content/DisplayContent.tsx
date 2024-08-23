import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { DisplayIcon } from './icon/DisplayIcon';
import { DisplayText } from './text/DisplayText';
import { DisplayUnit } from './unit/DisplayUnit';
import styles from './DisplayContent.module.css';

type DisplayContentProps = {
	children: ReactNode;
	className?: string;
	direction?: 'row' | 'row-reverse';
};

type DisplayContentComponent = React.FC<DisplayContentProps> & {
	Icon: typeof DisplayIcon;
	Text: typeof DisplayText;
	Unit: typeof DisplayUnit;
};

const DisplayContentContext = createContext<DisplayContentProps | undefined>(
	undefined,
);

// Composant principal
export const DisplayContent: DisplayContentComponent = ({
	children,
	className = '',
}) => {
	const contextValue = useMemo(
		() => ({ children, className }),
		[children, className],
	);

	if (!children) return null;

	return (
		<DisplayContentContext.Provider value={contextValue}>
			<div className={`${styles.displayContent} ${className}`}>
				{children}
			</div>
		</DisplayContentContext.Provider>
	);
};

DisplayContent.Icon = DisplayIcon;
DisplayContent.Text = DisplayText;
DisplayContent.Unit = DisplayUnit;

// Hook de securité évitant l'utilisation des composants Display sans le contexte
export const useDisplayContentContext = () => {
	const context = useContext(DisplayContentContext);
	if (context === undefined) {
		throw new Error(
			'Bad context usage: useDisplayContentContext must be used within a DisplayContent',
		);
	}
	return context;
};
