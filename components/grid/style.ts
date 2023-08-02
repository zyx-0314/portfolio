import styled from '@emotion/styled';
import { colors } from '../variables';

export const GridContainerStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 5px;
`;

export const WordItemStyle = styled.div`
	span {
		color: ${colors.primary};
		border-bottom: 3px solid black;
	}

	p {
		width: fit-content;
		border-bottom: 2px solid transparent;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: ${colors.primary};
			border-bottom: 2px solid ${colors.primary};
		}
	}
`;
