import type { NextPage } from 'next'

const DesignCard: React.FC = () => {
  return <div className='kit-card'>
    <div className="kit-card-header">
      <div className="title">Select Design</div>
    </div>
    <div className="kit-card-body">
      BODY
    </div>
  </div>
}

const Home: NextPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="design-wrapper">
          LEFT
        </div>
        <div className="config-wrapper">
          <div className="app-title">3D Kit Builder</div>
          <DesignCard />
        </div>
      </div>
    </>
  )
}

export default Home
