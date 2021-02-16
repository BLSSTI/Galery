import * as React from "react";

export class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: [],
    };
  }
  handleSubmit(e: any) {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [...this.state.tasks, this.state.currentTask],
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>React TypeScript</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Add a task"
            value={this.state.currentTask}
            onChange={(e) => this.setState({ currentTask: e.target.value })}
          />
          <button type="submit"> Add a task </button>
        </form>
      </div>
    );
  }
}
