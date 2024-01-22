// function DogDescription({ para }) {

function DogDescription(props) {
  console.log("props2", props);
  // we can also write ({para} or props.para)
  return (
    <div>
      <hi>Dog description</hi>
      <p>{props.para}</p>
    </div>
  );
}

export default DogDescription;
