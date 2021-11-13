import React from "react"
import styled from "styled-components"

import Offering from '../components/Offering'
import OrgBanner from '../components/OrgBanner'
import Bio from '../components/Bio'
import { 
  GusBio,
  JoelBio,
  GusImages,
  JoelImages,
  KenBio,
  KenImages

} from '../components/BioContent'

import Contact from '../components/Contact'
import Footer from '../components/Footer'


import StyledBackgroundSection from '../components/StyledBackgroundSection'

export default () => (
  <div>
  <StyledBackgroundSection />
  <Container>
    <SectionTitle id={`whatwedo`} >What We Do</SectionTitle>
    < Hr />
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
    <OrgBanner 
      images={[
        `orgs/usfs.png`,
        `orgs/cafire.png`,
        `orgs/nafri.png`,
        `orgs/nwcg.png`,
        `orgs/ocfa.jpeg`,
      ]}
    />
    <SectionTitle id={`bios`} >Our Team</SectionTitle>
    < Hr />
    <SectionSubtitle >Over a century of combined wildland firefighting experience.</SectionSubtitle>
    <BioSection>
    <Bios>
      <Bio 
        imageSrc={`ken/ken_14.png`}
        name={`Kenneth Perry`}
        bio={KenBio}
        images={KenImages}
      />
      <Bio 
        imageSrc={`gus/gus_1.png`}
        name={`Gus Johnson`}
        bio={GusBio}
        images={GusImages}
      />
      <Bio 
        imageSrc={`joel/joel_7.png`}
        name={`Joel Lane`}
        bio={JoelBio}
        images={JoelImages}
      />
    </Bios>
    </BioSection>
    <Contact id={`contact`} />
    <Footer text={`© 2020  |  info@anchorflankpinch.com`} />
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

const Bios = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;

`

const BioSection = styled.h1`
  font-weight: 100;
  margin-bottom: 10%;

`
const Hr = styled.hr`
background: rgba(144, 144, 144, 0.5);
content: '';
display: inline-block;
height: 1px;
margin-top: 1.5em;
width: 6em;
`

const SectionTitle = styled.h1`
    font-family: Tinos, serif;
    font-weight: 100;
    margin-top: 10%;

`

const SectionSubtitle = styled.p`
    font-family: Tinos, serif;
    font-weight: 100;
    text-align: center;
`


