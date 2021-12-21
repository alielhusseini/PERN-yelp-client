import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, message : "" };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true , message : error.message };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    // //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <><h1>Something went wrong.</h1> <p>{this.state.message}</p></>;
      }
  
      return this.props.children; 
    }
  }