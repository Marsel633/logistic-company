import { DefaultLightButton } from "@/ui-kit";
import styles from "./Homepage.module.scss";
import { Subtitle, Title } from "@/components";

const Home = () => {
  return (
    <section className={styles.homepage__wrapper}>
      <div className={`${styles.homepage} container`}>
        <Subtitle text="Logistics & Supply Chain Solutions" />
        <Title
          text="Your Gateway to any Destination in the World"
          width="550px"
        />
        <p>
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>
        <DefaultLightButton>
          Explore More
        </DefaultLightButton>
      </div>
    </section>
  );
};

export default Home;
