import styled from '@emotion/styled';
import { colors } from '../variables';

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
