const App = () => {
  return (
    <div>
      <h1>Welcome to React With JSX</h1>
    </div>
  );
};

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);
