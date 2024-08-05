// pages/typography-test.tsx
'use client';
import React from 'react';
import { Typography } from 'quark';
import styles from './page.module.css';

type TypographyProps = {
	element: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
	variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
	color?: 'theme' | 'warning' | 'danger' | 'info' | 'success';
	fontWeight?: 'bold' | 'lighter' | 'normal' | 'medium' | 'semibold';
	align?: 'left' | 'center' | 'right' | 'justify';
	space?: 'wide' | 'tight' | 'normal';
	truncate?: boolean;
	underline?: boolean;
	children: React.ReactNode;
};
const typographyVariants = [
	{
		element: 'h1' as const,
		variant: 'body1' as const,
		props: { truncate: true, underline: true },
	},
	{
		element: 'h2' as const,
		variant: 'body1' as const,
		props: { truncate: true },
	},
	{
		element: 'h3' as const,
		variant: 'body1' as const,
		props: { truncate: true },
	},
	{
		element: 'h4' as const,
		variant: 'body1' as const,
		props: { truncate: true },
	},
	{ element: 'p' as const, variant: 'body1' as const, props: {} },
	{ element: 'span' as const, variant: 'body2' as const, props: {} },
	{ element: 'p' as const, variant: 'subtitle1' as const, props: {} },
	{ element: 'span' as const, variant: 'subtitle2' as const, props: {} },
];

const customTypographies = [
	{
		element: 'span' as const,
		props: { color: 'warning' as const, fontWeight: 'bold' as const },
	},
	{
		element: 'span' as const,
		props: { color: 'danger' as const, fontWeight: 'lighter' as const },
	},
	{
		element: 'span' as const,
		props: {
			color: 'info' as const,
			fontWeight: 'normal' as const,
			space: 'wide' as const,
		},
	},
	{
		element: 'span' as const,
		props: {
			fontWeight: 'normal' as const,
			space: 'tight' as const,
			align: 'justify' as const,
		},
	},
];

export default function TypographyTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Typography Test Page</h1>

			<section className={styles.section}>
				<h2>Typography Variants</h2>
				<div className={styles.typographyGroup}>
					{typographyVariants.map((item, index) => (
						<div key={index} className={styles.typographyItem}>
							<Typography
								element={item.element}
								variant={item.variant}
								{...item.props}
							>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Ducimus, ab impedit.
							</Typography>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom Typography Styles</h2>
				<div className={styles.typographyGroup}>
					{customTypographies.map((item, index) => (
						<div key={index} className={styles.typographyItem}>
							<Typography element={item.element} {...item.props}>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Ducimus, ab impedit.
							</Typography>
						</div>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Mixed Typography Examples</h2>
				<div className={styles.typographyGroup}>
					<Typography
						element='h1'
						align='center'
						color='theme'
						fontWeight='bold'
						variant='body1'
					>
						This is a headline
					</Typography>
					<Typography
						element='p'
						variant='body1'
						align='justify'
						color='success'
					>
						This is a paragraph with justified text and success
						color.
					</Typography>
					<Typography
						element='span'
						variant='subtitle2'
						color='danger'
					>
						This is an inline text with danger color.
					</Typography>
				</div>
			</section>

			{/* ... rest of the component ... */}
		</div>
	);
}
