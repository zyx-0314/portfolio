import styled from '@emotion/styled';

export const StyledSectionContainer = styled.section`
	height: fit-content;
	margin: 10rem auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 75%;
	z-index: 10;

	@media (max-width: 1024px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const HeroStyledSectionContainer = styled.section`
	align-items: center;
	display: inline-flex;
	gap: 2rem;
	height: 95vh;
	width: 75%;
	z-index: 10;

	@media (max-width: 1480px) {
		height: fit-content;
		width: 90%;
		display: flex;
		flex-direction: column-reverse;
	}

	@media (max-width: 768px) {
		padding-top: 3rem;
		width: 100%;
	}
`;

export const StyledMainContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: fit-content;
	width: 85%;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	@media (max-width: 1024px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;
