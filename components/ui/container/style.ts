import styled from '@emotion/styled';

export const StyledSectionContainer = styled.section`
	height: fit-content;
	margin: 10rem auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 75%;
	z-index: 10;

	@media (max-width: 1480px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const HeroStyledSectionContainer = styled.section`
	padding-top: 3rem;
	align-items: center;
	display: inline-flex;
	gap: 5rem;
	height: 95vh;
	width: 75%;
	z-index: 10;

	@media (max-width: 1480px) {
		gap: 3rem;
		padding-top: 4rem;
		height: fit-content;
		min-height: 85vh;
		width: 90%;
		display: flex;
	}

	@media (max-width: 768px) {
		padding-top: 2rem;
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column-reverse;
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

	@media (max-width: 1480px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
		width: 100%;
	}
`;
