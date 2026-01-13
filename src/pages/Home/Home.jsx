import HeroSection from '../../components/Home/HeroSection/HeroSection'
import HowItWorks from '../../components/Home/HowItWork/HowItWorks';
import OurServices from '../../components/Home/OurServices/OurServices';
import OurTutors from '../../components/Home/OurTutors/OurTutors'
import SubjectSpecialist from '../../components/Home/SubjectSpecialist/SubjectSpecialist';
import TuitionJob from '../../components/Home/TuitionJob/TuitionJob';
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
      <TuitionJob/>
      <SubjectSpecialist/>
      <TutorList></TutorList>
      <TuitionTypes/>
      <OurTutors toutorsPromise={toutorsPromise}></OurTutors>
      <OurServices/>
      <HowItWorks/>
    </div>
  )
}

export default Home
