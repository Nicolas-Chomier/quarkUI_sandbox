// pages/avatar-test.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import { TAvatar2 } from '@/app/componentSandbox/TAvatar2';

const avatarTestData = [
	{ name: 'Nicolas', rank: 'master' },
	{ name: 'Alice', rank: 'admin' },
	{ name: 'Bob', rank: 'supervisor' },
	{ name: 'Charlie', rank: 'developer' },
	{ name: 'Diana', rank: 'operator' },
	{ name: 'Evan', rank: 'user' },
];

const customRankingTable = {
	vip: '#8B4513',
	guest: '#708090',
};

const variant = 'bots';

export default function Avatar2TestPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>
				Avatar2 Test Page for quark lib
			</h1>

			<section className={styles.section}>
				<h2>Default Avatars</h2>
				<div className={styles.avatarGroup}>
					{avatarTestData.map((avatar, index) => (
						<TAvatar2
							key={index}
							{...avatar}
							borderRadius='l'
							variant={variant}
						/>
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Avatar Styles</h2>
				<div className={styles.avatarGroup}>
					<TAvatar2 name='Initials' variant={variant} />
					<TAvatar2 name='Bots' variant={variant} />
					<TAvatar2 name='fun' variant={variant} />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Border Radius Variations</h2>
				<div className={styles.avatarGroup}>
					<TAvatar2 name='Small' borderRadius='s' variant={variant} />
					<TAvatar2
						name='Medium'
						borderRadius='m'
						variant={variant}
					/>
					<TAvatar2 name='Large' borderRadius='l' variant={variant} />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Side Variations</h2>
				<div className={styles.avatarGroup}>
					<TAvatar2 name='Left' side='left' variant={variant} />
					<TAvatar2 name='Right' side='right' variant={variant} />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Italic Text</h2>
				<div className={styles.avatarGroup}>
					<TAvatar2 name='Normal' variant={variant} />
					<TAvatar2 name='Italic' italic variant={variant} />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom Ranking Table</h2>
				<div className={styles.avatarGroup}>
					<TAvatar2
						name='VIP'
						rank='vip'
						customRankingTable={customRankingTable}
						variant={variant}
					/>
					<TAvatar2
						name='Guest'
						rank='guest'
						customRankingTable={customRankingTable}
						variant={variant}
					/>
				</div>
			</section>
		</div>
	);
}
