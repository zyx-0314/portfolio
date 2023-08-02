import styled from '@emotion/styled';

export const HeaderStyles = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	max-height: 5vh;
`;

export const ButtonGroupStyles = styled.nav`
	display: flex;
	gap: 15px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const LogoStyles = styled.div`
	background-color: transparent;
	transition: 0.3s;

	&:hover {
		animation: pulse 1s infinite;
		transition: 0.5s;
	}
	@keyframes pulse {
		from {
			transform: rotateY(0deg);
		}
		to {
			transform: rotateY(360deg);
		}
	}
`;
