import React from "react"
import styled from "styled-components"

import Offering from '../components/Offering'
import Bio from '../components/Bio'

import StyledBackgroundSection from '../components/StyledBackgroundSection'

export default () => (
  <div>
  <StyledBackgroundSection />
  <Container>
    <Offering
      imageSrc={`TankerDrop.png`}
      title={`Field Exercises`}
      tagline={`
      In-field training exercises developed specifically for your team, based on real world scenarios.`}
      points={[
        `Live simulation fire exercises`,
        `Performance review and evaluation`,
        `Integration with current wildland firefighters`,
        `Ground tactics and strategy`,
      ]}
      pictureFirst={true}
    />
    <Offering
      imageSrc={`classroom.png`}
      title={`Classroom`}
      tagline={`
      An engaging course curriculum taught by experts with decades of firefighter training and education experience.
      `}
      points={[
        `Incident command system`,
        `Fire traffic area`,
        `Sand table exercises`,
        `Fire anatomy/terminology`,
        `Initial attack & size up`
      ]}
      pictureFirst={false}
    />
    <Bios id="bios">
      <Bio 
        imageSrc={`pat/pat_3.png`}
        name={`Pat Basch`}
      />
      <Bio 
        imageSrc={`tony/tony_1.png`}
        name={`Tony Duprey`}
      />
      <Bio 
        imageSrc={`gus/gus_1.png`}
        name={`Gus Johnson`}
      />
      <Bio 
        imageSrc={`joel/joel_7.png`}
        name={`Joel Lane`}
      />
    </Bios>
  </Container>
  </div>

)



const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`

const Bios = styled.div`
  display: flex;
  flex-direction: row;
  height:100vh;
`

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage
