'use client';
import React from 'react';
import { Alert } from '@/app/componentSandbox/TAlert';
import styles from './page.module.css';

export default function AlertTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Alert Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Alerts</h2>
				<div className={styles.alertGroup}>
					<Alert variant='success'>This is a success alert</Alert>
					<Alert variant='warning'>This is a warning alert</Alert>
					<Alert variant='danger'>This is a danger alert</Alert>
					<Alert variant='info'>This is an info alert</Alert>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Alerts with Different Border Radius</h2>
				<div className={styles.alertGroup}>
					<Alert variant='success' borderRadius='s'>
						Success alert with small border radius
					</Alert>
					<Alert variant='warning' borderRadius='m'>
						Warning alert with medium border radius
					</Alert>
					<Alert variant='danger' borderRadius='l'>
						Danger alert with large border radius
					</Alert>
					<Alert variant='info' borderRadius='full'>
						Info alert with full border radius
					</Alert>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Alerts with Shadow</h2>
				<div className={styles.alertGroup}>
					<Alert variant='success' shadow>
						Success alert with shadow
					</Alert>
					<Alert variant='warning' shadow>
						Warning alert with shadow
					</Alert>
					<Alert variant='danger' shadow>
						Danger alert with shadow
					</Alert>
					<Alert variant='info' shadow>
						Info alert with shadow
					</Alert>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Alerts with Long Text</h2>
				<div className={styles.alertGroup}>
					<Alert variant='success'>
						This is a success alert with a very long text to
						demonstrate how the component handles wrapping and text
						overflow in case of lengthy content.
					</Alert>
					<Alert variant='warning'>
						This is a warning alert that also contains a significant
						amount of text. Its important to ensure that the layout
						remains consistent and readable even with extended
						messages.
					</Alert>
				</div>
			</section>
		</div>
	);
}
