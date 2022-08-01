import { Component } from "react";
import Button from "./Button";

class CountClick extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentWillMount() { console.log('Component WILL MOUNT!') }
    componentDidMount() { console.log('Component DID MOUNT!') }
    componentWillReceiveProps(newProps) { console.log('Component WILL RECIEVE PROPS!') }
    shouldComponentUpdate(newProps, newState) { return true; }
    componentWillUpdate(nextProps, nextState) { console.log('Component WILL UPDATE!'); }
    componentDidUpdate(prevProps, prevState) { console.log('Component DID UPDATE!') }
    componentWillUnmount() { console.log('Component WILL UNMOUNT!') }

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 }); // update state
    }
    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 }); // update state
    }
    render() {
        return (
            <div className="container">
                <Button className="btn btn-info" onClick={this.decreaseCount} labelName="Decrease"></Button>
                <span>{this.state.count}</span>
                <Button className="btn btn-info" onClick={this.increaseCount} labelName="Increase"></Button>
            </div>
        )
    }
}
export default CountClick;