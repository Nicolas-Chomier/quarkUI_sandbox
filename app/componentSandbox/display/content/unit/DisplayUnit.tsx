import React, { ReactNode } from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import styles from './DisplayUnit.module.css';

type DisplayUnitProps = { children: ReactNode; className?: string };

export const DisplayUnit: React.FC<DisplayUnitProps> = ({
	children,
	className,
}) => {
	const { width } = useDisplayRootContext();

	console.log(width);

	return (
		<div className={`${className} ${styles.unit}`} data-width={width}>
			{children}
		</div>
	);
};
