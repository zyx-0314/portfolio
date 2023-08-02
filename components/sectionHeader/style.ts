import styled from '@emotion/styled';
import { colors } from '../variables';

export const StyleSectionHeader = styled.div`
	align-items: center;
	display: flex;
	gap: 1.125rem; // 18px / $base-font-size
	position: relative;

	.number {
		height: 2.143rem; // 34.29px / $base-font-size
		position: relative;
		width: 2rem; // 32px / $base-font-size
	}

	.overlap-group {
		border: 0.188rem solid; // 3px / $base-font-size
		border-color: #66748e;
		border-radius: 0.313rem; // 5px / $base-font-size
		height: 2.125rem; // 34px / $base-font-size
		position: relative;
		width: 1.875rem; // 30px / $base-font-size
	}

	.element {
		color: #d4deee;
		font-family: 'Poppins-Bold', Helvetica;
		font-size: 0.875rem; // 14px / $base-font-size
		font-weight: 700;
		height: 1.313rem; // 21px / $base-font-size
		left: 0.125rem; // 2px / $base-font-size
		letter-spacing: 0.044rem; // 0.7px / $base-font-size
		line-height: normal;
		position: absolute;
		text-align: center;
		top: 0.25rem; // 4px / $base-font-size
	}

	.frame {
		align-items: center;
		display: flex;
		flex: 1;
		flex-grow: 1;
		gap: 0.563rem; // 9px / $base-font-size
		position: relative;
	}

	.title {
		color: var(--variable-collection-accent);
		font-family: 'Poppins-Bold', Helvetica;
		font-size: 1.75rem; // 28px / $base-font-size
		font-weight: 700;
		letter-spacing: 0.088rem; // 1.4px / $base-font-size
		line-height: normal;
		margin-top: -0.063rem; // -1px / $base-font-size
		position: relative;
	}

	.line {
		border: 0.15rem ${colors.primary} solid;
		border-radius: 25px;
		width: 10rem;
	}
`;
