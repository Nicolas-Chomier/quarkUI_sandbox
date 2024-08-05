// pages/input-test.tsx
'use client';
import React from 'react';
import styles from './page.module.css';
import { Input, Label } from 'quark';

export default function InputTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Input Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Inputs</h2>
				<div className={styles.inputGroup}>
					<Input
						type='text'
						name='Test1'
						border
						placeholder='Small width'
						width='s'
					/>
					<Input
						type='password'
						name='Test2'
						placeholder='Medium width'
						width='m'
					/>
					<Input
						type='email'
						name='Test3'
						placeholder='Large width'
						width='l'
					/>
					<Input
						type='text'
						name='Test4'
						placeholder='Full width'
						width='full'
						border
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Special Input</h2>
				<Input type='text' name='spe' placeholder='Special input' />
			</section>

			<section className={styles.section}>
				<h2>Inputs with Labels</h2>
				<div className={styles.labeledInputGroup}>
					<Label
						htmlFor='Test5'
						text='Left aligned label'
						textAlign='left'
						fontWeight='bold'
						fontSize='xl'
					>
						<Input
							type='text'
							name='Test5'
							border
							placeholder='Left aligned label'
						/>
					</Label>
					<Label
						htmlFor='Test6'
						text='Center aligned label'
						textAlign='center'
						fontWeight='bold'
					>
						<Input
							type='text'
							name='Test6'
							border
							placeholder='Center aligned label'
						/>
					</Label>
					<Label
						htmlFor='Test7'
						text='Right aligned label'
						textAlign='right'
					>
						<Input
							type='text'
							name='Test7'
							border
							placeholder='Right aligned label'
						/>
					</Label>
					<div className={styles.customLabelWrapper}>
						<Label
							htmlFor='Test8'
							className={styles.labelCustom}
							text=''
						>
							Custom label
						</Label>
						<Input
							type='text'
							name='Test8'
							border
							placeholder='Custom label'
						/>
					</div>
					<div>
						<Label
							htmlFor='Test9'
							text=''
							textAlign='center'
							fontWeight='bold'
							fontSize='xl'
						>
							Label as child
						</Label>
						<Input
							type='text'
							name='Test9'
							border
							placeholder='Label as child'
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
