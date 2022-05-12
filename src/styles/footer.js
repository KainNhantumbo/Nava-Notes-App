import styled from 'styled-components';

export const FooterStyles = styled.footer`
	width: 100vw;
	height: 9vh;
	position: fixed;
	bottom: 0;
	z-index: 50;
	display: grid;
	place-content: center;
	background-color: rgb(${({ theme }) => theme.background});

	section {
		width: 96vw;
		max-width: 600px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		background: rgb(${({theme})=> theme.white});
		box-shadow: 0 0 5px rgba(${({ theme }) => theme.fullDark}, 0.6);
		border-radius: 12px;
		margin-bottom: 0.8em;
		padding: 0.2em 0;

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 0.2em 0.5em;
			border-bottom: 2px solid transparent;
			cursor: pointer;

			:hover {
				background: rgb(${({ theme }) => theme.white});
				border-bottom: 2px solid rgb(${({ theme }) => theme.primary});
				opacity: 0.9;
				transition: all 0.2s ease-out;
			}

			button {
				border: none;
				background: rgb(${({ theme }) => theme.background});
				border-radius: 50%;
				position: relative;
				padding: 0.6em;
				cursor: pointer;
				display: grid;
				place-content: center;
				width: 30px;
				height: 30px;
				margin: auto 0;

				:hover {
					transform: scale(1.1, 1.1);
					transition: all 0.2s ease-out;
				}

				svg {
					width: 26px;
					height: 26px;
					top: calc(50% - 13px);
					left: calc(50% - 13px);
					fill: rgb(${({ theme }) => theme.primary});
					user-select: none;
					pointer-events: none;
				}
			}
			span {
				font-weight: 600;
				font-size: 0.8rem;
				margin-top: 0.3em;
				letter-spacing: 0.02rem;
				color: rgb(${({ theme }) => theme.text});
			}
		}
	}
`;
