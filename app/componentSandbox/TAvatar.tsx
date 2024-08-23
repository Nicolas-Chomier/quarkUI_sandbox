'use client';
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { createAvatar } from '@dicebear/core';
import { botttsNeutral, initials } from '@dicebear/collection';
import styles from './TAvatar.module.css';

type RankingTable = Record<string, string>;

type TAvatarProps = {
	name: string;
	rank?: string;
	src?: string;
	side?: 'left' | 'right';
	borderRadius?: 's' | 'm' | 'l';
	customRankingTable?: RankingTable;
	italic?: boolean;
	avatarStyle?: 'bots' | 'initials';
};

const defaultRankingTable: RankingTable = {
	master: '#f5a525',
	admin: '#9353d4',
	supervisor: '#006fed',
	developer: '#16c763',
	operator: '#3e3e45',
	user: '#3e3e45',
};

export const TAvatar: React.FC<TAvatarProps> = ({
	name,
	rank = 'user',
	src,
	side,
	borderRadius,
	customRankingTable,
	italic,
	avatarStyle = 'initials',
}) => {
	const [avatarImg, setAvatarImg] = useState<string>('/');
	const [size, setSize] = useState(40);
	const [avatarClassName, setAvatarClassName] = useState(styles.avatarLoaded);

	const rankingColor = useMemo(() => {
		const rankingTable = { ...defaultRankingTable, ...customRankingTable };
		const newRank = rank ?? 'user';
		return rankingTable[newRank];
	}, [customRankingTable, rank]);

	const avatarFallback = useMemo(() => {
		const seed = `${name}${rank}`;
		const backgroundColor = [rankingColor.replace('#', '')];
		const avatarOptions = {
			seed,
			size: 44,
			backgroundColor,
		};

		const avatar = createAvatar(
			avatarStyle === 'bots' ? botttsNeutral : initials,
			avatarOptions,
		);
		return avatar.toDataUri();
	}, [avatarStyle, name, rank, rankingColor]);

	const handleAvatarError = useCallback(() => {
		setAvatarImg(avatarFallback);
		setAvatarClassName('');
		setSize(44);
	}, [avatarFallback]);

	useEffect(() => {
		if (src) {
			setAvatarImg(src);
			setAvatarClassName(styles.avatarLoaded);
			setSize(40);
		}
	}, [avatarFallback, src]);

	if (!name) return null;
	return (
		<div
			className={styles.avatar}
			data-side={side}
			data-border-radius={borderRadius}
		>
			<div
				className={avatarClassName}
				data-border-radius={borderRadius}
				style={
					avatarClassName
						? { boxShadow: ` 0 0 0 2px ${rankingColor}` }
						: {}
				}
			>
				<Image
					src={avatarImg}
					width={size}
					height={size}
					quality={80}
					alt={`Avatar of ${name}`}
					loading='lazy'
					onError={handleAvatarError}
					data-border-radius={borderRadius}
					className={styles.avatar}
				/>
			</div>
			<div className={styles.nameContainer}>
				<div className={styles.name}>{name}</div>
				<div className={styles.rank} data-italic={italic}>
					{rank}
				</div>
			</div>
		</div>
	);
};
