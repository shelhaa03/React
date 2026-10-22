import Home from "./components/Home"
// import Header from "./components/Header"
import Student from "./components/Student"
const App  =() => {
  return (
    <>
    <div>
      <h1>HEYY REACT!!</h1>
      <p>React is a javascript Library</p>
      <Home/>
      <Student name = "Achu" age = {20} course = "Software Develpment" city = "calicut"/>
      <Student name = "Appu" age = {21} course = "Data Analyst"/>
      <Student name =  "Ammu" age = {22} course = "Python Full Stack"/> 
    </div>
    </>
    
  )
}
export default App