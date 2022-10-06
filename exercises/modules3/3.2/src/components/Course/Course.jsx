import Header from "components/Header/Header" 
import Part from "components/Part/Part"


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map(p => <Part part={p.name} exercise={p.exercises}></Part> )}
    </div>
  )
}

export default Course
