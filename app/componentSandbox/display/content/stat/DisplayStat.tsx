import React, { ReactNode } from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import styles from './DisplayStat.module.css';

type DisplayStatProps = {
	children: ReactNode;
	className?: string;
	fontSize?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
};

export const DisplayStat: React.FC<DisplayStatProps> = ({
	children,
	className,
	fontSize = 'm',
}) => {
	const { style, disable } = useDisplayRootContext();

	if (!children) return null;
	return (
		<div
			className={`${className ?? styles.stat}`}
			data-disabled={disable}
			data-style={style}
			data-font-size={fontSize}
		>
			{children}
		</div>
	);
};
