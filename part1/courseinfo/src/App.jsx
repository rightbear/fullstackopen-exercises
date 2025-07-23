const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Use destructuring to props
const Part = ({part: {name, exercises}}) => {
  return (
    <p>
        {name} {exercises}
    </p>
  )
}

// Use destructuring to props
const Content = ({parts: [part1, part2, part3]}) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
        Number of exercises {
          props.parts[0].exercises + 
          props.parts[1].exercises + 
          props.parts[2].exercises
        }
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App