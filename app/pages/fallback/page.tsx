// pages/fallback-test.tsx
'use client';
import React from 'react';
import { FallBack } from 'quark';
import styles from './page.module.css';

const FallbackTest = () => {
	const borderRadiusOptions = [
		'xxxs',
		'xxs',
		'xs',
		's',
		'm',
		'l',
		'xl',
		'xxl',
		'xxxl',
	];

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Fallback Test Page</h1>

			<section className={styles.section}>
				<h2>Static Fallbacks</h2>
				<div className={styles.fallbackGroup}>
					{borderRadiusOptions.map((radius: any) => (
						<FallBack
							key={radius}
							width='l'
							borderRadius={radius}
						/>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Loading Fallbacks</h2>
				<div className={styles.fallbackGroup}>
					{borderRadiusOptions.map((radius: any) => (
						<FallBack
							key={radius}
							loading
							width='l'
							borderRadius={radius}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default FallbackTest;
