import { AboutContainer } from "../styles/aboutStyles.module";
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <section>
          <span>
            Simple Notes App
          </span>
        </section>
        <section>
          <span>
            App Version:
            <HiPuzzle />
          </span> 0.0.7 (beta)
        </section>
        <section>
          <span>
            Developer:
            <HiCode />
          </span> Kain Nhantumbo
        </section>
        <section>
          <span>
            github.com/KainNhantumbo
            <FaGithub />
          </span>
        </section>
      </div>
    </AboutContainer>
  );
}

export default About;