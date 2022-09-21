import styled from 'styled-components';

export const NoteContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	justify-content: space-between;
	flex-direction: column;
	background: rgb(${({ theme }) => theme.white});
	box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
	margin-bottom: 0.5em;
	padding: 1em;
	border-radius: inherit;
	position: relative;
	overflow: hidden;
	margin-top: 0.9em;
	border: 1px solid transparent;
	color: rgb(${({ theme }) => theme.text});

	:hover {
		border: 1px solid rgba(${({ theme }) => theme.primary}, 0.5);
		transition: 0.2s ease-out;
	}

	.noteTitle {
		overflow: hidden;
		max-width: 75%;
		padding: 0.2em 0;
		font-size: 14pt;
		font-weight: 500;
	}

	.noteContent {
		margin: 0.5em 0;
		word-wrap: break-word;
		line-height: 1.3rem;
		max-width: 95%;
	}

	.noteDate {
		padding: 0.5em;
		font-size: 0.8rem;
		background: rgb(${({ theme }) => theme.shadows});
		border-radius: 12px;
		text-align: center;
		font-weight: 500;
		color: rgb(${({ theme }) => theme.text});
	}

	.buttonsContainer {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		position: absolute;
		top: 0.8em;
		right: 0.8em;
		gap: 0.5em;

		button {
			width: 22px;
			height: 22px;
			border: none;
			background: rgba(${({ theme }) => theme.shadows}, 0.5);
			border-radius: 50%;
			position: relative;
			padding: 10px;
			cursor: pointer;
			display: grid;
			place-content: center;

			&:hover {
				background-color: rgba(${({ theme }) => theme.primary}, 0.5);
				transform: scale(1.1, 1.1);
				transition: all 0.2s ease-out;
			}
			svg {
				width: 20px;
				height: 20px;
				fill: rgb(${({ theme }) => theme.primary});
				user-select: none;
				pointer-events: none;
			}
		}
	}
`;
