import { colors } from './../../../components/variables/index';
import styled from '@emotion/styled';

export const ProjectContainer = styled.div<{ value: number }>`
	display: flex;
	${({ value }) =>
		value % 2 ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
`;

export const ProjectContentContainer = styled.div<{ image?: string }>`
	border: 2px solid ${colors.white};
	border-radius: 5px;
	width: 85%;
	background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
	background-size: cover;
	min-height: 300px;
	transition: all ease-in-out 0.15s;

	p {
		font-size: 0.9rem;
	}

	#number {
		position: relative;
		opacity: 0;
		bottom: 4rem;
		left: 1rem;
		transition: all ease-in-out 0.2s;
	}

	#content {
		position: relative;
		top: 2rem;
		transition: all ease-in-out 0.2s;
	}

	#hidden {
		opacity: 0;
		transition: all ease-in-out 0.2s;
	}

	#cover {
		background: linear-gradient(30deg, #262335 0.03%, #262335bf 100%);
		transition: all ease-in-out 0.2s;
	}

	&:hover {
		transform: translate(-6px, -6px);
		box-shadow: 6px 6px ${colors.white};

		#number {
			bottom: 5rem;
			opacity: 1;
		}

		#content {
			top: 0;
		}

		#hidden {
			opacity: 1;
		}

		#cover {
			background: linear-gradient(
				30deg,
				rgb(38, 35, 53) 35.42%,
				rgba(38, 35, 53, 0.75) 100%
			);
		}
	}

	@media (max-width: 1024px) {
		width: 100%;
	}

	@media (max-width: 768px) {
		#number {
			opacity: 1;
			font-size: 5rem;
			bottom: 2rem;
		}

		#content {
			top: 0;
		}

		#hidden {
			opacity: 1;
		}

		&:hover {
			#number {
				bottom: 4rem;
			}

			#cover {
				background: linear-gradient(30deg, #262335 0.03%, #262335bf 100%);
				transition: all ease-in-out 0.2s;
			}
		}
	}
`;

export const CoverStyled = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	padding: 1rem;
`;

export const ProjectNumber = styled.span`
	font-size: 10rem;
	font-weight: 700;
	letter-spacing: 0.2rem;
`;

export const ProjectContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 1rem;
	justify-content: flex-end;

	p {
		font-size: 1.2rem;
	}

	@media (max-width: 1024px) {
		p {
			font-size: 0.8rem;
		}
	}
`;

export const ContentHead = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 3rem;
		font-weight: 700;
		color: ${colors.primary};
		line-height: 3.2rem;
	}

	h3 {
		letter-spacing: 3px;
		font-size: 1rem;
		text-transform: uppercase;
	}

	@media (max-width: 1024px) {
		h2 {
			font-size: 2rem;
			line-height: 2.5rem;
		}

		h3 {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 1.5rem;
			line-height: 1.5rem;
		}

		h3 {
			font-size: 0.6rem;
		}
	}
`;

export const TechStack = styled.li`
	border: 1px solid ${colors.primary};
	border-radius: 25px;
	padding: 0.5rem 1rem;
	font-size: 0.7rem;
`;

export const TechStackList = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	flex-wrap: wrap;
`;
