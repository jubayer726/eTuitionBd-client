import HeroSection from '../../components/Home/HeroSection/HeroSection'
import HowItWorks from '../../components/Home/HowItWork/HowItWorks';
import OurTutors from '../../components/Home/OurTutors/OurTutors'
import Tuitions from '../../components/Home/Tuitions';
import TuitionTypes from '../../components/Home/TuitionType/TuitionType';
import TutorList from '../TutorSection/TutorList';


const toutorsPromise = fetch('/tutors.json')
.then(res=>res.json());
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Tuitions/>
      <TutorList></TutorList>
      <TuitionTypes/>
      <OurTutors toutorsPromise={toutorsPromise}></OurTutors>
      <HowItWorks/>
    </div>
  )
}

export default Home
