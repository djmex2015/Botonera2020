import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ButtonsList from '../components/ButtonsList';

const styles = StyleSheet.create({
    container: {
        flex: 10,
        flexDirection: 'column',
        alignItems: 'center',
        color: '#000000',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    text: {
        flex: 0.5,
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Lato_black',
    },
});

export default class EditButtonsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>EDIT A BUTTON:</Text>
                <View style={{ flex: 8 }}>
                    <ButtonsList edit={true}></ButtonsList>
                </View>
            </View>
        )
    }
}