import '../src/style/App.css'
import SearchBox from '../src/components/SearchBox'
import Block from '../src/components/Block'
import Description from '../src/components/Description'
import Footer from '../src/components/Footer'
// import Accordion from '../src/components/Accordion'

function App() {
  return (
    <>
      <div className='ui container' style={{ marginTop: '40px' }}>
        <SearchBox />
        <Description />
        <Block />
        <Block />
        <Footer />
      </div>
      {/* navigation */}
      <div class='ui top attached button'>navigation</div>

      <div class='ui bottom attached button'>Footer</div>
    </>
  )
}

export default App
