import styled from 'styled-components';

export const ModalContainer = styled.div`
	* {
		box-sizing: border-box;
	}
	width: 100vw;
	height: 100vh;
	z-index: 500;
	background: rgba(${({ theme }) => theme.fullDark}, 0.4);
	backdrop-filter: blur(2px);
	position: fixed;
	top: 0;
	right: 0;
	display: grid;
	place-content: center;
	place-items: center;

	.icon {
		color: rgb(${({ theme }) => theme.text});
		svg {
			width: 40px;
			height: 40px;
		}
	}

	.container {
		background: rgb(${({ theme }) => theme.white});
		box-shadow: 0 0 20px 6px rgba(${({ theme }) => theme.shadows}, 0.5);
		width: 265px;
		height: fit-content;
		border-radius: 10px;
		padding: 10px;
		display: flex;
		justify-items: center;
		align-items: center;
		flex-direction: column;
		gap: 20px;
	}

	.info {
		color: rgb(${({ theme }) => theme.text});
		font-weight: 500;
		user-select: none;
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: 10px;

		button {
			position: relative;
			border-style: none;
			padding: 0.5em 1em;
			border-radius: 5px;
			background: rgba(${({ theme }) => theme.primary}, 0.3);
			outline: none;
			color: rgb(${({ theme }) => theme.text});

			:hover {
				background: rgba(${({ theme }) => theme.secondary}, 0.3);
				transition: all 200ms ease-out;
				cursor: pointer;
			}

			svg {
				width: 1.1em;
				height: 1.1em;
				position: absolute;
				top: 0.55em;
				right: 0.6em;
			}

			span {
				color: rgb(${({ theme }) => theme.text});
				font-weight: 600;
				padding-right: 1em;
			}
		}
	}
`;
