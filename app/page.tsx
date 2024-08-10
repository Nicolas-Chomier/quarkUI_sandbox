'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.top}>Test des composants de Quark UI</div>
			<div className={styles.main}>
				<div className={styles.menu}>
					<Link href='/pages/buttons' className={styles.link}>
						Buttons
					</Link>
					<Link href='/pages/iconButtons' className={styles.link}>
						Icon Buttons
					</Link>
					<Link href='/pages/spinners' className={styles.link}>
						Spinners
					</Link>
					<Link href='/pages/inputs' className={styles.link}>
						Inputs
					</Link>
					<Link href='/pages/flex' className={styles.link}>
						Flex & text field
					</Link>
					<Link href='/pages/dialog' className={styles.link}>
						Dialog
					</Link>
					<Link href='/pages/typography' className={styles.link}>
						Typography
					</Link>
					<Link href='/pages/checkbox' className={styles.link}>
						Checkbox
					</Link>
					<Link href='/pages/textArea' className={styles.link}>
						TextArea
					</Link>
					<Link href='/pages/tooltips' className={styles.link}>
						Tooltip
					</Link>
					<Link href='/pages/table' className={styles.link}>
						Table
					</Link>
					<Link href='/pages/badge' className={styles.link}>
						Badge
					</Link>
					<Link href='/pages/selects' className={styles.link}>
						Select & MultiSelect
					</Link>
					<Link href='/pages/fallback' className={styles.link}>
						Fallback
					</Link>
				</div>
			</div>
		</div>
	);
}

