import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import Button from './Button';
import server from '../../dummy';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        paddingVertical: 20
    },
});

const ButtonsList = ({ edit }) => (
    <View style={styles.container}>
        <FlatList
            data={server}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => <Button name={item.key} audio={item.audio} edit={edit}></Button>}
        />
    </View>
);

export default ButtonsList;