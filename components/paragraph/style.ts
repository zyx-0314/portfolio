import styled from '@emotion/styled';
import { colors } from '../variables';

interface ParagraphContainerProps {
	readonly textAlignment: 'left' | 'center' | 'right' | 'justify';
}

export const ContentBody = styled.p<ParagraphContainerProps>`
	text-align: ${(props) => props.textAlignment};
	text-justify: inter-word;
	z-index: 10;

	span {
		color: ${colors.primary};
		border-bottom: 2px solid transparent;
		transition: all 0.2s ease-in-out;

		&:hover {
			border-bottom: 2px solid ${colors.primary};
		}
	}
`;
