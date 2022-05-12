import styled from 'styled-components';

export const UserUIContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	article {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;

		width: 90%;
		max-width: 400px;
		margin-top: 12vh;
		padding: 10px 8px;
		line-height: 2em;
		border-radius: 12px;
		user-select: none;
		box-shadow: 0 0 5px rgb(${({ theme }) => theme.fullDark}, 0.6);
		border-left: 2px solid transparent;
		border-right: 2px solid transparent;
		background: rgb(${({ theme }) => theme.white});

		:hover {
			border-left: 2px solid rgb(${({ theme }) => theme.text});
			border-right: 2px solid rgb(${({ theme }) => theme.text});
		}

		div {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			position: relative;
			svg {
				width: 4em;
				height: 4em;
				top: 0.5em;
				left: 1em;
				position: absolute;
				color: rgb(${({ theme }) => theme.text});
			}
		}
		section {
			display: flex;
			justify-content: flex-end;
			flex-flow: column nowrap;
			padding-left: 7em;
			color: rgb(${({ theme }) => theme.text});
			span {
				padding: 0.2em 0.5em;
				border-radius: 5px;
				:hover {
					background-color: rgb(${({ theme }) => theme.background});
				}
			}
		}
	}
`;
