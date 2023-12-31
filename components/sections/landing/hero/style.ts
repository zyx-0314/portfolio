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
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
			width: 75%;
		}
	}

	@media (max-width: 1024px) {
		h1 {
			font-size: 2.3rem;
		}

		h2 {
			font-size: 1.8rem;
			width: 75%;
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1.2rem;
		}
	}
`;

export const HeroTextContent = styled.div`
	align-items: flex-start;
	display: grid;
	gap: 3rem;

	@media (max-width: 1024px) {
		gap: 2rem;
	}
`;
