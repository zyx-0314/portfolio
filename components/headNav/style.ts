import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../variables';

export const HeaderStyles = styled(motion.header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	height: fit-content;
	position: fixed;
	width: 100%;
	padding: 1rem 2rem 0 2rem;
	z-index: 1000;

	@media (max-width: 768px) {
		padding: 1rem 1rem 0 1rem;
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
		display: flex;
	}
`;

export const MenuContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: ${colors.background};
	z-index: 1000;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 2rem;
	padding-top: 5rem;
	overflow: hidden;
	transition: 0.3s;
`;

export const MenuCloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 1rem;
	cursor: pointer;
	transition: 0.3s;
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
