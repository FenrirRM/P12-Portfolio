import { useTheme } from "../../utils/hooks/index";
import DownloadBtn from "../../components/downloadbtn/downloadbtn";
import GitHub from "../../assets/icones/github.png";
import DarkGitHub from "../../assets/icones/darkgithub.png";
import ImgDev from "../../assets/img/dev.webp";
import "../../sass/containers/_introduction.scss";

const Introduction = () => {
  const { darkMode } = useTheme();

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
        <p>
          Je suis Mael Rehoudja, développeur web junior basé en côte d'or. Afin
          de suivre ma passion pour les nouvelles technologies et la
          programmation, j’ai intégré la formation certifiante intégrateur web
          niveau Bac +2 d’OpenClassrooms au cours de laquelle j’ai acquis des
          compétences solides en HTML, CSS, JavaScript et React.
        </p>
        <p>
          En tant que développeur Front-end, je suis constamment en train
          d'apprendre et de m'adapter aux dernières technologies pour offrir des
          solutions de qualité à mes clients.
        </p>
        <p>
          Je suis très enthousiaste à l’idée de découvrir de nouvelles
          opportunités et collaborations pour créer des solutions web de
          qualité.
          <br />
          Contactez-moi pour discuter de votre projet.
        </p>
        <div className="intro__desc-liens">
          <a href="https://github.com/FenrirRM" target="blank">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>
        </div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <img src={ImgDev} alt="Portrait de Matthieu Bonjour" />
      </div>
    </section>
  );
};

export default Introduction;
