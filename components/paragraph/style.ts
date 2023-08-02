import styled from '@emotion/styled';
import { colors } from '../variables';

export const ContentBody = styled.p`
	text-align: justify;
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
