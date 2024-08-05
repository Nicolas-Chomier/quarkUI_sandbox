// pages/icon-button-test.tsx
'use client';
import React from 'react';

import { Bird } from 'lucide-react';
import { IconButton } from 'quark';

import styles from './page.module.css';

const variants: any = ['theme', 'accent', 'simple', 'outline', 'fade', 'ghost'];
const sizes: any = ['s', 'm', 'l'];
const otherVariants: any = ['info', 'success', 'warning', 'danger'];

export default function IconButtonTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Icon Button Test Page</h1>

			{variants.map((variant: any) => (
				<section key={variant} className={styles.section}>
					<h2>
						{variant.charAt(0).toUpperCase() + variant.slice(1)}
					</h2>
					<div className={styles.buttonGroup}>
						{sizes.map((size: any) => (
							<IconButton
								key={size}
								variant={variant}
								size={size}
								borderRadius='m'
							>
								<Bird />
							</IconButton>
						))}
					</div>
				</section>
			))}

			<section className={styles.section}>
				<h2>Other Variants</h2>
				<div className={styles.buttonGroup}>
					{otherVariants.map((variant: any) => (
						<IconButton
							key={variant}
							variant={variant}
							size='m'
							borderRadius='m'
						>
							<Bird />
						</IconButton>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom, Disabled & Default</h2>
				<div className={styles.buttonGroup}>
					<IconButton
						disabled
						variant='simple'
						size='m'
						borderRadius='m'
					>
						<Bird />
					</IconButton>
					<IconButton>
						<Bird />
					</IconButton>
					<IconButton className={styles.customButton}>
						<Bird />
					</IconButton>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Loading</h2>
				<div className={styles.buttonGroup}>
					{sizes.map((size: any) => (
						<IconButton
							key={size}
							variant='simple'
							size={size}
							borderRadius='m'
							loading
						>
							<Bird />
						</IconButton>
					))}
				</div>
			</section>
		</div>
	);
}
