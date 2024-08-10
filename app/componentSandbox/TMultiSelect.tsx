import React, {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
} from 'react';

import styles from './TMultiSelect.module.css';
import { Badge, Flex, IconButton, Input, Label, useClickOutside } from 'quark';

export type MultiSelectProps = {
	onFieldChange: (result: string[] | undefined) => void;
	data: string[];
	placeholder: string;
	label: string;
	name: string;
	isValid?: boolean;
	isError?: boolean;
	isLoading?: boolean;
	isDisable?: boolean;
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
	scrollbar?: boolean;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
	onFieldChange,
	data,
	label,
	placeholder,
	name,
	isError,
	isLoading,
	isValid,
	isDisable,
	variant,
	scrollbar,
}) => {
	const [newVariant, setNewVariant] = useState(variant);
	const [inputValue, setInputValue] = useState('');
	const [open, setOpen] = useState(false);
	const [itemList, setItemList] = useState<string[]>([]);
	const clickRef = useRef(null);

	// Render appropriate icon based on component state
	const renderContent = () => {
		if (isDisable) return null;
		if (isError)
			return (
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
						d='M18 6L6 18M6 6l12 12'
					/>
				</svg>
			);
		if (inputValue && !isValid)
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
				>
					<path
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.8'
						d='M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6'
					/>
				</svg>
			);
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
			>
				<g
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.8'
				>
					<circle cx='11' cy='11' r='8' />
					<path d='m21 21l-4.3-4.3' />
				</g>
			</svg>
		);
	};

	// Close dropdown when clicking outside
	useClickOutside(clickRef, () => setOpen(false));

	// Remove duplicates from data
	const cleanData = useMemo(
		() => (data ? Array.from(new Set(data)) : []),
		[data],
	);

	// Filter data based on input value
	const filteredData = useMemo(
		() =>
			cleanData.filter((item) =>
				item.toLowerCase().includes(inputValue.toLowerCase()),
			),
		[inputValue, cleanData],
	);

	// Dynamic placeholder based on itemList content
	const dynamicPlaceholder = useMemo(() => {
		if (itemList.length === 0) return undefined;
		if (itemList.length === 1) return `${itemList[0]}`;
		return `${itemList.length} éléments.`;
	}, [itemList]);

	// Handle input change
	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setInputValue(newValue);
		},
		[],
	);

	// Clear input and selected items
	const handleDelete = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation();
			setInputValue('');
			setItemList([]);
			onFieldChange(undefined);
			setOpen(false);
		},
		[onFieldChange],
	);

	// Remove selected badge
	const removeBadge = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			console.log('click');
			e.stopPropagation();
			const target = e.target as HTMLButtonElement;
			const item = target.textContent;
			const newList = itemList.filter((value) => value !== item);
			setItemList(newList);
			onFieldChange(newList.length > 0 ? newList : undefined);
		},
		[itemList, onFieldChange],
	);

	// Select or deselect an item
	const handleSelect = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>, item: string) => {
			e.stopPropagation();
			const newList = itemList.includes(item)
				? itemList.filter((value) => value !== item)
				: [...itemList, item];
			setItemList(newList);
			onFieldChange(newList.length > 0 ? newList : undefined);
		},
		[itemList, onFieldChange],
	);

	// Disable component and clear values
	useEffect(() => {
		if (isDisable) {
			setInputValue('');
			setItemList([]);
			onFieldChange(undefined);
			setOpen(false);
		}
	}, [isDisable, onFieldChange]);

	// Update variant based on component state
	useEffect(() => {
		setNewVariant(isError ? 'danger' : isValid ? 'success' : variant);
	}, [isError, isValid, variant]);

	return (
		<div className={styles.container} ref={clickRef}>
			<Label
				htmlFor={name}
				text={label}
				textAlign='left'
				offsetLeft='4'
				fontWeight='normal'
				fontSize='l'
			>
				<div className={styles.field}>
					<Input
						type={'text'}
						onChange={handleInputChange}
						onClick={() => setOpen(!open)}
						name={name}
						value={inputValue}
						placeholder={dynamicPlaceholder ?? placeholder}
						disabled={isDisable}
						width='s'
						borderRadius='m'
					/>

					<IconButton
						onClick={(e) => handleDelete(e)}
						type={'button'}
						variant={newVariant}
						size='m'
						borderRadius='m'
						disabled={isDisable}
						loading={isLoading}
					>
						{renderContent()}
					</IconButton>
				</div>
			</Label>

			{data && (
				<div className={styles.panel}>
					<div className={styles.scrollablePanelItemList}>
						<Flex
							direction='row'
							align='center'
							justify='center'
							gap='2xs'
							wrap={'wrap'}
						>
							{itemList.map((str: string) => {
								return (
									<Flex
										key={`badge-${str}`}
										pt='1'
										pb='3'
										pl='1'
										pr='1'
									>
										<Badge
											color='theme'
											variant='solid'
											size='medium'
											borderRadius='l'
											clickable
											onClick={(e: any) => removeBadge(e)}
										>
											{str}
										</Badge>
									</Flex>
								);
							})}
						</Flex>
					</div>
					<div
						data-scrollbar={scrollbar}
						className={`${styles.itemPanel} ${
							open ? styles.itemPanelOpen : ''
						}`}
					>
						<Flex
							gap={'3xs'}
							direction='column'
							align='center'
							justify='center'
						>
							{filteredData.map((str: string) => {
								return (
									<button
										onClick={(e) => handleSelect(e, str)}
										type={'button'}
										key={`multiselect-item-${str}`}
										className={styles.customButton}
									>
										{str.toLowerCase()}
									</button>
								);
							})}
						</Flex>
					</div>
				</div>
			)}
		</div>
	);
};
