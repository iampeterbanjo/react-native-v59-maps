/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

type Props = {};
export default class App extends Component<Props> {
  state = {
    mapBoundaries: ""
  };
  mapRef = null;
  setMapRef = ref => (this.mapRef = ref); 

  handleRegionChange = async () => {
    try {
      const result = await this.mapRef.getMapBoundaries();
      this.setState({ mapBoundaries: JSON.stringify(result) });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Text>Map boundaries: {this.state.mapBoundaries}</Text>
        <MapView
          ref={this.setMapRef}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChangeComplete={this.handleRegionChange}
          style={styles.container}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
