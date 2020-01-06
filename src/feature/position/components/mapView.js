import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
export default class mapView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: 21.03,
            longitude: 105.85,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 21.03,
              longitude: 105.85,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            title="position recent"
            description="position recent"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapContainer: {
    width: width - 20,
    height: height / 3
  }
});
