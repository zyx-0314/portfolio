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

	h3 {
		font-size: 3rem;
		font-weight: 700;
	}

	@media (max-width: 1024px) {
		p {
			width: 90%;
		}

		h3 {
			font-size: 2rem;
			font-weight: 500;
		}
	}

	@media (max-width: 768px) {
		h3 {
			font-size: 2rem;
		}

		p {
			font-size: 0.7rem;
		}
	}

	@media (max-width: 425px) {
		h3 {
			font-size: 1.5rem;
		}
	}
`;
