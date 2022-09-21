import styled from 'styled-components';

export const HeaderStyled = styled.div`
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	background: linear-gradient(
		120deg,
		rgb(${({ theme }) => theme.secondary}) 12%,
		rgb(${({ theme }) => theme.primary}) 160%
	);
	box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.5);
	position: fixed;
	top: 0;
	z-index: 50;
	color: rgb(${({ theme }) => theme.text});
	border-radius: 0 0 12px 12px;

	div {
		position: absolute;
		top: 1em;
		left: 0.5em;

		svg {
			width: 2em;
			height: 2em;
			color: rgb(${({ theme }) => theme.neutral});
		}
	}

	h1 {
		font-weight: 600;
		line-height: 2rem;
		user-select: none;
		padding-left: 1.8em;
		font-size: 1.6rem;
		color: rgb(${({ theme }) => theme.neutral});
	}

	button {
		position: relative;
		width: 90%;
		max-width: 15em;
		border-style: none;
		border-radius: 12px;
		margin: 0 auto;
		margin-bottom: 1.2em;
		padding: 5px;
		font-weight: 600;
		color: rgb(${({ theme }) => theme.text});
		background-color: rgb(${({ theme }) => theme.background});

		:hover {
			box-shadow: 0 0 20px 1px rgba(${({ theme }) => theme.shadows}, 0.5);
			transition: 0.2s ease-out;
			cursor: pointer;
		}

		svg {
			position: absolute;
			left: 10px;
			top: 5px;
			width: 20px;
			height: 20px;
			color: rgba(${({ theme }) => theme.primary}, 0.7);
		}
	}
`;
