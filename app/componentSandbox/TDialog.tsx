import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './TDialog.module.css';

export interface DialogProps
	extends React.DialogHTMLAttributes<HTMLDialogElement> {
	id: string;
	isOpen?: boolean;
	background?: boolean;
	padding?: 's' | 'm' | 'l';
	shadow?: boolean;
	children?: ReactNode;
	className?: string;
}

export const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	(
		{
			id,
			isOpen,
			background,
			padding,
			shadow,
			className,
			children,
			...props
		},
		ref,
	) => {
		const dialogRef = useRef<HTMLDialogElement>(null);

		useEffect(() => {
			const dialogElement = ref
				? (ref as React.RefObject<HTMLDialogElement>).current
				: dialogRef.current;

			if (isOpen) {
				dialogElement?.showModal();
			} else {
				dialogElement?.close();
			}
		}, [isOpen, ref]);

		return (
			<dialog
				id={`u-dialog-${id}`}
				ref={ref || dialogRef}
				data-background={background}
				data-box-shadow={shadow}
				data-padding={padding}
				className={`${styles.dialog} ${className || ''}`}
				{...props}
			>
				{children}
			</dialog>
		);
	},
);

Dialog.displayName = 'Dialog';
