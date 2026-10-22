import Header from "./Header"
const Home =() => {
    const StudentName : string = "Anu"
    const StudentAge  : number = 23
    return (
        <>
        <p>Name :{StudentName}</p>
        <p>Age{StudentAge}</p>
        <div>
            <h2>welcome to Home Page</h2>
            <Header/>
        </div>
        </>
    )
}
export default Home 