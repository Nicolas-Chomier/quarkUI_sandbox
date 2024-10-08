import React, { ReactNode } from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import styles from './DisplayText.module.css';

type DisplayTextProps = {
	children: ReactNode;
	className?: string;
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	align?: 'left' | 'center' | 'right';
	justify?: 'left' | 'right';
};

export const DisplayText: React.FC<DisplayTextProps> = ({
	children,
	className,
	fontSize = 'm',
	justify,
	align,
}) => {
	// const { xxx } = useDisplayContentContext();
	const { style, disable } = useDisplayRootContext();

	if (!children) return null;
	return (
		<div
			className={`${className ?? styles.text}`}
			data-disabled={disable}
			data-style={style}
			data-font-size={fontSize}
			data-justify={justify}
			data-align={align}
		>
			{children}
		</div>
	);
};
