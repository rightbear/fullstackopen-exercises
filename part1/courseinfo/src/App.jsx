const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Use destructuring to props
const Part = ({ part, exercise }) => {
  return (
    <p>
        {part} {exercise}
    </p>
  )
}

// Use destructuring to props
const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part part={parts[0]} exercise={exercises[0]} />
      <Part part={parts[1]} exercise={exercises[1]} />
      <Part part={parts[2]} exercise={exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
        Number of exercises {props.sum}
    </p>
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
      <Content 
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App