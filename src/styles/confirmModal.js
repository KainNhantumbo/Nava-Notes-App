import styled from 'styled-components';

export const ModalContainer = styled.div`
	* {
		box-sizing: border-box;
	}

	@keyframes slideUp {
		from {
			transform: scale(0.9);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
	animation: slideUp 300ms ease-out forwards;
	width: 100vw;
	height: 100vh;
	z-index: 500;
	background: rgba(${({ theme }) => theme.background}, 0.2);
	backdrop-filter: blur(5px);
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
		box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
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
		font-weight: 500;
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
