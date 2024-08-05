// pages/flex-test.tsx
'use client';
import React from 'react';
import { Flex, IconButton, Input, Label } from 'quark';
import { Bird } from 'lucide-react';
import styles from './page.module.css';

export default function FlexTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Flex Test Page</h1>

			<section className={styles.section}>
				<h2>Flex Layout with Input and IconButton</h2>
				<div className={styles.flexDemo}>
					<Label
						htmlFor='Test2'
						text='MON LABEL'
						textAlign='left'
						fontWeight='bold'
						offsetLeft='9'
						className={styles.label}
					>
						<Flex
							background
							direction='row'
							justify='between'
							borderRadius='l'
							align='end'
							gap='3xs'
							pb='3'
							pt='3'
							pr='3'
							pl='3'
							className={styles.flexContainer}
						>
							<Input
								type='text'
								name='Test2'
								border
								placeholder='Votre email...'
								borderRadius='m'
								className={styles.input}
							/>
							<IconButton
								variant='outline'
								size='m'
								borderRadius='m'
								className={styles.iconButton}
							>
								<Bird />
							</IconButton>
						</Flex>
					</Label>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Description</h2>
				<p>
					This demo showcases a flex layout containing an input field
					for email and an icon button. The components are aligned and
					spaced using the Flex component from the Quark library.
				</p>
			</section>
		</div>
	);
}
