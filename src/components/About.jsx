import { AboutContainer } from "../styles/about";
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <section>
          <span>
          Copyright &copy; 2022 Nava Notes App
          </span>
        </section>
        <section>
          <span>
            App Version:
            <HiPuzzle />
          </span> 1.0.0 (Naftar)
        </section>
        <section>
          <span>
            Developer:
            <HiCode />
          </span> Kain Nhantumbo
        </section>
        <section>
          <span>
            <a href="https://github.com/KainNhantumbo">github.com/KainNhantumbo</a>
            <FaGithub />
          </span>
        </section>
        <section>
          Licensed by MIT
        </section>
      </div>
    </AboutContainer>
  );
}

export default About;