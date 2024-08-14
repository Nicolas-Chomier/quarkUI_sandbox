import React, { useCallback, useState } from 'react';
import { IconButton } from 'quark';
import styles from './TFlags.module.css';

type FlagsProps = {
	onClick?: (language: string) => void;
	languages?: string[];
	variant?:
		| 'theme'
		| 'accent'
		| 'simple'
		| 'outline'
		| 'fade'
		| 'ghost'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger';
	size?: 's' | 'm' | 'l';
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
};

export const TFlags: React.FC<FlagsProps> = ({
	onClick,
	languages,
	variant,
	size,
	borderRadius,
}) => {
	const [openPanel, setOpenPanel] = useState(false);

	// Handles the click event
	const handleLanguageClick = useCallback(
		(language: string) => {
			if (onClick) {
				onClick(language);
			}
			setOpenPanel(false);
		},
		[onClick],
	);

	if (!languages) return null;
	return (
		<div className={styles.languageContainer}>
			<IconButton
				variant={variant}
				size={size}
				borderRadius={borderRadius}
				onClick={() => setOpenPanel(!openPanel)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					viewBox='0 0 24 24'
				>
					<path
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6'
					/>
				</svg>
			</IconButton>
			{openPanel && (
				<div className={styles.panel}>
					{languages?.map((language: string, index: number) => (
						<button
							onClick={() => handleLanguageClick(language)}
							key={`ButtonLanguage-${language}`}
							data-variant={variant}
							data-size={size}
							data-border-radius={borderRadius}
							style={{ '--index': index } as React.CSSProperties}
							className={styles.flags}
						>
							{language}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
