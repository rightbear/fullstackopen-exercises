// Use destructuring to props
const Header = ({name}) => {
  return (
    <h1>{name}</h1>
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

// Use destructuring to props
const Total = ({parts: [part1, part2, part3]}) => {
  const total = part1.exercises + part2.exercises + part3.exercises;
  return (
    <p>
        Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App