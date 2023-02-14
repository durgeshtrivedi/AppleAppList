import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

const AppleAppsList = function () {
    return (
        <View style={style.container}>
            <FlatList data={listData}
                renderItem={({ item }) => <Text style={style.item}> {item.key}</Text>}
            />
        </View>
    );
};

const listData = [{ key: "Durgesh" },
{ key: "Rohan" },
{ key: "Soham" },
{ key: "Don" },
{ key: "Ram" },
{ key: "Shayam" },
{ key: "PUK" }
];

export default AppleAppsList;