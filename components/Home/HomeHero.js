import Image from "next/image";
import Rocket from "@/assets/rocket.png";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className='section'>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Cryptocurrency Exchange </h1>
          <div className='underline'></div>
          <h3>Journey Starts HERE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            adipiscing porta aliquet eget pellentesque suspendisse. Tortor donec
            vivamus vestibulum donec tristique vestibulum faucibus scelerisque
            lobortis. Elementum, egestas fermentum sit egestas. Pulvinar mollis
            sed aliquet in vulputate ac risus nisi, id. Eros, at vitae id cursus
            amet scelerisque sit. Enim lacinia in tellus tellus in elit aenean
            volutpat. Ac cursus enim risus nec commodo sollicitudin.
          </p>
          <button className='primaryBtn'>Get Started</button>
        </div>
        <div className={styles.imgContainer}>
          <Image width={550} src={Rocket} alt='Rocket image' />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
