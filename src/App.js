import "./App.css";
import data from "./data"
import Quiz from "./components/Quiz";

function App() {

  function finish(index, actions) {
    console.log(index, actions);
    window.alert(actions);
  }

  const quizzes = data.map((data, index) => {
    return <Quiz
        key={index}
        quiz={data.quiz}
        handleFinish={actions => finish(index, actions)}
    />
  });

  return (
    <div className="App">
      {quizzes}
    </div>
  );
}

export default App;
