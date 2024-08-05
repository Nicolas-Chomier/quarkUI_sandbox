// pages/button-test.tsx
'use client';
import React from 'react';
import { Button } from 'quark';
import { Bird } from 'lucide-react';
import styles from './page.module.css';

export default function ButtonTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Button Test Page</h1>

			<section className={styles.section}>
				<h2>Theme Buttons</h2>
				<div className={styles.buttonGroup}>
					<Button
						variant='theme'
						width='s'
						borderRadius='m'
						text='NEXT'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
					>
						<Bird />
					</Button>
					<Button
						variant='theme'
						width='full'
						borderRadius='m'
						text='Test Button'
					>
						<Bird />
					</Button>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Simple Buttons (No Icon)</h2>
				<div className={styles.buttonGroup}>
					<Button
						variant='accent'
						width='s'
						borderRadius='m'
						text='NEXT'
					/>
					<Button
						variant='accent'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
					/>
					<Button
						variant='accent'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
					/>
					<Button
						variant='accent'
						width='full'
						borderRadius='m'
						text='Test Button'
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Loading Buttons</h2>
				<div className={styles.buttonGroup}>
					<Button
						variant='simple'
						width='s'
						borderRadius='m'
						text='NEXT'
						loading
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='m'
						borderRadius='m'
						text='COMMUNICATE'
						loading
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='l'
						borderRadius='m'
						text='FROM PARIS TO AAAA'
						loading
					/>
					<Button
						variant='simple'
						width='full'
						borderRadius='m'
						text='Test Button'
						loading
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Different Styles</h2>
				<div className={styles.buttonGroup}>
					<Button
						variant='outline'
						width='s'
						borderRadius='s'
						text='Outline'
					/>
					<Button
						variant='fade'
						width='s'
						borderRadius='s'
						text='Fade'
					/>
					<Button
						variant='ghost'
						width='s'
						borderRadius='s'
						text='Ghost'
					/>
					<Button
						variant='info'
						width='s'
						borderRadius='s'
						text='Info'
					/>
					<Button
						variant='success'
						width='s'
						borderRadius='s'
						text='Success'
					/>
					<Button
						variant='warning'
						width='s'
						borderRadius='s'
						text='Warning'
					/>
					<Button
						variant='danger'
						width='s'
						borderRadius='s'
						text='Danger'
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>No Props & Disabled</h2>
				<div className={styles.buttonGroup}>
					<Button text='No props'>
						<Bird />
					</Button>
					<Button text='No props' />
					<Button
						variant='simple'
						width='s'
						borderRadius='s'
						text='Disabled'
						disabled
					>
						<Bird />
					</Button>
					<Button
						variant='simple'
						width='s'
						borderRadius='s'
						text='Disabled'
						disabled
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom CSS</h2>
				<div className={styles.buttonGroup}>
					<Button className={styles.customButton}>
						<Bird />
					</Button>
					<Button
						className={styles.customButton}
						text='Custom Button'
					/>
				</div>
			</section>
		</div>
	);
}
