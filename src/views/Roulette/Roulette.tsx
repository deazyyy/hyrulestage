import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout,Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: '0', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '1', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '2', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '3', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '4', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '5', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '6', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '7', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '8', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '9', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '10', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '11', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '12', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '13', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '14', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '15', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '16', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '17', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '18', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '19', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
  { option: '20', style: { backgroundColor: '#554137', textColor: 'transparent' } },
  { option: '21', style: { backgroundColor: '#3a3532', textColor: 'transparent' } },
]
const mustSpin = true;
const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#2d291f';
const outerBorderWidth = 4;
const innerBorderColor = '#3a3532';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#2d291f';
const radiusLineWidth = 4;
const fontSize = 17;
const textDistance = 0;

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Roulette: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <div className="roulettehero"> 
        <div className="rouletteherow rouletteherow1">
          <Hero>
            <div className="text homeheading">
              <img src="images/hyrule/ribbonbg.png" alt="img" /> 
              <div>Roulette</div>
            </div>
            <Text className="lgraycolor">Play to earn RUPEEs</Text>
          </Hero>
          <div className="roulecont">
              <div>Total Burned with Gambling: 1471 RUPEE</div>
              <div className="roulrowouter">
                <div className="roulrow">
                  <div className="lbordder yellowb" />
                  <div >
                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                    <div className="white">15</div>
                  </div>
                  <div>
                    7 players
                  </div>
                  <div>
                    4,00%
                  </div>
                </div>
                <div className="roulrow">
                  <div className="lbordder brown2b" />
                  <div >
                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                    <div className="white">15</div>
                  </div>
                  <div>
                    7 players
                  </div>
                  <div>
                    4,00%
                  </div>
                </div>
                <div className="roulrow">
                  <div className="lbordder brown3b" />
                  <div >
                    <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                    <div className="white">15</div>
                  </div>
                  <div>
                    7 players
                  </div>
                  <div>
                    4,00%
                  </div>
                </div>
              </div>
          </div>

        </div>
        <div className="rouletteherow2">
          <div className="wheelouterpouter" >
            <div className="wheelouter">
              
              <Wheel
                mustStartSpinning={mustSpin}
            prizeNumber={3}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={fontSize}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            // perpendicularText
            textDistance={textDistance}

              />
              <img src="images/hyrule/roulcenter.png" alt="roulcenter"  className="roulcenter"/>
              <img src="images/hyrule/roulouter.png" alt="roulcenter"  className="roulborder"/>
            </div>
          </div>
          
        </div>

      </div>
      
      <div style={{position:"relative"}}>
        {/* <div className="homeCardouter">
    
            <Cards>
              <FarmStakingCard  />
              <TwitterCard/>
              <CakeStats />
              <TotalValueLockedCard />
            </Cards>
    
        
        </div> */}

        <div className="homecardouter roulettehomeouter">
          <div className="bgbxl homecards">
            <div className="headingouterot">
              <div className="headingouter">
                <h4>How it works</h4>
              </div>
            </div>

            <div className="infoouter">              
              Spend RUPEE to bet, contributing to the wheel pot. Win prizes if the color of your bet matches with the 
              winning color! <span>Read more, if you have any issue, please send us an email at team@hyruleswap.com</span>
            </div>
            <img src="images/hyrule/triangle.png" alt="tri" className="triangle" />
          </div>

          

        </div>
        
      </div>
    </Page>
  )
}

export default Roulette
