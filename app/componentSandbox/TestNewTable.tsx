/* import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FallBack, Spinner } from 'quark';

import styles from './TestNewTable.module.css';

type TableData = {
	id: number;
	[key: string]: any;
};

export type TestTableProps = {
	data: TableData[];
	rowsPerPage?: number;
	allowSelection?: 'single' | 'multiple';
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	isLoading?: boolean;
	error?: boolean;
	onRowsSelect: (selectedRows: TableData[]) => void;
};

export const TestNewTable: React.FC<TestTableProps> = ({
	data = [],
	rowsPerPage = 5,
	allowSelection,
	size,
	isLoading,
	error,
	onRowsSelect,
}) => {
	// State for selected rows and current page
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	// State for checkbox
	const [allRowsSelected, setAllRowsSelected] = useState(false);

	// Calculate pagination details
	const totalPages = Math.ceil(data.length / rowsPerPage);
	const startIndex = (currentPage - 1) * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const currentData = data.slice(startIndex, endIndex);

	const columns = useMemo(() => {
		if (data.length === 0) return [];
		const columnKeys = Object.keys(data[0]);
		return columnKeys.map((key) => ({
			key,
			header: key.toUpperCase(),
		}));
	}, [data]);

	// Row selection handler
	const handleRowSelection = useCallback(
		(selectedIds: number[]) => {
			const selectedData = data.filter((row) =>
				selectedIds.includes(row.id),
			);
			onRowsSelect(selectedData);
		},
		[data, onRowsSelect],
	);

	// Toggle selection of a single row
	const toggleRow = useCallback(
		(id: number) => {
			if (allowSelection === 'single') {
				setSelectedRows([id]);
				handleRowSelection([id]);
			} else {
				setSelectedRows((prev) => {
					const newSelection = prev.includes(id)
						? prev.filter((rowId) => rowId !== id)
						: [...prev, id];
					handleRowSelection(newSelection);
					return newSelection;
				});
			}
		},
		[allowSelection, handleRowSelection],
	);

	// Toggle all rows
	const toggleAll = useCallback(() => {
		if (allowSelection === 'single') {
			setSelectedRows([]);
			handleRowSelection([]);
		} else {
			const currentIds = currentData.map((row) => row.id);
			setSelectedRows((prev) => {
				let newSelection;
				if (prev.length >= currentIds.length) {
					setAllRowsSelected(false);
					newSelection = prev.filter(
						(id) => !currentIds.includes(id),
					);
				} else {
					setAllRowsSelected(true);
					newSelection = [...new Set([...prev, ...currentIds])];
				}
				handleRowSelection(newSelection);
				return newSelection;
			});
		}
	}, [allowSelection, currentData, handleRowSelection]);

	// Change the current page
	const changePage = useCallback((page: number) => {
		setCurrentPage(page);
	}, []);

	// Manage icon state when all rows are selected or not
	useEffect(() => {
		const currentIds = currentData.map((row) => row.id);
		if (selectedRows.length === currentIds.length) {
			setAllRowsSelected(true);
		} else {
			setAllRowsSelected(false);
		}
	}, [currentData, selectedRows]);

	if (!isLoading && (data.length === 0 || error))
		return (
			<FallBack
				width='l'
				borderRadius='s'
				message='No rows to display.'
			/>
		);

	return (
		<div className={styles.tableContainer}>
			<table className={styles.table} data-width={size}>
				{isLoading ? (
					<thead className={styles.tableThead}>
						<tr>
							<th
								className={styles.tableTheadCell}
								colSpan={
									columns.length + (allowSelection ? 1 : 0)
								}
							></th>
						</tr>
					</thead>
				) : (
					<thead className={styles.tableThead}>
						<tr>
							{allowSelection ? (
								<th className={styles.tableTheadCell}>
									<button
										className={styles.checkbox}
										onClick={toggleAll}
									>
										{allRowsSelected ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 24 24'
												color='var(--table-X-icon-color)'
											>
												<path
													fill='none'
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='3.6'
													d='M18 6L6 18M6 6l12 12'
												/>
											</svg>
										) : (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='14'
												height='14'
												viewBox='0 0 24 24'
											>
												<path
													fill='none'
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='3.6'
													d='M20 6L9 17l-5-5'
												/>
											</svg>
										)}
									</button>
								</th>
							) : null}

							{columns.map((column) => (
								<th
									className={styles.tableTheadCell}
									key={column.key}
								>
									{column.header}
								</th>
							))}
						</tr>
					</thead>
				)}

				{isLoading ? (
					<tbody className={styles.loadingTBody}>
						<tr className={styles.loadingTBodyRow}>
							<td
								className={styles.loadingTBodyCell}
								colSpan={
									columns.length + (allowSelection ? 1 : 0)
								}
							>
								<Spinner size='xl' />
							</td>
						</tr>
					</tbody>
				) : (
					<tbody className={styles.tableTBody}>
						{currentData.map((row) => (
							<tr
								className={styles.tableTBodyRow}
								key={row.id}
								data-allow-selection={allowSelection}
								data-selected={selectedRows.includes(row.id)}
								onClick={() => toggleRow(row.id)}
							>
								{allowSelection ? (
									<td className={styles.tableTBodyCell}>
										<span className={styles.checkbox}>
											{selectedRows.includes(row.id) ? (
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='14'
													height='14'
													viewBox='0 0 24 24'
												>
													<path
														fill='none'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='3.6'
														d='M20 6L9 17l-5-5'
													/>
												</svg>
											) : null}
										</span>
									</td>
								) : null}

								{columns.map((column) => (
									<td
										className={styles.tableTBodyCell}
										key={column.key}
									>
										{row[column.key]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				)}
			</table>
			<footer className={styles.pagination}>
				<button
					className={styles.paginationButton}
					onClick={() => changePage(1)}
					disabled={currentPage === 1}
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
							d='m11 17l-5-5l5-5m7 10l-5-5l5-5'
						/>
					</svg>
				</button>
				<button
					className={styles.paginationButton}
					onClick={() => changePage(currentPage - 1)}
					disabled={currentPage === 1}
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
							d='m15 18l-6-6l6-6'
						/>
					</svg>
				</button>
				<span className={styles.pageInfo}>
					{isLoading
						? 'Loading...'
						: `Page ${currentPage} / ${totalPages}`}
				</span>
				<button
					className={styles.paginationButton}
					onClick={() => changePage(currentPage + 1)}
					disabled={currentPage === totalPages}
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
							d='m9 18l6-6l-6-6'
						/>
					</svg>
				</button>
				<button
					className={styles.paginationButton}
					onClick={() => changePage(totalPages)}
					disabled={currentPage === totalPages}
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
							d='m6 17l5-5l-5-5m7 10l5-5l-5-5'
						/>
					</svg>
				</button>
			</footer>
		</div>
	);
};
 */
