import Pixel from './Pixel'
function App() {
  const pixelArray = []
  const pixelLength = 10000
  for (let i = 0; i < pixelLength; i++) {
    pixelArray.push(<Pixel key={i} />)
  }

  return pixelArray
}

export default App
