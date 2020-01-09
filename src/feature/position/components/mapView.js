import React, {Component} from 'react';
import {View, StyleSheet, AppState} from 'react-native';
import MapView, {AnimatedRegion} from 'react-native-maps';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Geolocation from 'react-native-geolocation-service';
export default class mapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      arr: [],
      result: [],
      longitude: -1,
      latitude: -1,
      routeCoordinates: [],
      coordinate: new AnimatedRegion({
        latitude: -1,
        longitude: -1
      })
    };
  }

  async componentDidMount() {
    console.log('didMuount');
    this.onPushInfo();
    this.watchIDUser();
    AppState.addEventListener('change', this._handleAppStateChange);
    console.log('APPSTATE : ', AppState.currentState);
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  deleteData = () => {
    console.log('DELETE');
    const {uid} = auth().currentUser;
    const ref = database().ref(`User/${uid}`);
    ref.remove();
  };

  _handleAppStateChange = nextAppState => {
    console.log('HANDLECHANGE');
    const {appState} = this.state;
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!==');
    } else if (nextAppState === 'inactive' || nextAppState === 'background') {
      console.log('App has come to the back ground!==');
      this.deleteData();
    }
    this.setState({appState: nextAppState});
  };

  getMapRegion() {
    console.log('GETMAP');
    const {latitude, longitude} = this.state;
    return {
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
  }

  async watchIDUser() {
    this.watchID = Geolocation.watchPosition(
      position => {
        const {coordinate, routeCoordinates, appState} = this.state;
        const {latitude, longitude} = position.coords;
        const newCoordinate = {
          latitude,
          longitude
        };
        if (Platform.OS === 'android') {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          console.log('WATCHID');

          coordinate.timing(newCoordinate).start();
        }
        if (appState === 'inactive' || appState === 'background') {
          this.deleteData();
        } else {
          this.setState(
            {
              latitude,
              longitude,
              routeCoordinates: routeCoordinates.concat([newCoordinate])
            },
            () => {
              const {uid, email} = auth().currentUser;
              const ref = database().ref(`User/${uid}`);
              ref.set({
                uid,
                email,
                latitude,
                longitude
              });
            }
          );
        }
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 5,
        useSignificantChanges: true
      }
    );
  }

  async onPushInfo() {
    console.log('PUSHINFO');
    Geolocation.getCurrentPosition(
      position => {
        this.setState(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          () => {
            const {latitude, longitude} = this.state;
            const {uid, email} = auth().currentUser;
            const ref = database().ref(`User/${uid}`);
            ref.set({
              uid,
              email,
              latitude,
              longitude
            });
          }
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 0}
    );
  }

  async onGetListInfo() {
    const ref = database().ref(`User`);
    const snapshot = await ref.once('value');
    const result = snapshot.val();
    this.setState({result: Object.values(result)});
    console.log('getList2');
  }

  render() {
    const {arr, result, appState} = this.state;
    console.log(appState);
    if (appState === 'active') this.onGetListInfo();
    if (arr && result) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={this.getMapRegion()}
            showsUserLocation>
            {result &&
              result.map(marker => (
                <MapView.Marker
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  title={marker.email}
                  description={marker.email}
                  key={marker.uid}
                />
              ))}
          </MapView>
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
