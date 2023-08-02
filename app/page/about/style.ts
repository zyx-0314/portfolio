import { colors } from '@/components/variables';
import styled from '@emotion/styled';
export const AboutContainer = styled.section`
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
