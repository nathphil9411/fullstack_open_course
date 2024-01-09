const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};
	return (
		<div>
			<Header course={course.name} />

			<Content parts={course.parts} />
			<Total
				total={
					course.parts[0].exercises +
					course.parts[1].exercises +
					course.parts[2].exercises
				}
			/>
		</div>
	);
};
const Header = (course) => {
	return <h1>{course.course}</h1>;
};

const Content = ({ parts }) => {
	console.log(parts);
	return (
		<>
			<Part parts={parts[0].name} exercises={parts[0].exercises} />
			<Part parts={parts[1].name} exercises={parts[1].exercises} />
			<Part parts={parts[2].name} exercises={parts[2].exercises} />
		</>
	);
};
const Part = ({ parts, exercises }) => {
	return (
		<div>
			{" "}
			{parts} {exercises}
		</div>
	);
};

const Total = ({ total }) => {
	console.log(total);
	return <p>Number of exercises {total}</p>;
};
export default App;
