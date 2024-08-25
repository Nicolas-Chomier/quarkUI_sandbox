import React, { ReactNode } from 'react';
import { useDisplayRootContext } from '../../../DisplayRoot';
import styles from './DisplayListItems.module.css';

type DisplayListItemsProps = {
	className?: string;
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	align?: 'left' | 'center' | 'right';
	justify?: 'left' | 'right';
};

export const DisplayListItems: React.FC<DisplayListItemsProps> = ({
	className,
	fontSize = 'm',
	justify,
	align,
}) => {
	const { disable } = useDisplayRootContext();

	return (
		<div
			className={`${className ?? styles.text}`}
			data-disabled={disable}
			data-font-size={fontSize}
			data-justify={justify}
			data-align={align}
		></div>
	);
};
