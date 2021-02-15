import React from "react"
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log('%cerror ErrorBoundary.tsx line:22 ', 'color: red; display: block; width: 100%;', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="modal-content">
            <span className="close">&times;</span>
            <h2>App Crashed</h2>
            <p>Something has went horribly wrong.</p>
            {this.state.error}
        </div>

      );
    }

    // If there is no error just render the children component.
    return this.props.children;
  }
}