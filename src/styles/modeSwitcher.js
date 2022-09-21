import styled from 'styled-components';

export const ModeSwitcherStyles = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 90%;
		margin: 0.5em 0;
		max-width: 400px;
		position: relative;
		padding: 10px 8px;
		line-height: 2em;
		border-radius: 12px;
		user-select: none;
		box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 1);
		background: rgb(${({ theme }) => theme.white});

		:hover {
			box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
			transition: all 200ms ease;
		}

		label {
			padding-left: 2.5em;
			color: rgb(${({ theme }) => theme.text});
			position: relative;

			:hover {
				color: rgb(${({ theme }) => theme.text});
				cursor: pointer;
			}

			svg {
				width: 1.6em;
				height: 1.6em;
				position: absolute;
				top: 0.3em;
				left: 0.5em;
				color: rgb(${({ theme }) => theme.text});
			}
		}

		input[type='checkbox'] {
			position: relative;
			width: 45px;
			height: 20px;
			appearance: none;
			-moz-appearance: none;
			background: rgba(${({ theme }) => theme.primary}, 0.1);
			outline: none;
			border-radius: 15px;
			box-shadow: inset 0 0 5px rgba(${({ theme }) => theme.fullDark}, 0.2);
			transition: 0.5s ease;
			margin-top: 0.4em;
			margin-right: 0.2em;

			:hover {
				cursor: pointer;
			}

			:checked {
				background: rgb(${({ theme }) => theme.primary});
			}

			::after {
				content: '';
				position: absolute;
				width: 20px;
				height: 20px;
				transform: scale(1.1);
				border-radius: 50%;
				top: 0;
				left: 0;
				background: rgba(${({ theme }) => theme.primary}, 0.8);
				box-shadow: 0 0 5px rgba(${({ theme }) => theme.fullDark}, 0.6);
				transition: all 0.2s ease;
			}

			:checked::after {
				transform: scale(1.1) translateX(25px);
				background: rgb(${({ theme }) => theme.white});
			}
		}
	}
`;
