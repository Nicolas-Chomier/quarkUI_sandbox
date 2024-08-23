// React core
import React, { useCallback } from 'react';
// External modules / Third-party libraries
// Local components

// Hooks and utilities
// Configuration

// Styles

type DisplayRatioProps = { content: StandardObject; disabled?: boolean };

export const DisplayRatio: React.FC<DisplayRatioProps> = ({
	content,
	disabled,
}) => {
	const extractLabels = useCallback(() => {
		const size = extractKeyNumber(content);
		if (size === 2) {
			const keys = Object.keys(content);

			return (
				<Flex
					direction='row'
					align='center'
					justify='between'
					className={`${cs.w62} ${cs.h7} ${cs.textColor}`}
				>
					<Typography
						as={'span'}
						truncate
						className={`${cs.fontSize110} ${cs.w2_5} ${cs.textCenter}`}
					>
						{keys[0]}
					</Typography>
					<Typography as={'span'} className={`${cs.fontSize110}`}>
						/
					</Typography>

					<Typography
						as={'span'}
						truncate
						className={`${cs.fontSize110} ${cs.w2_5} ${cs.textCenter}`}
					>
						{keys[1]}
					</Typography>
				</Flex>
			);
		}
		return null;
	}, [content]);

	const extractValues = useCallback(() => {
		const size = extractKeyNumber(content);
		if (size === 2) {
			const values = Object.values(content);

			return (
				<Flex
					direction='row'
					className={`${cs.w62} ${cs.h11} ${cs.bgComponent} ${cs.radiusMedium} ${cs.standardCursor} ${cs.textColor}`}
				>
					<Typography
						as={'span'}
						disabled={disabled}
						className={`${cs.fontSize110} ${cs.w2_5} ${cs.textCenter}`}
					>
						{values[0]}
					</Typography>
					{disabled ? null : <RightArrowIcon />}
					<Typography
						as={'span'}
						disabled={disabled}
						className={`${cs.fontSize110} ${cs.w2_5} ${cs.textCenter}`}
					>
						{values[1]}
					</Typography>
				</Flex>
			);
		}
		return null;
	}, [content, disabled]);

	if (!content) return null;
	return (
		<Frame className={`${cs.radiusLarge} ${disabled ? cs.bgDisabled : ''}`}>
			<Flex direction='column' gap='3' paddingX='3' paddingY='3'>
				{extractLabels()} {extractValues()}
			</Flex>
		</Frame>
	);
};
