import { AboutContainer } from "../styles/aboutStyles.module";
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <section>
          <span>
          &copy; 2022 Simple Notes App
          </span>
        </section>
        <section>
          <span>
            App Version:
            <HiPuzzle />
          </span> 0.0.8 (beta)
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