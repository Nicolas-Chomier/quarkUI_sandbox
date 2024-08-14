// React core
import React, { useState, useEffect } from 'react';
// External modules / Third-party libraries
// Local components

// Hooks and utilities
// Configuration
// Styles
import styles from './TBasicSelect.module.css';
import { Label } from 'quark';

type TBasicSelectProps = {
	name: string;
	label: string;
	placeholder: string;
	data: string[];
	value?: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	variant?: 'theme' | 'accent' | 'simple' | 'outline' | 'fade' | 'ghost';
};

export const TBasicSelect: React.FC<TBasicSelectProps> = ({
	name,
	label,
	placeholder,
	data,
	value,
	onChange,
	variant,
	disabled = false,
}) => {
	const [selectedValue, setSelectedValue] = useState<string>(value || '');

	useEffect(() => {
		setSelectedValue(value || '');
	}, [value]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;
		setSelectedValue(newValue);
		onChange(newValue);
	};

	return (
		<div className={styles.container}>
			<Label
				htmlFor={name}
				text={label}
				textAlign='left'
				offsetLeft='4'
				fontWeight='normal'
				fontSize='l'
			>
				<select
					name={name}
					id={`${name}-select`}
					value={selectedValue}
					onChange={handleChange}
					disabled={disabled}
					data-variant={variant}
					className={styles.basicSelect}
				>
					<option value=''>{placeholder}</option>
					{data.map((item: string) => (
						<option value={item} key={item}>
							{item}
						</option>
					))}
				</select>
			</Label>
		</div>
	);
};
