// pages/dialog-test.tsx
'use client';
import React, { useState } from 'react';
import { Button, IconButton } from 'quark';
import styles from './page.module.css';
import { Dialog } from '@/app/componentSandbox/TDialog';

export default function DialogTest() {
	const [open, setOpen] = useState(false);

	const handleOpenDialog = () => {
		console.log('open dialog');
		setOpen(true);
	};

	const handleCloseDialog = () => {
		console.log('close dialog');
		setOpen(false);
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Dialog Test Page</h1>

			<section className={styles.section}>
				<h2>Dialog Demo</h2>
				<div className={styles.dialogDemo}>
					<IconButton
						onClick={handleOpenDialog}
						className={styles.openButton}
					>
						Open Dialog
					</IconButton>
					<Dialog
						isOpen={open}
						id='test'
						className={styles.dialog}
						padding='m'
						background
						shadow
					>
						<div className={styles.dialogContent}>
							<h3>Dialog Title</h3>
							<p>
								This is the content of the dialog. You can add
								any elements here.
							</p>
							<Button
								onClick={handleCloseDialog}
								className={styles.closeButton}
							>
								CLOSE
							</Button>
						</div>
					</Dialog>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Instructions</h2>
				<p>
					{
						'Click the Open Dialog button to open the dialog. Click the CLOSE button or outside the dialog to close it.'
					}
				</p>
			</section>
		</div>
	);
}
