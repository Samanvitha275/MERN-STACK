import Navbar from "./components/Navbar"
const App = () => {
  const data = {
    appname: "Hello"
  }
  const logdata = "mylogo"
  const test = "Hello World"
  return (
    <>
      <p className="text-red- text bg-green-300 text ">{test}</p>
      <p className="text-blue-600 text ">{logdata}</p>
      <Navbar appdata={data} logo={logdata} />
    </>
  )
}
  export default App
