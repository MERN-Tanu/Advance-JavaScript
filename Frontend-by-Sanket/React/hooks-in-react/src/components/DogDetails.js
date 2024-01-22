import "./DogDetails.css";
// function DogDetails({ img, text })

function DogDetails(props) {
  console.log("props1", props);
  //we can also use ({text,img} or props)
  return (
    <div>
      <img src={props.img} alt="dogImage" className="image" />
      <p>{props.text}</p>
    </div>
  );
}

export default DogDetails;
