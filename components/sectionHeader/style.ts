import styled from '@emotion/styled';
import { colors } from '../variables';

export const StyleSectionHeader = styled.div`
	align-items: center;
	display: flex;
	gap: 1.1rem;
	position: relative;

	.number {
		height: 2rem;
		position: relative;
		width: 2.1;
	}

	.overlap-group {
		border: 3px solid;
		border-color: ${colors.primary};
		border-radius: 0.3rem;
		height: 2rem;
		position: relative;
		width: 2rem;
	}

	.element {
		color: #d4deee;
		font-size: 0.9rem;
		font-weight: 700;
		height: 1.3rem;
		left: 0.1rem;
		letter-spacing: 1px;
		line-height: normal;
		position: absolute;
		text-align: center;
		top: 0.25rem;
	}

	.frame {
		align-items: center;
		display: flex;
		flex: 1;
		flex-grow: 1;
		gap: 0.5rem;
		position: relative;
		width: 100%;

		.title {
			font-size: 1.75rem;
			font-weight: 700;
			letter-spacing: 1px;
			line-height: normal;
			margin-top: -0.063rem;
			position: relative;
			width: fit-content;
		}

		.line {
			border: 1.5px ${colors.primary} solid;
			border-radius: 25px;
			width: 3rem;
		}
	}

	@media (max-width: 768px) {
		.frame {
			.title {
				font-size: 1.5rem;
			}
		}
	}
`;
