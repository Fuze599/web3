import Part from "components/Part/Part"

const Content = ({exercises1, exercises2, exercises3, part1, part2, part3}) => {
    return (
        <div>
        <Part part={part1} exercise={exercises1} />
        <Part part={part2} exercise={exercises2} />
        <Part part={part3} exercise={exercises3} />
        </div>
    )
}

export default Content