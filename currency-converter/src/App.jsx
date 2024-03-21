import ConverterDiv from "./components/ConverterDiv"

function App() {

  return (
    <div
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}>
      <ConverterDiv />
    </div>
  )
}

export default App
