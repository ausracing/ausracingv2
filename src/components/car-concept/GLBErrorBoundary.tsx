"use client";

import { Component, type ReactNode } from "react";

interface State {
  error: Error | null;
}

export default class GLBErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(e: Error): State {
    return { error: e };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex h-full items-center justify-center text-red-500 font-mono text-xs">
          Model Load Error
        </div>
      );
    }
    return this.props.children;
  }
}