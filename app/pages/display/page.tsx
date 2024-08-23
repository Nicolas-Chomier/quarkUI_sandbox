'use client';
import React from 'react';

import styles from './page.module.css';

import { DisplayRoot } from '@/app/componentSandbox/display/DisplayRoot';
import { DisplayContent } from '@/app/componentSandbox/display/content/DisplayContent';

export default function DisplayTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Display Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Display</h2>
				<div className={styles.displayGroup}>
					{/* <DisplayText label='test'>nicolas</DisplayText>
					<DisplayText label='test' iconInfo>
						nicolas
					</DisplayText>
					<DisplayText label='test' unit='%'>
						nicolas
					</DisplayText>
					<DisplayText label='test' unit='%' iconInfo>
						nicolas
					</DisplayText> */}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Display with Different Border Radius</h2>
				<div className={styles.displayGroup}>
					<DisplayRoot width='l'>
						<DisplayRoot.Label
							align='left'
							color='danger'
							fontSize='l'
							fontWeight='bold'
							offsetLeft='5'
						>
							titre test
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row-reverse'}>
							<DisplayContent.Icon icon='warning' size={28} />
							<DisplayContent.Text>
								test du text
							</DisplayContent.Text>
							<DisplayContent.Unit>%</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Display with Shadow</h2>
				<div className={styles.displayGroup}></div>
			</section>

			<section className={styles.section}>
				<h2>Display with Long Text</h2>
				<div className={styles.displayGroup}></div>
			</section>
		</div>
	);
}
