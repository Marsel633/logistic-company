import { DefaultLightButton } from "@/ui-kit";
import styles from "./Homepage.module.scss";
import { ServicesCard, Subtitle, Title } from "@/components";
import {
  BoxIcon,
  MoneyIcon,
  PlaneIcon,
  ShipIcon,
  TruckIcon,
  WarehousIcon,
  colors,
} from "@/config";
import Image from "next/image";

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
      <section className={styles.provide}>
        <Image
          src="/containers.png"
          height={400}
          width={1470}
          alt="containers image"
        />
        <div className={styles.provide__info}>
          <div className={styles.provide__info__intro}>
            <Subtitle
              text="Why Us"
              textColor={colors.black}
              bgColor={colors.subtitleLightBg}
            />
            <Title
              text="We provide full range global logistics solution"
              width="90%"
              textColor={colors.black}
              fontSize="35px"
              fontWeight="600"
            />
            <div className={styles.provide__info_content}>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
            </div>
            <div className={styles.provide__time}>
              <BoxIcon />
              <p>Delivery on Time</p>
            </div>
            <div className={styles.provide__cost}>
              <MoneyIcon />
              <p>Optimized Travel Cost</p>
            </div>
          </div>
          <div className={styles.provide__images}>
            <Image
            className={styles.plane_image}
              src="/plane.png"
              height={400}
              width={480}
              alt="containers image"
            />
           <div  className={styles.women_image}>
              <Image
                src="/women.png"
                height={350}
                width={400}
                alt="containers image"
              />
           </div>
          </div>
        </div>
          <div className={styles.provide__statistic}>
            <div className={styles.statistic__packages}>
              <p className={styles.statistic__counts}>1294</p>
              <p className={styles.statistic__cube}></p>
              <p className={styles.statistic__title}>Delivered Packages</p>
            </div>
            <div className={styles.statistic__clients}>
              <p className={styles.statistic__counts}>3594</p>
              <p className={styles.statistic__cube}></p>
              <p className={styles.statistic__title}>Satisfied Clients</p>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
