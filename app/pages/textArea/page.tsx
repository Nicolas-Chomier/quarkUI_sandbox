// pages/textarea-test.tsx
'use client';
import React from 'react';
import { TextArea } from 'quark';
import styles from './page.module.css';

const widths: any = ['s', 'm', 'l', 'full', 'auto'];
const fontSizes: any = ['xs', 's', 'm', 'l', 'xl'];

export default function TextAreaTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>TextArea Test Page</h1>

			<section className={styles.section}>
				<h2>Basic TextAreas</h2>
				<div className={styles.textareaGroup}>
					{widths.map((width: any, index: any) => (
						<div key={width} className={styles.textareaWrapper}>
							<h3>{`Width: ${width}`}</h3>
							<TextArea
								name={`textarea-${width}`}
								width={width}
								placeholder={`TextArea ${width} width`}
								rows={5}
								standardFontFamily
								borderRadius='xxl'
								fontSize='xs'
								border={width === 'full' || width === 'auto'}
							/>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>TextAreas with Different Font Sizes</h2>
				<div className={styles.textareaGroup}>
					{fontSizes.map((fontSize: any, index: number) => (
						<div key={fontSize} className={styles.textareaWrapper}>
							<h3>{`Font Size: ${fontSize}`}</h3>
							<TextArea
								name={`textarea-${fontSize}`}
								width={widths[index]}
								placeholder={`TextArea ${fontSize} font size`}
								rows={5}
								standardFontFamily
								borderRadius='xxl'
								fontSize={fontSize}
								border={index > 2}
								disabled={index === 1 || index === 2}
							/>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Usage</h2>
				<p>
					The TextArea component is used for multi-line text input. It
					can be customized with different widths, font sizes, and
					border styles. Use the disabled prop to create a disabled
					TextArea. The rows prop determines the initial number of
					visible text lines.
				</p>
			</section>
		</div>
	);
}
