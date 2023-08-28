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
	.container {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	&:hover {
		.icon {
			color: ${colors.primary};
		}

		p {
			color: ${colors.primary};
			border-bottom: 2px solid ${colors.primary};
			span {
				border-bottom: 2px solid transparent;
			}
		}
	}

	.icon {
		display: flex;
		flex-direction: row;
	}

	span {
		color: ${colors.primary};
	}

	p {
		width: fit-content;
		border-bottom: 2px solid transparent;
		transition: all 0.2s ease-in-out;
		padding-top: 2px;
	}

	@media (max-width: 768px) {
		width: fit-content;
		p {
			font-size: 0.7rem;
		}
	}
`;
