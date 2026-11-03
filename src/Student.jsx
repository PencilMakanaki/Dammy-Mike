// import PropTypes from "prop-types";




function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     grade: PropTypes.string,
//     isStudent: PropTypes.bool
// }

// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     grade: "N/A",
//     isStudent: false
// }

export default Student