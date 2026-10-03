"use client";
import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  index: number;
}

interface State {
  error: boolean;
}

export default class ModelErrorBoundary extends Component<Props, State> {
  state: State = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    if (this.state.error) return null;
    return this.props.children;
  }
}
