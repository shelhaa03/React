interface StudentProps {
    name : string
    age : number
    course : string  
    city? : string  
}
const Student =({name,age,course,city}:StudentProps) => {
    return (
        <>
        <div>
            <h2>Welcome {name}</h2>
            <h2>Age :{age}</h2>
            <h2>Course : {course}</h2>
            <h2>City :{city??"Not Provided"}</h2>
        </div>
        </>
    )
}
export default Student