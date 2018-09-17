import { View, StyleSheet, Button } from 'react-native'
import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Example screen 1
export class Parent extends React.Component {
    static navigationOptions = {
        title: 'Parent',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to child"
                onPress={() =>
                    navigate('Child')
                }
            />
        );
    }
}