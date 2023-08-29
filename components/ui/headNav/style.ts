import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { colors } from '../variables';

export const HeaderStyles = styled(motion.header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: fit-content;
	position: fixed;
	width: 100%;
	padding: 1rem 2rem 0.5rem 2rem;
	z-index: 1000;
	background: #ffffff15;

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

interface MenuContainerProps {
	isOpen: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
	display: none;

	@media (max-width: 768px) {
		display: block;
		position: fixed;
		top: 0;
		width: 50%;
		height: 100vh;
		background-color: ${colors.background};
		z-index: 1000;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
		padding-top: 5rem;
		overflow: hidden;
		animation: ${({ isOpen }) =>
			isOpen ? 'slideIn 0.5s forwards' : 'slideOut 0.8s forwards'};

		@keyframes slideIn {
			from {
				transform: translateX(200%);
			}
			to {
				transform: translateX(100%);
			}
		}

		@keyframes slideOut {
			from {
				transform: translateX(100%);
			}
			to {
				transform: translateX(200%);
			}
		}

		li {
			animation: ${({ isOpen }) => {
				return isOpen
					? 'slideInButton 1.5s forwards'
					: 'slideOutButton 0.5s forwards';
			}};

			@keyframes slideInButton {
				from {
					transform: translateY(200%);
					opacity: 0;
				}
				to {
					transform: translateY(0%);
					opacity: 1;
				}
			}

			@keyframes slideOutButton {
				from {
					transform: translateY(0%);
					opacity: 1;
				}
				to {
					transform: translateY(200%);
					opacity: 0;
				}
			}
		}
	}
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

	@media (max-width: 480px) {
		img {
			width: 35px;
		}
	}
`;
