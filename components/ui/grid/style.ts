import styled from '@emotion/styled';
import { colors } from '../variables';

export const GridContainerStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 5px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}
`;

export const WordItemStyle = styled.div`
	span {
		color: ${colors.primary};
	}

	p {
		width: fit-content;
		border-bottom: 2px solid transparent;
		transition: all 0.2s ease-in-out;

		&:hover {
			color: ${colors.primary};
			border-bottom: 2px solid ${colors.primary};
			span {
				border-bottom: 2px solid transparent;
			}
		}
	}

	@media (max-width: 768px) {
		width: fit-content;
		p {
			font-size: 0.7rem;
		}
	}
`;
