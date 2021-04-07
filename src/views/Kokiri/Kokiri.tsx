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

const Kokiri: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div className="text homeheading">
          <img src="images/hyrule/ribbonbg.png" alt="img" /> 
          <div>KOKIRI SHOP</div>
        </div>
        <Text className="lgraycolor">The most advanced yield platform in the Kingdom.</Text>
      </Hero>
      <div style={{position:"relative"}}>
        <div className="kokiriouter">
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>RUPEE</div>
            <Button className="kokbtn">
              <img src="images/hyrule/gem.png" alt="kokiri gem" />
              500
            </Button>
          </div>
          
        </div>
        
      </div>
    </Page>
  )
}

export default Kokiri
