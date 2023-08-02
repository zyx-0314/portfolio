import styled from '@emotion/styled';
import { colors } from '../variables';

interface FloaterProps {
	direction: string;
}

export const FloaterBorder = styled.div<FloaterProps>`
	position: fixed;
	bottom: 0;
	display: flex;
	${(props) =>
		props.direction === 'left'
			? 'justify-content: flex-start;'
			: 'justify-content: flex-end;'}

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
	}
`;

export const PopupIcon = styled.a`
	display: inline-block;
	transition: transform ease-in-out 0.1s, box-shadow ease-in-out 0.1s;
	color: inherit;

	&:hover {
		transform: translate(0, -4px);
		scale: 1.3;
		color: ${colors.primary};
	}
`;
