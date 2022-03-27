import { AboutContainer } from "../styles/about";
import { HiCode, HiPuzzle } from 'react-icons/hi';
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const About = () => {
  const colors = useContext(ThemeContext);
  return (
    <AboutContainer {...colors} >
      <div>
        <section>
          <span>
          &copy; 2022 Nava Notes App
          </span>
        </section>
        <section>
          <span>
            App Version:
            <HiPuzzle />
          </span> 0.0.9 (beta)
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