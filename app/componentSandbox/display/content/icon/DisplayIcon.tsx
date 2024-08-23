import React, { useMemo } from 'react';
import styles from './DisplayIcon.module.css';

type DisplayIconProps = {
	className?: string;
	children?: React.ReactNode;
	icon?: 'info' | 'warning' | 'danger';
	size?: number;
};

export const DisplayIcon: React.FC<DisplayIconProps> = ({
	className = '',
	children,
	icon,
	size = 28,
}) => {
	const renderIcon = useMemo(() => {
		switch (icon) {
			case 'info':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={size}
						height={size}
						viewBox={`0 0 24 24`}
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
			case 'warning':
				return (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={size}
						height={size}
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
						width={size}
						height={size}
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
							<path d='m15 9l-6 6m0-6l6 6' />
						</g>
					</svg>
				);
			default:
				return children ?? null;
		}
	}, [children, icon, size]);

	return <div className={`${className} ${styles.icon}`}>{renderIcon}</div>;
};
