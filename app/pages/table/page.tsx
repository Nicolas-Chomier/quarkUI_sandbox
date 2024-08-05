// pages/table-test.tsx
'use client';
import React, { useState } from 'react';

import styles from './page.module.css';
import { NewTable } from 'quark';

const testData = [
	{ id: 1, name: 'Alice Johnson', age: 28, department: 'Marketing' },
	{ id: 2, name: 'Bob Smith', age: 35, department: 'Finance' },
	{ id: 3, name: 'Carol Williams', age: 42, department: 'HR' },
	{ id: 4, name: 'David Brown', age: 31, department: 'IT' },
	{ id: 5, name: 'Eve Davis', age: 39, department: 'Sales' },
	{ id: 6, name: 'Frank Miller', age: 45, department: 'Operations' },
	{ id: 7, name: 'Grace Wilson', age: 33, department: 'Marketing' },
	{ id: 8, name: 'Henry Taylor', age: 29, department: 'Finance' },
	{ id: 9, name: 'Ivy Anderson', age: 37, department: 'HR' },
	{ id: 10, name: 'Jack Thomas', age: 41, department: 'IT' },
];

export default function TableTest() {
	const [selectedRows, setSelectedRows] = useState([]);

	const handleSelectedRows = (selected: any) => {
		setSelectedRows(selected);
		console.log('Selected rows:', selected);
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Table Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Table</h2>
				<div className={styles.tableWrapper}>
					<NewTable
						size='m'
						data={testData}
						onRowsSelect={handleSelectedRows}
						allowSelection={'multiple'}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Selected Rows</h2>
				<pre className={styles.selectedRowsDisplay}>
					{JSON.stringify(selectedRows, null, 2)}
				</pre>
			</section>

			<section className={styles.section}>
				<h2>Usage</h2>
				<p>
					This table component allows for displaying structured data.
					It supports row selection, which can be toggled using the
					allowSelection prop. The size prop can be used to adjust the
					table s size. Selected rows are handled by the onRowsSelect
					callback.
				</p>
			</section>
		</div>
	);
}
