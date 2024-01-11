import {
  FeedbackCard,
  ServicesCard,
  Subtitle,
  Title,
  TransportationCard,
} from "@/components";
import { DefaultDarkButton, DefaultLightButton } from "@/ui-kit";
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
import styles from "./Homepage.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
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
        <div className={`${styles.provide__info} container`}>
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
            <div className={styles.women_image}>
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
      <section className={styles.transporting}>
        <Title
          text="Transporting Across The World"
          textColor={colors.title}
          fontSize="35px"
          fontWeight="600"
        />
        <div className={styles.transporting__cards}>
          <TransportationCard
            title="Liquid Transportation"
            desc="Premium Tankers"
            image="/train-for-card.png"
          />
          <TransportationCard
            title="Packaging Solutions"
            desc="Warehouse Management"
            image="/management-for-card.png"
          />
          <TransportationCard
            title="Contract Logistics"
            desc="Road Transportation"
            image="/truck-for-card.png"
          />
          <TransportationCard
            title="Warehouse & Distribution"
            desc="Large Warehouse"
            image="/warehouse-for-card.png"
          />
          <TransportationCard
            title="Specialized Transport"
            desc="Ocean Transports"
            image="/ship-for-card.png"
          />
        </div>
        <div className={styles.transporting__background}></div>
        <DefaultDarkButton>More Work</DefaultDarkButton>
      </section>
      <section className={`${styles.feedbacks} container`}>
        <div className={styles.feedbacks__title}>
          <div>
            <Subtitle
              text="Testimonial"
              textColor={colors.title}
              bgColor={colors.subtitleLightBg}
            />
            <Title
              text="What Our Customer Say"
              fontSize="35px"
              fontWeight="600"
              textColor={colors.title}
            />
          </div>
          <div className={styles.title__arrows}>
            <button>
              <FaArrowLeft />
            </button>
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.feedbacks__content}>
          <FeedbackCard
            image="/user1.png"
            title="Kathleen Smith"
            company="Fuel Company"
            feedback="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            rating={5}
            bgColor={colors.primaryWhite}
            textColor={colors.black}
            feedbackTextColor={colors.text}
          />
          <FeedbackCard
            image="/user2.png"
            title="John Martin"
            company="Restoration Company"
            feedback="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            rating={5}
            bgColor={colors.primaryDarkBlue}
            textColor={colors.white}
            feedbackTextColor={colors.white}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
