import { colors } from './../variables';
import styled from '@emotion/styled';

export const LinedButton = styled.div`
	font-size: 0.8rem;
	padding: 10px 15px;
	position: relative;
	overflow: hidden;
	transition: all 0.2s ease-in-out;

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
		cursor: pointer;
		color: ${colors.primary};

		hr {
			border-bottom: 2px solid ${colors.primary};
			width: 100%;
		}
	}
`;

export const PopButton = styled.div`
	font-size: 0.8rem;
	padding: 10px 15px;
	cursor: pointer;
	border: 1px solid ${colors.primary};
	background-color: transparent;
	border-radius: 5px;
	color: #fff;
	transition: all ease-in-out 0.1s;

	&:hover {
		transform: translate(-3px, -3px);
		box-shadow: 3px 3px ${colors.primary};
	}
`;
