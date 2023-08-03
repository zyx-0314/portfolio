import styled from '@emotion/styled';

export const ContactSubHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;

	p {
		width: 50%;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
	}

	@media (max-width: 1024px) {
		p {
			width: 90%;
		}

		h1 {
			font-size: 2rem;
			font-weight: 500;
		}
	}

	@media (max-width: 768px) {
		p {
			width: 1000%;
		}

		h1 {
			font-size: 1.6rem;
			font-weight: 500;
		}
	}
`;
