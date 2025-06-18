
const Course = ({ courses }) => {  
  console.log("Courses inside component", courses);
  return (
      courses.map(course => 
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
  ))
}

const Header = (props) => {
  console.log("Courses inside Header component", props);
  return (
  <h2>{props.course}</h2>
)
}

const Content = (props) => (
  <div>
    <ul>
      <Part parts={props.parts} />
    </ul>
  </div>
)

const Part = ({parts}) => parts.map(part => 
      <li key={part.id}> 
        {part.name} {part.exercises} 
      </li>
)

const Total = ({parts}) => {
  const totalExcercises = parts.reduce((counter, parts) => {
  return counter + parts.exercises;
  },0); 

  return (
    <p>Number of exercises {totalExcercises} in total</p>
  )
}

export default Course