import { colors } from './../../../components/variables';
import styled from '@emotion/styled';

export const ContentBody = styled.div`
	span {
		color: ${colors.primary};
		border-bottom: 2px solid transparent;
		transition: all 0.2s ease-in-out;

		&:hover {
			border-bottom: 2px solid ${colors.primary};
		}
	}
`;

export const Headers = styled.div`
	align-items: flex-start;
	border: 1px none;
	display: inline-flex;
	flex-direction: column;
	gap: 5px;
	justify-content: center;
	position: relative;

	h1 {
		font-size: 65px;
		font-weight: 700;
		line-height: normal;
		margin-top: -1px;
		position: relative;
		text-align: center;
		width: fit-content;
	}

	h2 {
		font-size: 48px;
		font-weight: 700;
		line-height: normal;
		opacity: 0.6;
		position: relative;
		width: 808px;
	}
`;

export const HeroTextContent = styled.div`
	align-items: flex-start;
	display: grid;
	gap: 2rem;
`;

export const HeroContainer = styled.div`
	align-items: center;
	display: inline-flex;
	gap: 1rem;
`;
