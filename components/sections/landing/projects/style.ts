import styled from '@emotion/styled';
import { colors } from '@/components/ui/variables';

export const ProjectContainer = styled.div<{ value: number }>`
	display: flex;
	${({ value }) =>
		value % 2 ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
`;

export const ProjectContentContainer = styled.div`
	border: 2px solid ${colors.white};
	border-radius: 5px;
	width: 85%;
	transition: all ease-in-out 0.15s;
	position: relative;

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
		p {
			font-size: 0.75rem;
		}

		#number {
			opacity: 1;
			bottom: 1.5rem;
		}

		#content {
			top: 0;
		}

		#hidden {
			opacity: 1;
		}

		&:hover {
			#number {
				bottom: 3rem;
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
	height: fit-content;
	border-radius: 5px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	padding: 1rem;
	position: relative;
`;

export const ProjectNumber = styled.span`
	font-size: 10rem;
	font-weight: 700;
	letter-spacing: 0.2rem;

	@media (max-width: 1024px) {
		font-size: 8rem;
	}

	@media (max-width: 768px) {
		font-size: 6rem;
	}

	@media (max-width: 425px) {
		font-size: 4rem;
	}
`;

export const ProjectContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 1rem;
	justify-content: flex-end;
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
			font-size: 0.85rem;
		}
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}

		h3 {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 425px) {
		h2 {
			font-size: 1rem;
		}

		h3 {
			font-size: 0.75rem;
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
