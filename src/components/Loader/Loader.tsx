import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from "react-native";
import styles from './LoaderStyles';

// Define the Props interface
interface LoaderProps {
  isLoading: boolean;
}

// Define the State interface
interface LoaderState {
  isLoading: boolean;
}

class Loader extends Component<LoaderProps, LoaderState> {
  constructor(props: LoaderProps) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading
    };
  }

  static getDerivedStateFromProps(nextProps: LoaderProps) {
    return {
      isLoading: nextProps.isLoading
    };
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType="none"
        visible={this.state.isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => {}}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={this.state.isLoading} color="#20145F" size="small" />
          </View>
        </View>
      </Modal>
    );
  }
}
export default Loader;