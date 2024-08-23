// React core
import React, { useMemo } from 'react';
// External modules / Third-party libraries
// Local components
import { Typography } from '@/app/components/Primitives/typography/Typography';
import { Flex } from '@/app/components/Primitives/flex/Flex';
import { extractKeyNumber } from '@/lib/functions/others/objectsMethode';
import { NoDataToDisplay } from '@/app/components/Primitives/static/NoDataToDisplay';
// Hooks and utilities
// Configuration
import { GenericObject } from '@/types/types';
// Styles
import { cs } from '@/styles/styles';

type DisplayValueProps = {
	data?: GenericObject<string | number>;
	name: string;
	disabled?: boolean;
};

const fallbackValue = '...';

export const DisplayList: React.FC<DisplayValueProps> = ({
	data,
	name,
	disabled,
}) => {
	const { entries, size } = useMemo(
		() => ({
			entries: data ? Object.entries(data) : [],
			size: data ? extractKeyNumber(data) : 0,
		}),
		[data],
	);

	if (size === 0) return <NoDataToDisplay />;
	return (
		<Flex className={`${cs.wFit} ${cs.hFit} ${cs.radiusLarge}`}>
			<Flex
				paddingX='1'
				pb='8'
				align='flex-start'
				className={`${cs.w80} ${cs.hFit}`}
			>
				<Typography as='span' htmlFor={name} className={cs.fontSize130}>
					{name}
				</Typography>
			</Flex>
			<Flex
				direction='column'
				align='flex-start'
				justify='start'
				paddingX='10'
				paddingY='6'
				gap='1'
				className={`
          ${cs.bgLayer2}
          ${cs.borderStandard}
          ${cs.radiusMedium}
          ${cs.overFlowY}
          ${size > 5 ? cs.h44 : cs.hFit}
        `}
			>
				{entries.map(([key, value], index) => (
					<Flex
						key={index}
						direction='row'
						align='center'
						justify='center'
						pl='4'
						gap='1'
						className={`${cs.wFit} ${cs.h7}`}
					>
						<Typography
							as='span'
							truncate
							disabled={disabled}
							className={`${cs.fontSize115} ${cs.w40} ${cs.specialFont}`}
						>
							{key}
						</Typography>
						<Typography
							as='span'
							truncate
							disabled={disabled}
							className={`${cs.fontSize115} ${cs.w40} ${cs.specialFont}`}
						>
							{value ?? fallbackValue}
						</Typography>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};
