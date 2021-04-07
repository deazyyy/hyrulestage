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

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div className="text homeheading">
          <img src="images/hyrule/ribbonbg.png" alt="img" /> 
          <div>Hyrule Swap</div>
        </div>
        <Text className="lgraycolor">The most advanced yield platform in the Kingdom.</Text>
      </Hero>
      <div style={{position:"relative"}}>
        {/* <div className="homeCardouter">
    
            <Cards>
              <FarmStakingCard  />
              <TwitterCard/>
              <CakeStats />
              <TotalValueLockedCard />
            </Cards>
    
        
        </div> */}

        <div className="homecardouter">
          <div className="bgbxl homecards">
            <div className="headingouterot">
              <div className="headingouter">
                <h4>Farms & Staking</h4>
              </div>
            </div>

            <div className="infoouter">
              <div className="rowouter green">
                <div className="rowinner">RUPEE to Harvest</div>
                <div className="rowinner">RUPEE to Wallet</div>
              </div>
              <div className="rowouter dbrown">
                <div className="rowinner">Locked</div>
                <div className="rowinner">Locked</div>
              </div>
              <div className="rowouter green">
                <div className="rowinner">~$0.00</div>
                <div className="rowinner">~$0.00</div>
              </div>
            </div>
            <Button className="btn-main">Unlock Wallet</Button>
          </div>

          <div className="bgbxl homecards">
            <div className="headingouterot">
              <div className="headingouter">
                <h4>Gambling</h4>
              </div>
            </div>

            <div className="infoouter">
              <div className="rowouter green">
                <div className="rowinner">Your pending rewards</div>
                <div className="rowinner">RUPEE needed before next spin</div>
              </div>
              <div className="rowouter dbrown">
                <div className="rowinner">Locked</div>
                <div className="rowinner">Locked</div>
              </div>
              <div className="rowouter green">
                <div className="rowinner">~$0.00</div>
                <div className="rowinner">~$0.00</div>
              </div>
            </div>
            <Button className="btn-main">Unlock Wallet</Button>
          </div>


          <div className="bgbxl bgbxsm homecards">
            <div className="infoouter">
              <div className="rowouter dbrown ">
                Winning up to
              </div>
              <div className="rowouter green">
                <h3>512 RUPEE</h3>
              </div>
              <div className="rowouter dbrown">
                with gambling
              </div>
            </div>
          </div>

          <div className="bgbxl bgbxsm homecards">
            <div className="infoouter">
              <div className="rowouter dbrown ">
                Market Cap
              </div>
              <div className="rowouter green">
                <h3>$775,210</h3>
              </div>
              <div className="rowouter dbrown">
                with currently supply
              </div>
            </div>
          </div>

          <div className="bgbxl bgbxsm homecards">
            <h2 className="dbrown">Rupee Stats</h2>
            <div className="infoouter">
              <div className="rowouter dbrown">
                <div className="rowinner">Total RUPEE Supply</div>
                <div className="rowinner">502,297</div>
              </div>
              <div className="rowouter dbrown">
                <div className="rowinner">Total RUPEE Burned</div>
                <div className="rowinner">73,041</div>
              </div>
              <div className="rowouter dbrown">
                <div className="rowinner">Total RUPEE/Block</div>
                <div className="rowinner">1</div>
              </div>
            </div>
          </div>

          <div className="bgbxl bgbxsm homecards">
            <div className="infoouter">
              <div className="rowouter dbrown ">
                Total Value Locked (TVL)
              </div>
              <div className="rowouter green">
                <h3>$1,857,529</h3>
              </div>
              <div className="rowouter dbrown">
                Across all Farms and Pools
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </Page>
  )
}

export default Home
