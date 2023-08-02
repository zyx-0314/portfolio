import styled from '@emotion/styled';

export const Headers = styled.div`
	align-items: flex-start;
	border: 1px none;
	display: inline-flex;
	flex-direction: column;
	gap: 5px;
	justify-content: center;
	position: relative;

	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: normal;
		position: relative;
		width: fit-content;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		line-height: normal;
		opacity: 0.6;
		position: relative;
		width: 75%;
	}

	@media (max-width: 1480px) {
		h1 {
			font-size: 3.2rem;
		}

		h2 {
			font-size: 2.2rem;
			width: 75%;
		}
	}

	@media (max-width: 1024px) {
		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
			width: 75%;
		}
	}
`;

export const HeroTextContent = styled.div`
	align-items: flex-start;
	display: grid;
	gap: 3rem;
`;

export const HeroContainer = styled.section`
	align-items: center;
	display: inline-flex;
	gap: 2rem;
	height: 95vh;
	width: 75%;

	@media (max-width: 1480px) {
		height: fit-content;
		width: 90%;
		display: flex;
		flex-direction: column-reverse;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;
