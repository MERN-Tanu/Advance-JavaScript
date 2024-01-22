import DogDescription from "./components/DogDescription";
import DogDetails from "./components/DogDetails";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Component1 from "./components/Component1";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <h2>
        <Component1 />
        <Counter />
        <Todo />
        <TodoItem />
      </h2>
      <h1>Hello, welcome to React</h1>
      <p>About Dog</p>
      <span>
        <DogDetails
          text="puppy1"
          img="http://data.1freewallpapers.com/download/lovely-white-puppy-dog.jpg"
          alt="image"
        />
        <DogDetails
          text="puppy2"
          img="https://tse3.mm.bing.net/th?id=OIP.SlnjMSdNaDSG00NjiyOZEQHaFD&pid=Api&P=0&h=220"
          alt="image"
        />
        <DogDetails
          text="puppy3"
          img="https://tse3.explicit.bing.net/th?id=OIP.yOWESC6bak8RqNGcHCMNCwHaD8&pid=Api&P=0&h=220"
        />
        <DogDetails
          text="puppy4"
          img="https://static.businessinsider.com/image/5484d9d1eab8ea3017b17e29/image.jpg"
        />
        <DogDescription
          para="dog, (Canis lupus familiaris), domestic mammal of the family Canidae
        (order Carnivora). It is a subspecies of the gray wolf (Canis lupus) and
        is related to foxes and jackals."
        />
      </span>
    </div>
  );
}

export default App;
