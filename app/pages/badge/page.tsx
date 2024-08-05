// pages/badge-test.tsx
'use client';
import React from 'react';
import { Badge } from 'quark';
import styles from './page.module.css';

export default function BadgeTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Badge Test Page</h1>

			<section className={styles.section}>
				<h2>Solid Badges</h2>
				<div className={styles.badgeGroup}>
					<Badge
						color='theme'
						size='small'
						variant='solid'
						borderRadius='m'
					>
						theme
					</Badge>
					<Badge color='accent' size='medium' variant='solid'>
						accent
					</Badge>
					<Badge color='info' size='large' variant='solid'>
						info
					</Badge>
					<Badge color='success' size='small' variant='solid'>
						success
					</Badge>
					<Badge color='warning' size='medium' variant='solid'>
						warning
					</Badge>
					<Badge color='danger' size='large' variant='solid'>
						danger
					</Badge>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Outline Badges</h2>
				<div className={styles.badgeGroup}>
					<Badge>default</Badge>
					<Badge color='accent' size='medium' variant='outline'>
						accent
					</Badge>
					<Badge color='info' size='large' variant='outline'>
						info
					</Badge>
					<Badge color='success' size='small' variant='outline'>
						success
					</Badge>
					<Badge color='warning' size='medium' variant='outline'>
						warning
					</Badge>
					<Badge color='danger' size='large' variant='outline'>
						danger
					</Badge>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Fade Badges</h2>
				<div className={styles.badgeGroup}>
					<Badge
						color='theme'
						size='small'
						variant='fade'
						clickable
						onClick={() => console.log('click')}
					>
						Clickable Theme
					</Badge>
					<Badge color='accent' size='medium' variant='fade'>
						Accent Medium
					</Badge>
					<Badge color='info' size='large' variant='fade'>
						Info Large
					</Badge>
					<Badge color='success' size='small' variant='fade'>
						Success
					</Badge>
					<Badge color='warning' size='medium' variant='fade'>
						Warning
					</Badge>
					<Badge color='danger' size='large' variant='fade'>
						Danger
					</Badge>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Long Text Badges</h2>
				<div className={styles.badgeGroup}>
					<Badge color='theme' size='small' variant='fade'>
						This is a very long badge text to demonstrate wrapping
					</Badge>
					<Badge color='accent' size='medium' variant='fade'>
						Another long badge text for testing purposes
					</Badge>
				</div>
			</section>
		</div>
	);
}
