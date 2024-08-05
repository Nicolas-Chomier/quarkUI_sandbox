// pages/spinner-test.tsx
'use client';
import React from 'react';
import { Spinner } from 'quark';
import styles from './page.module.css';

const sizes: any = ['s', 'm', 'l'];
const colors: any = ['basic', 'theme', 'accent'];

export default function SpinnerTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Spinner Test Page</h1>

			{colors.map((color: any) => (
				<section key={color} className={styles.section}>
					<h2>{color.charAt(0).toUpperCase() + color.slice(1)}</h2>
					<div className={styles.spinnerGroup}>
						{sizes.map((size: any) => (
							<div
								key={`${color}-${size}`}
								className={styles.spinnerWrapper}
							>
								<Spinner
									size={size}
									color={
										color === 'basic' ? undefined : color
									}
								/>
								<span className={styles.sizeLabel}>
									{size.toUpperCase()}
								</span>
							</div>
						))}
					</div>
				</section>
			))}

			<section className={styles.section}>
				<h2>Usage</h2>
				<p>
					The Spinner component is used to indicate a loading state.
					It comes in three sizes (small, medium, large) and can be
					customized with different colors. Use it when content is
					being loaded or an action is being processed.
				</p>
			</section>
		</div>
	);
}
