import { AboutContainer } from '../styles/about';
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const About = () => (
	<AboutContainer>
		<div>
			<section>
				<span>Copyright &copy; 2022 Nava Notes App</span>
			</section>
			<section>
				<span>
					App Version:
					<HiPuzzle />
				</span>
				1.2.1
			</section>
			<section>
				<span>
					Developer:
					<HiCode />
				</span>
				Kain Nhantumbo
			</section>
			<section>
				<span>
					<a
						href='https://github.com/KainNhantumbo'
						target={'_blank'}
						rel={'noreferrer'}
					>
						github.com/KainNhantumbo
					</a>
					<FaGithub />
				</span>
			</section>
			<section>Licensed under MIT License</section>
		</div>
	</AboutContainer>
);

export default About;
