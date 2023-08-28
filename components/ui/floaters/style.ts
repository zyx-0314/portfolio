import styled from '@emotion/styled';
import { colors } from '../variables';

export const FloaterBorder = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: end;
	width: 100%;
	/* padding: 0 2rem; */

	.alignment {
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		position: relative;

		a {
			margin: 0 0 1rem 0;
			letter-spacing: 0.1em;
			font-size: 0.8rem;
			writing-mode: vertical-rl;
			cursor: pointer;

			&:hover {
				color: ${colors.primary};
			}
		}

		&::after {
			content: '';
			display: block;
			width: 2px;
			border-radius: 100%;
			height: 100px;
			background-color: ${colors.primary};
		}

		@media (max-width: 768px) {
			display: none;
		}
	}
`;

export const PopupIcon = styled.a`
	display: inline-block;
	transition: transform ease-in-out 0.1s, box-shadow ease-in-out 0.1s;
	color: inherit;

	svg {
		font-size: 25px;
	}

	&:hover {
		transform: translate(0, -4px);
		scale: 1.3;
		color: ${colors.primary};
	}
`;

export const FloaterContainer = styled.div`
	width: 100%;
`;
