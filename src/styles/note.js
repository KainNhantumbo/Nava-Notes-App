import styled from 'styled-components';

export const NoteContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	justify-content: space-between;
	flex-direction: column;
	background: rgb(${({ theme }) => theme.white});
	box-shadow: 0 0 5px rgba(${({ theme }) => theme.fullDark}, 0.6);
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
		background: rgba(${({ theme }) => theme.primary}, 0.8);
		border-radius: 12px;
		text-align: center;
		font-weight: 600;
		color: rgb(${({ theme }) => theme.text});
	}
`;
