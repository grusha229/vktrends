import { useRef } from "react"
import Header from "./blocks/Header/Header"
import KeyVisualBlock from "./blocks/KeyVisualBlock/KeyVisualBlock"
import TrendsTitleList from "./blocks/TrendsTitleList/TrendsTitleList"
import TrendBlock from "./blocks/TrendBlock/TrendBlock"
import { VideoBlock } from "./blocks/VideoBlock/VideoBlock"
import Footer from "./blocks/Footer/Footer"

function App() {


  return (
    <div>
      <Header />
      <KeyVisualBlock />
      <TrendsTitleList />
      <TrendBlock />
      <VideoBlock />
      <Footer />
    </div>
  )
}

export default App
