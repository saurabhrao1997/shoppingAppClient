import { info } from "autoprefixer";
import React from "react";

class ErrorBoundary extends React.Component {
    state = {hasError :false}
    static  getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error,errorInfo)

    }
    render(): React.ReactNode {
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundary