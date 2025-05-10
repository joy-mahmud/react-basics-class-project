import logo from './assets/react.svg'
function App() {

  return (
    <div>
      <h2>Hello react</h2>
      <p>Today is our first class</p>

      <Cardcomponent ></Cardcomponent>
      <Cardcomponent ></Cardcomponent>
      <Cardcomponent ></Cardcomponent>

    </div>

  )
}

export function Cardcomponent() {
  return (
    <div>
      <h2>today we started learning react</h2>
      <p>we enter the world of react . we are enjoying it very much</p>
      <img src={logo} alt="logo" />
      <button>click me</button>

    </div>
  )
}

export default App
