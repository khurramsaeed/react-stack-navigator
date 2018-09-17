import { View, StyleSheet, Button } from 'react-native'
import React from 'react';
export class Child extends React.Component {
    static navigationOptions = {
        title: 'Child',
    };
    render() {
        return (
            <Button onPress={() => this.props.navigation.navigate('Parent')} title="Parent" />
        );
    }
}