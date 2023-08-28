import styled from '@emotion/styled';

import { DesignControl } from './index';

import { colors } from '@/components/ui/variables';

interface Props {
	designControl?: DesignControl;
}

export const LinedButton = styled.div<Props>`
	${(props) =>
		props.designControl?.fontSize
			? `font-size: ${props.designControl.fontSize};`
			: 'font-size: 0.8rem;'}
	${(props) =>
		props.designControl?.paddingXY
			? `padding: ${props.designControl.paddingXY};`
			: 'padding: 10px 15px;'}
	${(props) =>
		props.designControl?.width
			? `width: ${props.designControl.width};`
			: 'width: fit-content;'}
	position: relative;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
	text-align: center;

	hr {
		border: none;
		border-bottom: 2px solid transparent;
		width: 0;
		position: absolute;
		left: 0;
		bottom: 0;
		transition: all 0.2s ease-in-out;
	}

	&:hover {
		/* cursor: pointer; */
		color: ${colors.primary};

		hr {
			border-bottom: 2px solid ${colors.primary};
			width: 100%;
		}
	}
`;

export const PopButton = styled.div<Props>`
	${(props) =>
		props.designControl?.fontSize
			? `font-size: ${props.designControl.fontSize};`
			: 'font-size: 0.8rem;'}
	${(props) =>
		props.designControl?.paddingXY
			? `padding: ${props.designControl.paddingXY};`
			: 'padding: 10px 15px;'}
	${(props) =>
		props.designControl?.width
			? `width: ${props.designControl.width};`
			: 'width: fit-content;'}
	cursor: pointer;
	border: 1px solid ${colors.primary};
	background-color: transparent;
	border-radius: 4px;
	text-align: center;
	transition: all ease-in-out 0.1s;

	&:hover {
		color: ${colors.primary};
		transform: translate(-4px, -4px);
		box-shadow: 4px 4px ${colors.primary};
	}

	@media (max-width: 768px) {
		color: ${colors.primary};
		font-size: 0.7rem;
	}
`;
