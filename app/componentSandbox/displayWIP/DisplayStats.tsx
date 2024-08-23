// React core
import React from 'react';
// External modules / Third-party libraries
import { Flex, Typography, useCheckedNumber } from 'quark';
// Local components
// Hooks and utilities
// Configuration
// Styles

type DisplayStatsProps = {
	value?: number | string;
	line1?: string;
	line2?: string;
};

export const DisplayStats: React.FC<DisplayStatsProps> = ({
	value,
	line1,
	line2,
}) => {
	const checkedValue = useCheckedNumber(value, 0, 999, '999+');

	return (
		<Flex gap='s' direction='row' align='center'>
			<Typography
				element={'span'}
				fontWeight='bold'
				size='5xl'
				color='theme'
			>
				{checkedValue}
			</Typography>
			<Flex gap='2xs' direction='column' align='start'>
				<Typography element='p' size='xl'>
					{line1}
				</Typography>
				<Typography element='p' size='xl'>
					{line2}
				</Typography>
			</Flex>
		</Flex>
	);
};
