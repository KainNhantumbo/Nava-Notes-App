import styled from 'styled-components';

export const ModalContainer = styled.section`
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

  

`;
