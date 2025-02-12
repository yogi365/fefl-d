import PropsClass from "./Components/PropsClass"
import StateClass from "./Components/StateClass";

function App()
{

  const name = "Abc";
  const marks = [25, 36, 12, 15, 35];
  return (
    <>
      {/* <PropsClass name={name} age="25" marks={marks}>
        <h2>This is a prop</h2>
      </PropsClass> */}
      <StateClass />
    </>
  )
}

export default App
