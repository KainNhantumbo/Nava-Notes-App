import styled from 'styled-components';

export const InterfaceStyles = styled.section`
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
	background: rgba(${({ theme }) => theme.fullDark}, 0.2);
	backdrop-filter: blur(5px);
	position: fixed;
	top: 0;
	right: 0;

	.heading {
		display: flex;
		justify-content: center;
		background: rgb(${({ theme }) => theme.background});
		padding: 15px;
		gap: 2em;
		position: relative;
		border-radius: 0 0 22px 22px;

		button {
			width: 26px;
			height: 26px;
			border-style: none;
			border-radius: 50%;
			display: grid;
			place-content: center;
			position: absolute;
			outline: none;
			top: 0.7em;
			left: 2em;
			background: rgb(${({ theme }) => theme.seconday});

			:hover {
				background: rgb(${({ theme }) => theme.text});
				svg {
					color: rgb(${({ theme }) => theme.white});
				}
			}

			svg {
				width: 20px;
				height: 20px;
				stroke-width: 1px;
				color: rgb(${({ theme }) => theme.fullDark});
			}
		}

		h5 {
			font-weight: 500;
			font-size: 1.2rem;
			user-select: none;
			color: rgb(${({ theme }) => theme.text});
		}
	}

	.toolbar {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin: 0 auto;
		width: 90%;
		max-width: 400px;
		border-radius: 0 0 5px 5px;
		padding: 8px 10px;
		background: rgb(${({ theme }) => theme.background});

		div {
			display: flex;
			justify-content: flex-start;
			gap: 0.5em;

			button {
				position: relative;
				border-style: none;
				padding: 0.5em 1em;
				border-radius: 5px;
				background: transparent;
				outline: none;
				color: rgb(${({ theme }) => theme.text});

				:hover {
					background: rgba(${({ theme }) => theme.primary}, 0.3);
					transition: all 100ms ease-out;
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
	}
`;
