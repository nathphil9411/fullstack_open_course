const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />

			<Content parts={{ part1, part2, part3 }} />
			<Total total={part1.exercises + part2.exercises + part3.exercises} />
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
			<Part parts={parts.part1.name} exercises={parts.part1.exercises} />
			<Part parts={parts.part2.name} exercises={parts.part2.exercises} />
			<Part parts={parts.part3.name} exercises={parts.part3.exercises} />
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
