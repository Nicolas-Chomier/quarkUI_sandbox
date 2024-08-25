import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { DisplayLabel } from './label/DisplayLabel';
import { DisplayContent } from './content/DisplayContent';
import { DisplayList } from './content/list/DisplayList';
import styles from './DisplayRoot.module.css';

type DisplayProps = {
	width?: 's' | 'm' | 'l' | 'xl' | '25' | '50' | '75' | '100';
	borderRadius?:
		| 'xxxs'
		| 'xxs'
		| 'xs'
		| 's'
		| 'm'
		| 'l'
		| 'xl'
		| 'xxl'
		| 'xxxl'
		| 'full';
	style?:
		| 'success'
		| 'warning'
		| 'danger'
		| 'infos'
		| 'outline'
		| 'fade'
		| 'ghost';
	disable?: boolean;
	children: ReactNode;
	className?: string;
};

type DisplayComponent = React.FC<DisplayProps> & {
	Label: typeof DisplayLabel;
	Content: typeof DisplayContent;
	List: typeof DisplayList;
};

const DisplayRootContext = createContext<DisplayProps | undefined>(undefined);

// Composant principal
export const DisplayRoot: DisplayComponent = ({
	width,
	style,
	borderRadius,
	disable,
	children,
	className,
}) => {
	const contextValue = useMemo(
		() => ({ width, style, disable, children, className, borderRadius }),
		[width, style, disable, children, className, borderRadius],
	);

	if (!children) return null;

	return (
		<DisplayRootContext.Provider value={contextValue}>
			<div
				className={`${className ?? styles.displayRoot}`}
				data-width={width}
			>
				{children}
			</div>
		</DisplayRootContext.Provider>
	);
};

DisplayRoot.Label = DisplayLabel;
DisplayRoot.Content = DisplayContent;
DisplayRoot.List = DisplayList;

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
