import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HeaderStyles = styled(motion.header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: fit-content;
	position: fixed;
	width: 100%;
	padding: 1rem 2rem 0.5rem 2rem;
	z-index: 1000;
	background: #000c0871;

	@media (max-width: 768px) {
		padding: 1rem 1rem 1rem 1rem;
	}
`;

export const ButtonGroupStyles = styled.nav`
	display: flex;
	gap: 15px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavButton = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}

	@media (max-width: 480px) {
		svg {
			width: 20px;
		}
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

	@media (max-width: 480px) {
		img {
			width: 35px;
		}
	}
`;
