import styled from '@emotion/styled';
import { colors } from '../variables';

export const SectionHeaderStyles = styled.div`
	align-items: center;
	display: flex;
	gap: 1.1rem;
	position: relative;
`;

export const SectionHeaderNumberStyles = styled.span`
	height: 2rem;
	position: relative;
	width: 2.1;

	div {
		border: 3px solid;
		border-color: ${colors.primary};
		border-radius: 0.3rem;
		height: 2rem;
		position: relative;
		width: 2rem;

		span {
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
	}
`;

export const SectionHeaderTitleStyles = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	flex-grow: 1;
	gap: 0.5rem;
	position: relative;
	width: 100%;

	h4 {
		font-size: 1.75rem;
		font-weight: 700;
		letter-spacing: 1px;
		line-height: normal;
		margin-top: -0.063rem;
		position: relative;
		width: fit-content;
	}

	span {
		border: 1.5px ${colors.primary} solid;
		border-radius: 25px;
		width: 8rem;
	}

	@media (max-width: 1440px) {
		span {
			width: 4rem;
		}
	}

	@media (max-width: 768px) {
		h4 {
			font-size: 1.5rem;
		}

		span {
			width: 3rem;
		}
	}
`;
