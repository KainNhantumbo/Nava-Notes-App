import styled from 'styled-components';

export const AboutContainer = styled.section`
	@keyframes aboutAnimation {
		0% {
			border: 2px solid rgb(${({ theme }) => theme.primary});
			transition: 0.5s ease-in-out;
		}

		25% {
			border: 2px solid rgb(${({ theme }) => theme.secondary});
			transition: 0.5s ease-in-out;
		}

		50% {
			border: 2px solid rgb(${({ theme }) => theme.shadows});
			transition: 0.5s ease-in-out;
		}

		75% {
			border: 2px solid rgb(${({ theme }) => theme.text});
			transition: 0.5s ease-in-out;
		}

		100% {
			border: 2px solid rgb(${({ theme }) => theme.primary});
			transition: 0.5s ease-in-out;
		}
	}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	div {
		width: 90%;
		max-width: 400px;
		margin: 0.5em 0;
		position: relative;
		padding: 10px 8px;
		line-height: 2em;
		border-radius: 12px;
		color: rgb(${({ theme }) => theme.text});
		border: 2px solid transparent;
		animation: aboutAnimation 3000ms ease-in-out forwards infinite;
		user-select: none;
		box-shadow: 0 0 5px rgb(${({ theme }) => theme.primary});
		background: rgb(${({ theme }) => theme.background});

		section {
			text-align: center;
			font-weight: 600;
			color: rgb(${({ theme }) => theme.primary});
			line-height: 1.6rem;

			span {
				padding: 2px 8px;
				padding-left: 1em;
				border-radius: 12px;
				position: relative;
				color: rgb(${({ theme }) => theme.text});

				svg {
					width: 1.2em;
					height: 1.2em;
					position: absolute;
					top: 0.15em;
					left: -0.4em;
					color: rgb(${({ theme }) => theme.text});
				}
			}
		}
	}
`;
