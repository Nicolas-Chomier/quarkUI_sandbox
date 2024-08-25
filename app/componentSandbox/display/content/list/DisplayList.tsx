/* 
import React from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import styles from './DisplayList.module.css';
 */
/* type DisplayListProps = {
	className?: string;
	fontSize?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
	data?: Record<string, string | number | boolean>;
	keyVariant?: 'bold' | 'italic';
}; */

/* export const DisplayList: React.FC<DisplayListProps> = ({
	className,
	fontSize = 'm',
	data,
	keyVariant,
}) => {
	const { disable, width } = useDisplayRootContext();

	if (!data || Object.keys(data).length === 0) return null;

	return (
		<div
			className={className ?? styles.list}
			data-disabled={disable}
			data-width={width}
			data-key-variant={keyVariant}
			data-font-size={fontSize}
		>
			{Object.entries(data).map(([key, value]) => (
				<div key={key} className={styles.items}>
					<span className={styles.key}>{key}</span>
					<span className={styles.value}>{`${value}`}</span>
				</div>
			))}
		</div>
	);
}; */

import React, { createContext, ReactNode, useContext } from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import { DisplayIcon } from '../icon/DisplayIcon';
import { DisplayUnit } from '../unit/DisplayUnit';
import styles from './DisplayList.module.css';

type DisplayListProps = {
	data?: Record<string, string | number | boolean>;
	children?: ReactNode;
	className?: string;
	direction?: 'column' | 'column-reverse';
};

type DisplayListComponent = React.FC<DisplayListProps> & {
	Icon: typeof DisplayIcon;
	Unit: typeof DisplayUnit;
};

const DisplayListContext = createContext<DisplayListProps | undefined>(
	undefined,
);

// Composant principal
export const DisplayList: DisplayListComponent = ({
	data,
	children,
	direction = 'column',
	className,
}) => {
	const { style, disable, width, borderRadius } = useDisplayRootContext();

	// Pas de contexte pour le moment
	const contextValue = undefined;

	if (!data || Object.keys(data).length === 0) return null;
	return (
		<DisplayListContext.Provider value={contextValue}>
			<div
				className={`${className ?? styles.list}`}
				data-direction={direction}
				data-border-radius={borderRadius}
				data-disabled={disable}
				data-style={style}
				data-width={width}
			>
				{Object.entries(data).map(([key, value]) => (
					<div key={`DisplayList-${key}`} className={styles.items}>
						<span>{children}</span>
						<span className={styles.key}>{key}:</span>
						<span className={styles.value}>{`${value}`}</span>
					</div>
				))}
			</div>
		</DisplayListContext.Provider>
	);
};

DisplayList.Icon = DisplayIcon;
DisplayList.Unit = DisplayUnit;

// Hook de securité évitant l'utilisation des composants Display sans le contexte
export const useDisplayListContext = () => {
	const context = useContext(DisplayListContext);
	if (context === undefined) {
		throw new Error(
			'Bad context usage: useDisplayListContext must be used within a DisplayList',
		);
	}
	return context;
};
