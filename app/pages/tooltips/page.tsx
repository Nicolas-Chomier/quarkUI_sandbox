// pages/tooltip-test.tsx
'use client';
import React from 'react';
import { Tooltip } from 'quark';
import styles from './page.module.css';

const sides: any = ['top', 'right', 'bottom', 'left'];
const colors = ['red', 'blue', 'green', 'purple'];

export default function TooltipTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Tooltip Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Tooltips</h2>
				<div className={styles.tooltipGroup}>
					{sides.map((side: any, index: number) => (
						<div key={side} className={styles.tooltipWrapper}>
							<Tooltip
								content={`Tooltip on ${side}`}
								side={side}
								delayDuration={300}
							>
								<div
									className={styles.tooltipTrigger}
									style={{ backgroundColor: colors[index] }}
								>
									{side}
								</div>
							</Tooltip>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom Delay Tooltips</h2>
				<div className={styles.tooltipGroup}>
					{[0, 500, 1000, 2000].map((delay, index) => (
						<div key={delay} className={styles.tooltipWrapper}>
							<Tooltip
								content={`Delay: ${delay}ms`}
								side='top'
								delayDuration={delay}
							>
								<div
									className={styles.tooltipTrigger}
									style={{ backgroundColor: colors[index] }}
								>
									{delay}ms
								</div>
							</Tooltip>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Usage</h2>
				<p>
					The Tooltip component provides additional information when
					hovering over an element. It can be positioned on different
					sides of the trigger element and can have custom delay
					durations. Wrap the trigger element with the Tooltip
					component and provide the tooltip content via the content
					prop.
				</p>
			</section>
		</div>
	);
}
