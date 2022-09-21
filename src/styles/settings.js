import styled from 'styled-components';

export const SettingsContainer = styled.div`
	.settingsBody {
		margin-top: 0.5em;
		margin-bottom: 5em;
		display: grid;
		padding-top: 60px;

		h2 {
			color: rgb(${({ theme }) => theme.primary});
			margin: 0 auto;
			margin-top: 1.2em;
			line-height: 1.8rem;
			font-weight: 500;
			background-color: rgb(${({ theme }) => theme.background});
		}
	}
`;
