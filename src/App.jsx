
import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick() {
    alert('click')
  }
  const handleClick2 = () => {
    alert('btn 2 click')
  }

  //btn 4
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>

      <h3>React Core Concept-2</h3>

      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() =>
        alert('click 3 btn')}>Click 3</button>

      {/* vejailla kam eta */}
      <button onClick={() => addToFive(3)}>Click 4</button>

    </>
  )
}

export default App
