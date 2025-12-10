import Card from './Card'
import Container from '../Shared/Container'

const Tutors = () => {
  return (
    <Container>
      <div className='pt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <Card />
        <Card />
        <Card />
        <Card />
    
      </div>
    </Container>
  )
}

export default Tutors
