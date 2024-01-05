import { DefaultLightButton } from "@/ui-kit";
import styles from "./Homepage.module.scss";
import { ServicesCard, Subtitle, Title } from "@/components";
import { PlaneIcon, ShipIcon, TruckIcon, WarehousIcon, colors } from "@/config";

const Home = () => {
  return (
    <>
      <section className={styles.homepage__wrapper}>
        <div className={`${styles.homepage} container`}>
          <Subtitle
            text="Logistics & Supply Chain Solutions"
            bgColor={colors.subtitleDarkBg}
            textColor={colors.white}
          />
          <Title
            text="Your Gateway to any Destination in the World"
            width="550px"
            textColor={colors.white}
            fontSize="60px"
            fontWeight="700"
          />
          <p>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
          <DefaultLightButton>Explore More</DefaultLightButton>
        </div>
      </section>
      <section className={`${styles.services} container`}>
        <div className={styles.services__title}>
          <Subtitle
            text="What We Do"
            bgColor={colors.subtitleLightBg}
            textColor={colors.black}
          />
          <Title
            text="Safe & Reliable Cargo Solutions"
            width="294px"
            textColor={colors.black}
            fontSize="35px"
            fontWeight="600"
          />
        </div>
        <div className={styles.services__types}>
          <ServicesCard
            icon={<ShipIcon />}
            title="Sea Transport Services"
            description="Following the quality of our service thus having gained trust of our many clients."
          />
          <ServicesCard
            icon={<WarehousIcon />}
            title="Warehousing Services"
            description="Following the quality of our service thus having gained trust of our many clients."
          />
          <ServicesCard
            icon={<PlaneIcon />}
            title="Air Fright Services"
            description="Following the quality of our service thus having gained trust of our many clients."
          />
          <ServicesCard
            icon={<TruckIcon />}
            title="Local Shipping Services"
            description="Following the quality of our service thus having gained trust of our many clients."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
