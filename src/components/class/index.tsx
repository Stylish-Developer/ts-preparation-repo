import { Component } from "react";

// -- types
type CountType = {
  count: number;
};

type propsType = {
  message: string;
};

class ClassComponent extends Component<propsType, CountType> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    console.log(this.props);
    return (
      <>
        <h3>class component in typescript</h3>
        <h3>
          {this.props.message} {this.state.count}
        </h3>
        <button onClick={this.handleIncrement}>Plus by 1</button>
        <button onClick={this.handleDecrement}>Minus by 1 </button>
      </>
    );
  }
}

export default ClassComponent;
