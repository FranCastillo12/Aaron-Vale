import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import CouplePhoto from "../components/CouplePhoto";
import Itinerary from "../components/Itinerary";
import Details from "../components/Details";
import Activities from "../components/Activities";

export default function MainContent() {
  return (
    <>
      <Hero />
      <CountDown fecha="2027-01-16T13:00:00" />
      <CouplePhoto />
      <Itinerary />
      <Details />
      <Activities />
    </>
  );
}
