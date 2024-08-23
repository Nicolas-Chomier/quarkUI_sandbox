// pages/avatar-test.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import { TAvatar } from '@/app/componentSandbox/TAvatar';

const avatarTestData = [
	{ name: 'Nicolas', rank: 'master', src: '/me.jpg' },
	{ name: 'Alice', rank: 'admin', srcFallback: '/me.jpg' },
	{ name: 'Bob', rank: 'supervisor' },
	{ name: 'Charlie', rank: 'developer' },
	{ name: 'Diana', rank: 'operator' },
	{ name: 'Evan', rank: 'user' },
];

const customRankingTable = {
	vip: '#8B4513',
	guest: '#708090',
};

export default function AvatarTestPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Avatar Test Page</h1>

			<section className={styles.section}>
				<h2>Default Avatars</h2>
				<div className={styles.avatarGroup}>
					{avatarTestData.map((avatar, index) => (
						<TAvatar key={index} {...avatar} borderRadius='l' />
					))}
				</div>
			</section>

			<section className={styles.section}>
				<h2>Avatar Styles</h2>
				<div className={styles.avatarGroup}>
					<TAvatar name='Initials' avatarStyle='initials' />
					<TAvatar name='Bots' avatarStyle='bots' />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Border Radius Variations</h2>
				<div className={styles.avatarGroup}>
					<TAvatar name='Small' borderRadius='s' />
					<TAvatar name='Medium' borderRadius='m' />
					<TAvatar name='Large' borderRadius='l' />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Side Variations</h2>
				<div className={styles.avatarGroup}>
					<TAvatar name='Left' side='left' />
					<TAvatar name='Right' side='right' />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Italic Text</h2>
				<div className={styles.avatarGroup}>
					<TAvatar name='Normal' />
					<TAvatar name='Italic' italic />
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom Ranking Table</h2>
				<div className={styles.avatarGroup}>
					<TAvatar
						name='VIP'
						rank='vip'
						customRankingTable={customRankingTable}
					/>
					<TAvatar
						name='Guest'
						rank='guest'
						customRankingTable={customRankingTable}
					/>
				</div>
			</section>
		</div>
	);
}
