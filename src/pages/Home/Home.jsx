import HeroSection from '../../components/Home/HeroSection/HeroSection'
import OurTutors from '../../components/Home/OurTutors/OurTutors'
import Tutors from '../../components/Home/Tutors';

const toutorsPromise = fetch('./tutors.json').then(res=>res.json());
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Tutors/>
      <OurTutors toutorsPromise={toutorsPromise}/>
    </div>
  )
}

export default Home
