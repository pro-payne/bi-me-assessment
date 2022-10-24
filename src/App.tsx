import React from "react";
import "./App.css";
import Questions from "./questions.json";

import DynamicForm from "./components/DynamicForm/DynamicForm";
import { StyledLayout } from "./components/styled/Layout.styled";
import { QuestionInterface } from "./interface/data.interface";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<QuestionInterface[]>([]);

  React.useEffect(() => {
    setLoading(true);

    // Fake async api call
    setTimeout(() => {
      const results = Questions.questions as never as QuestionInterface[];

      setData(results);

      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <StyledLayout>
        <h1>Dynamic Form</h1>
        <div>
          <div>
            {!loading && <DynamicForm data={data} />}

            {loading && <h1>Loading questions ...</h1>}
          </div>
        </div>
      </StyledLayout>
    </div>
  );
}

export default App;
