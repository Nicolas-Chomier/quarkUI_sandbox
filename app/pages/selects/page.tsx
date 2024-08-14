// pages/multi-select-test.tsx
'use client';
import React from 'react';

import { TSelect } from '@/app/componentSandbox/TSelect';
import styles from './page.module.css';
import { MultiSelect } from '@/app/componentSandbox/TMultiSelect';
import { TBasicSelect } from '@/app/componentSandbox/TBasicSelect';
import { Flex } from 'quark';
import { TFlags } from '@/app/componentSandbox/TFlags';

const dataSelect = [
	'test1',
	'test2',
	'test3',
	'test4',
	'test5',
	'test6',
	'test7',
	'test8',
	'test9',
	'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
];

const languages = [
	'Français',
	'English',
	'Italian',
	'Español',
	'japan',
	'korean',
];

const SelectTestPage = () => {
	const handleMultiSelect = (value: any) => {
		console.log('MultiSelect value:', value);
	};

	const handleSelect = (value: any) => {
		console.log('Select value:', value);
	};

	const handleBasicSelect = (value: any) => {
		console.log('Select value:', value);
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Select Components Test Page</h1>

			<section className={styles.section}>
				<h2>MultiSelect</h2>
				<div className={styles.selectDemo}>
					<MultiSelect
						onFieldChange={handleMultiSelect}
						data={dataSelect}
						placeholder='Select multiple items...'
						label='MultiSelect Demo'
						name='multiselect'
						variant='simple'
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Select</h2>
				<div className={styles.selectDemo}>
					<TSelect
						onFieldChange={handleSelect}
						data={dataSelect}
						placeholder='Select an item...'
						label='Select Demo'
						name='select'
						variant='simple'
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Basical Select W.I.P</h2>
				<div className={styles.selectDemo}>
					<TBasicSelect
						onChange={handleBasicSelect}
						data={languages}
						placeholder='Select one'
						label='Select Demo'
						name='select'
						variant='theme'
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Button languages</h2>
				<div className={styles.selectDemo}>
					<Flex direction='row'>
						<TFlags
							onClick={handleBasicSelect}
							languages={languages}
							size='m'
							variant='fade'
							borderRadius='m'
						/>
						Dessous
					</Flex>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Usage Instructions</h2>
				<h3>MultiSelect</h3>
				<p>
					Click on the input field to open the dropdown. Select
					multiple items by clicking on them. You can remove selected
					items by clicking on their badges. Use the search input to
					filter the available options.
				</p>
				<h3>Select</h3>
				<p>
					Click on the input field to open the dropdown. Select a
					single item by clicking on it. The selected item will appear
					in the input field. Use the search input to filter the
					available options.
				</p>
				<h3>Basical Select</h3>
				<p>Simple select with no search and option items. A finir !</p>
			</section>
		</div>
	);
};

export default SelectTestPage;
