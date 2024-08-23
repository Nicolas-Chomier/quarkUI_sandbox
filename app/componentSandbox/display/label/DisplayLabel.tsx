import React from 'react';
import { useDisplayRootContext } from '../DisplayRoot';
import styles from './DisplayLabel.module.css';

type Offset =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| '16'
	| '17'
	| '18'
	| '19'
	| '20';

type DisplayLabelProps = {
	children: React.ReactNode;
	className?: string;
	align?: 'left' | 'center' | 'right';
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
	offsetLeft?: Offset;
	offsetRight?: Offset;
	color?:
		| 'theme'
		| 'accent'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'transparent';
};

export const DisplayLabel: React.FC<DisplayLabelProps> = ({
	children,
	className,
	align,
	fontSize,
	fontWeight,
	offsetLeft,
	offsetRight,
	color,
}) => {
	const { width, disable } = useDisplayRootContext();

	if (!children) return null;
	return (
		<div
			className={`${className} ${styles.label}`}
			data-width={width}
			data-align={align}
			data-font-size={fontSize}
			data-font-weight={fontWeight}
			data-offset-left={offsetLeft}
			data-offset-right={offsetRight}
			data-color={color}
			data-disabled={disable}
		>
			{children}
		</div>
	);
};
