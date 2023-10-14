import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="Form">
        <label>Movie Name :</label>
        <input type="text" name="movieName"></input>
        <label>Review :</label>
        <input type="text" name="review"></input>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
