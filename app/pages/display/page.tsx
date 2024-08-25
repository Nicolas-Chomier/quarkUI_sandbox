'use client';
import React from 'react';

import styles from './page.module.css';

import { DisplayRoot } from '@/app/componentSandbox/display/DisplayRoot';
import { DisplayContent } from '@/app/componentSandbox/display/content/DisplayContent';
import { Bird } from 'lucide-react';
import { DisplayList } from '@/app/componentSandbox/display/content/list/DisplayList';

const pays = {
	nom: 'France',
	capitale: 'Paris',
	langue: 'Français',
	continent: 'Europe',
	monnaie: 'Euro',
	devise: 'Liberté, Égalité, Fraternité',
	hymne: 'La Marseillaise',
	president: 'Emmanuel Macron',
	regime: 'République',
	climat: 'Tempéré',
};

export default function DisplayTest() {
	return (
		<div className={styles.container}>
			<h1 className={styles.pageTitle}>Display Test Page</h1>

			<section className={styles.section}>
				<h2>Basic Display with different width</h2>
				<div className={styles.displayGroup}>
					<DisplayRoot width='s' style='warning' borderRadius='xl'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							titre test
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Icon icon='info' size={24} />
							<DisplayContent.Text fontSize='m'>
								test
							</DisplayContent.Text>
							<DisplayContent.Unit fontSize='m' variant='infos'>
								Kg
							</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='m' borderRadius='xl'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							titre test
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Icon icon='danger' size={24} />
							<DisplayContent.Text fontSize='m'>
								test
							</DisplayContent.Text>
							<DisplayContent.Unit fontSize='m' variant='danger'>
								Kg
							</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='l' borderRadius='xl'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							titre test
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Icon icon='warning' size={24} />
							<DisplayContent.Text fontSize='m'>
								test
							</DisplayContent.Text>
							<DisplayContent.Unit fontSize='m' variant='warning'>
								Kg
							</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='xl' disable borderRadius='xl'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							custom icon & disabled
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Icon size={24}>
								<Bird />
							</DisplayContent.Icon>
							<DisplayContent.Text fontSize='m'>
								test
							</DisplayContent.Text>
							<DisplayContent.Unit fontSize='m' variant='theme'>
								Kg
							</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='25' borderRadius='xl'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							justify left
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Text fontSize='m' justify='left'>
								align left
							</DisplayContent.Text>
							<DisplayContent.Unit fontSize='m' variant='danger'>
								Kg
							</DisplayContent.Unit>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='50'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							justify right
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Icon icon='info' size={24} />
							<DisplayContent.Text fontSize='m' justify='right'>
								align right
							</DisplayContent.Text>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='75'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							titre test
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Text fontSize='m'>
								test center
							</DisplayContent.Text>
						</DisplayRoot.Content>
					</DisplayRoot>

					<DisplayRoot width='100' style='warning'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							Big text & text justify
						</DisplayRoot.Label>
						<DisplayRoot.Content direction={'row'}>
							<DisplayContent.Text fontSize='m'>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Inventore perferendis eum
								facilis? Labore placeat in exercitationem
								veritatis fugiat, nihil enim quaerat porro
								voluptas. Maxime quos nostrum culpa facere
								officiis voluptate.
							</DisplayContent.Text>
						</DisplayRoot.Content>
					</DisplayRoot>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Display list</h2>
				<div className={styles.displayGroup}>
					<DisplayRoot width='100' style='infos' borderRadius='l'>
						<DisplayRoot.Label
							align='left'
							fontSize='l'
							offsetLeft='5'
						>
							List
						</DisplayRoot.Label>

						<DisplayList data={pays}>
							<DisplayContent.Icon icon='info' size={24} />
						</DisplayList>
					</DisplayRoot>
				</div>
			</section>
		</div>
	);
}
