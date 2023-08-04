import { colors } from '@/components/variables';
import styled from '@emotion/styled';

export const ExperienceContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 1.5rem;
`;

export const ExperienceListContainer = styled.div`
	border-right: 3px solid ${colors.primary};
	width: fit-content;
`;

export const StyledUnorderList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 0.8rem;
	padding: 0 1rem;
`;

export const ShowCardContainer = styled.div`
	width: 75%;
`;

export const StyledShowCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	border: 2px solid ${colors.primary};
	border-radius: 5px;
	transition: all ease-in-out 0.15s;

	&:hover {
		transform: translate(-6px, -6px);
		box-shadow: 6px 6px ${colors.primary};
	}
`;

export const StyledShowCardHeader = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 1rem;
`;

export const StyledShowCardLogo = styled.div`
	width: 5rem;
`;

export const ShowCardHeaderContent = styled.div`
	h1 {
		color: ${colors.primary};
		font-size: 1.2rem;
		font-weight: 700;
	}

	h2 {
		font-size: 1rem;
	}

	div {
		width: fit-content;
	}
`;

export const ShowCardContent = styled.div`
	border: 3px solid ${colors.white};
	width: 100%;
	border-radius: 5px;
	padding: 0.5rem;

	p {
		font-size: 0.9rem;
	}
`;
