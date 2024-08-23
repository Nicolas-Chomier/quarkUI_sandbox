import React, { ReactNode } from 'react';
import { useDisplayRootContext } from '../../DisplayRoot';
import { useDisplayContentContext } from '../DisplayContent';
import styles from './DisplayText.module.css';

type DisplayTextProps = { children: ReactNode; className?: string };

export const DisplayText: React.FC<DisplayTextProps> = ({
	children,
	className,
}) => {
	// const { xxx } = useDisplayContentContext();
	const { width } = useDisplayRootContext();

	console.log(width);
	if (!children) return null;
	return (
		<div className={`${className} ${styles.text}`} data-width={width}>
			{children}
		</div>
	);
};
