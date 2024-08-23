// React core
import React, { useMemo } from 'react';
// External modules / Third-party libraries
// Local components
import { Frame } from '../../HOC/Frame';
import { Typography } from '../../Primitives/typography/Typography';
import { Tooltip } from '../../Primitives/tooltip/Tooltip';
import { Flex } from '../../Primitives/flex/Flex';
import { InfoIcon } from '../../Primitives/icon/Icons';
// Hooks and utilities
import { objectHasAtLeastOneKey } from '@/lib/functions/others/objectsMethode';
// Configuration
import { StandardObject, TTooltipSide } from '@/types/types';
// Styles
import { cs } from '@/styles/styles';

type DisplayLineProps = {
	infos?: string;
	noLabel?: boolean;
	content?: StandardObject;
	disabled?: boolean;
	side?: TTooltipSide;
};

export const DisplayLine: React.FC<DisplayLineProps> = ({
	infos,
	noLabel,
	content,
	disabled,
	side,
}) => {
	// Répartition du contenu //! verifier la source et la forme des données d'entrées
	const { label, value, unit } = useMemo(() => {
		if (content && objectHasAtLeastOneKey(content)) {
			const [label, value] = Object.entries(content)[0] || [null, null];
			const unit = content.unit || null;
			return { label, value, unit };
		}
		return { label: null, value: null, unit: null };
	}, [content]);

	if (!content) return null;
	return (
		<Frame
			className={`${cs.textColor} ${cs.radiusLarge} ${
				disabled ? cs.bgDisabled : ''
			}`}
		>
			<Flex align='center' justify='center' paddingY='3' gap='2'>
				{noLabel ? null : (
					<Flex
						direction='row'
						align='center'
						className={`${cs.w62} ${cs.h7}`}
					>
						<Flex
							direction='row'
							pb='2'
							pl={infos ? '11' : undefined}
							className={`${infos ? '' : cs.textCenter}  ${
								infos ? cs.w4_5 : cs.wFull
							}`}
						>
							<Typography
								as={'span'}
								truncate
								className={`${cs.wFull} ${cs.fontSize110}`}
							>
								{unit ? `${label} (${unit})` : label}
							</Typography>
						</Flex>
						{infos ? (
							<Flex
								direction='row'
								justify='end'
								pr='6'
								pb='2'
								className={`${cs.w1_5}`}
							>
								<Tooltip
									content={infos}
									side={side}
									className={`${cs.wFit} ${cs.hFit} ${cs.textRight} ${cs.textTheme}`}
								>
									<InfoIcon />
								</Tooltip>
							</Flex>
						) : null}
					</Flex>
				)}

				<Flex
					direction='row'
					align='center'
					justify='center'
					paddingX='12'
					className={`${cs.bgComponent} ${cs.w62} ${cs.h11} ${cs.radiusMedium}`}
				>
					<Typography
						as={'span'}
						truncate
						gutter
						disabled={disabled}
						className={`${cs.fontSize110}`}
					>
						{value}
					</Typography>
				</Flex>
			</Flex>
		</Frame>
	);
};
