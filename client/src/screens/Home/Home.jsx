import './Home.module.css'
import  Layout  from '../../components/Layout/Layout.jsx'
import {useState, useEffect} from "React"

const Home = (props) => {
  const [games, setGames] = useState([]);
  // useEffect(()=>{

  // },[])

  return (
    <Layout >
      <div className='home'>
        hello world
      </div>
    </Layout>
  )
}

export default Home