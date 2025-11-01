import { FaGithub } from 'react-icons/fa';
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { AboutContainer as Container } from '../styles/about';
import { version, author, license } from '../../package.json';

const About = () => (
  <Container>
    <div>
      <section>
        <span>Copyright &copy; {new Date().getFullYear()} Nava Notes App</span>
      </section>
      <section>
        <span>
          App Version:
          <HiPuzzle />
        </span>
        {version}
      </section>
      <section>
        <span>
          Developer:
          <HiCode />
        </span>
        {author.name}
      </section>
      <section>
        <span>
          <a href={author.github} target={'_blank'} rel={'noreferrer'}>
            {author.github}
          </a>
          <FaGithub />
        </span>
      </section>
      <section>Licensed under {license} License</section>
    </div>
  </Container>
);

export default About;
