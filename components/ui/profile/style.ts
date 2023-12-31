import styled from '@emotion/styled';
import { colors } from '../variables';

export const StyledProfile = styled.div`
	align-items: center;
	border-radius: 1.5rem;
	display: flex;
	gap: 0.3rem;
	height: 17rem;
	justify-content: center;
	padding: 0.8rem 0.7rem;
	position: relative;
	width: 17rem;

	.group {
		position: relative;
		height: 14rem;
		width: 15rem;
		transition: all 0.1s ease-in-out;

		.overlap-group {
			position: relative;
			height: 14rem;

			.rectangle-1,
			.rectangle-2,
			.rectangle-3,
			.rectangle-4 {
				transition: all 0.1s ease-in-out;
				border: 1px solid;
				border-color: #fcfcfc;
				border-radius: 0.3rem;
				height: 5rem;
				position: absolute;
				width: 5rem;
			}

			.rectangle-1 {
				transition: all 0.1s ease-in-out;
				left: 0;
				top: 0;
			}

			.rectangle-2 {
				transition: all 0.1s ease-in-out;
				left: 9rem;
				top: 0;
			}

			.rectangle-3 {
				transition: all 0.1s ease-in-out;
				left: 0;
				top: 9rem;
			}

			.rectangle-4 {
				transition: all 0.1s ease-in-out;
				left: 9rem;
				top: 9rem;
			}

			.image {
				transition: all 0.1s ease-in-out;
				height: 12.5rem;
				left: 0.8rem;
				top: 0.8rem;
				width: 12.5rem;
				background-color: #d9d9d9;
				border: 1px solid;
				border-color: #fcfcfc;
				border-radius: 0.3rem;
				position: absolute;

				img {
					object-fit: fill;
				}
			}
		}

		&:hover {
			.overlap-group {
				.rectangle-1,
				.rectangle-2,
				.rectangle-3,
				.rectangle-4 {
					border: 2px solid;
					border-color: ${colors.primary};
				}

				.rectangle-1 {
					left: -1rem;
					top: -1rem;
				}

				.rectangle-2 {
					left: 10rem;
					top: -1rem;
				}

				.rectangle-3 {
					left: -1rem;
					top: 10rem;
				}

				.rectangle-4 {
					left: 10rem;
					top: 10rem;
				}

				.image {
					height: 14rem;
					width: 14rem;
					left: 0;
					top: 0rem;
				}
			}
		}
	}
`;
