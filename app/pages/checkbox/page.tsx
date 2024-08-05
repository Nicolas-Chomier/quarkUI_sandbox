// pages/checkbox-test.tsx
'use client';
import React from 'react';
import { Check } from 'lucide-react';
import { Checkbox } from 'quark';
import styles from './page.module.css';

export default function CheckboxTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Checkbox Test Page</h1>

			<section className={styles.section}>
				<h2>Outline Checkboxes</h2>
				<div className={styles.checkboxGroup}>
					<div className={styles.checkboxColumn}>
						<h3>Small</h3>
						<Checkbox
							name='checkbox1'
							defaultChecked
							size='s'
							color='theme'
							borderRadius='s'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox2'
							defaultChecked
							size='s'
							color='accent'
							borderRadius='m'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox3'
							defaultChecked
							size='s'
							color='standard'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox4'
							defaultChecked
							size='s'
							color='fade'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
					</div>
					<div className={styles.checkboxColumn}>
						<h3>Medium</h3>
						<Checkbox
							name='checkbox5'
							defaultChecked
							size='m'
							color='theme'
							borderRadius='s'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox6'
							defaultChecked
							size='m'
							color='accent'
							borderRadius='m'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox7'
							defaultChecked
							size='m'
							color='standard'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox8'
							defaultChecked
							size='m'
							color='fade'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
					</div>
					<div className={styles.checkboxColumn}>
						<h3>Large</h3>
						<Checkbox
							name='checkbox9'
							defaultChecked
							size='l'
							color='theme'
							borderRadius='s'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox10'
							defaultChecked
							size='l'
							color='accent'
							borderRadius='m'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox11'
							defaultChecked
							size='l'
							color='standard'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox12'
							defaultChecked
							size='l'
							color='fade'
							borderRadius='l'
							variant='outline'
						>
							<Check size={18} />
						</Checkbox>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Solid Checkboxes</h2>
				<div className={styles.checkboxGroup}>
					<div className={styles.checkboxColumn}>
						<h3>Small</h3>
						<Checkbox
							name='checkbox13'
							defaultChecked
							size='s'
							color='theme'
							borderRadius='s'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox14'
							defaultChecked
							size='s'
							color='accent'
							borderRadius='m'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox15'
							defaultChecked
							size='s'
							color='standard'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox16'
							defaultChecked
							size='s'
							color='fade'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
					</div>
					<div className={styles.checkboxColumn}>
						<h3>Medium</h3>
						<Checkbox
							name='checkbox17'
							defaultChecked
							size='m'
							color='theme'
							borderRadius='s'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox18'
							defaultChecked
							size='m'
							color='accent'
							borderRadius='m'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox19'
							defaultChecked
							size='m'
							color='standard'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox20'
							defaultChecked
							size='m'
							color='fade'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
					</div>
					<div className={styles.checkboxColumn}>
						<h3>Large</h3>
						<Checkbox
							name='checkbox21'
							defaultChecked
							size='l'
							color='theme'
							borderRadius='s'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox22'
							defaultChecked
							size='l'
							color='accent'
							borderRadius='m'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox23'
							defaultChecked
							size='l'
							color='standard'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
						<Checkbox
							name='checkbox24'
							defaultChecked
							size='l'
							color='fade'
							borderRadius='l'
							variant='solid'
						>
							<Check size={18} />
						</Checkbox>
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Disabled Checkboxes</h2>
				<div className={styles.checkboxGroup}>
					<Checkbox
						name='checkbox25'
						defaultChecked
						size='s'
						color='theme'
						borderRadius='s'
						variant='solid'
						disabled
					>
						<Check size={18} />
					</Checkbox>
					<Checkbox
						name='checkbox26'
						defaultChecked
						size='s'
						color='theme'
						borderRadius='s'
						variant='outline'
						disabled
					>
						<Check size={18} />
					</Checkbox>
				</div>
			</section>
		</div>
	);
}
