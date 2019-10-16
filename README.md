# React Native Maps with React Native 0.59.x

## Background

After reporting an [issue with React Native Maps not working on Android][react-native-maps-issue-2665] with Expo, I wanted to find out if the root cause was:

1. Expo with React Native Maps
2. Reactive Native Maps

If the issue was with Expo, I could report it correctly and if it was with react native maps then perhaps when Expo upgrades their verison of maps it will be fixed.

## Result

The bug is in Expo. This repo demonstrates that using the same versions of react-native-maps (0.25.0) and react-native (0.59.10), the maps `getMapBoundaries` method works correctly.

## Steps

* clone this repository 
* run yarn install
* run `yarn watch:android`

[react-native-maps-issue-2665]: https://github.com/react-native-community/react-native-maps/issues/2665