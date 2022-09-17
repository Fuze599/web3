const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <><p>{props.part} {props.exercise}</p></>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {(() => {
            let cnt = 0;
            for (let i = 0; i < props.exercises.length; i++) {
              cnt += props.exercises[i]
            } 
            return cnt;
        })()}</p>
        
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Part part = {part1} exercise = {exercises1} />
      <Part part = {part2} exercise = {exercises2} />
      <Part part = {part3} exercise = {exercises3} />
      <Total exercises = {[exercises1, exercises2, exercises3]} />
    </div>
  )
}
 
export default App