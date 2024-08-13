// React core
import React, { ReactNode, useCallback } from 'react';
// External modules / Third-party libraries
// Local components
// Hooks and utilities
// Configuration
// Styles
import styles from './TAlert.module.css';

export interface AlertProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	field?: string;
	message?: string;
	variant?: 'success' | 'warning' | 'danger' | 'info';
	shadow?: boolean;
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
	children: ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
	onClose,
	field,
	message,
	variant,
	borderRadius,
	shadow,
	className,
	children,
	...props
}) => {
	// Renders the icon based on the variant
	const renderIcon = useCallback(() => {
		switch (variant) {
			case 'success':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
							d='M20 6L9 17l-5-5'
						/>
					</svg>
				);
			case 'warning':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
							d='m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01'
						/>
					</svg>
				);
			case 'danger':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 24 24'
					>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
							d='M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86zM12 8v4m0 4h.01'
						/>
					</svg>
				);
			case 'info':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 24 24'
					>
						<g
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1.8'
						>
							<circle cx='12' cy='12' r='10' />
							<path d='M12 16v-4m0-4h.01' />
						</g>
					</svg>
				);
			default:
				return null;
		}
	}, [variant]);

	// Handles the click event
	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			if (onClose) {
				onClose(e);
			}
		},
		[onClose],
	);

	return (
		<button
			type='button'
			onClick={handleClick}
			data-variant={variant}
			data-border-radius={borderRadius}
			data-shadow={shadow}
			className={`${styles.alert} ${className || ''}`}
			{...props}
		>
			<div>{renderIcon()}</div>
			<div>{children}</div>
		</button>
	);
};
