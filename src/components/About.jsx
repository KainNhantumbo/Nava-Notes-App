import { AboutContainer } from "../styles/aboutStyles.module";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <section>
          <span>Simple Notes App</span>
        </section>
        <section>
        <span>App Version:</span> 0.0.7 (beta)
        </section>
        <section>
        <span>Developer:</span> Kain Nhantumbo
        </section>
      </div>
    </AboutContainer>
  );
}

export default About;