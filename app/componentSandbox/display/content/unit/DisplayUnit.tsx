import React from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import styles from './DisplayUnit.module.css';

type DisplayUnitProps = {
	children: string;
	className?: string;
	variant?:
		| 'theme'
		| 'accent'
		| 'infos'
		| 'warning'
		| 'danger'
		| 'bold'
		| 'italic';
	fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
};

export const DisplayUnit: React.FC<DisplayUnitProps> = ({
	children,
	className,
	variant,
	fontSize,
}) => {
	const { disable, style } = useDisplayRootContext();

	return (
		<div
			className={`${className ?? styles.unit}`}
			data-disabled={disable}
			data-variant={style ?? variant}
			data-font-size={fontSize}
		>
			{children}
		</div>
	);
};
