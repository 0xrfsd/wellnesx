import React from 'react';

import { View, Text, Pressable, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import { colors } from '../../src/global/colors';

const ReveillonScreen = () => {

    return (
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    selectOptions: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    main: {
        marginHorizontal: 20,
        paddingVertical: 15
    },
    divider: {
        width: "100%",
        backgroundColor: colors.background,
        height: 1,
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    textShow: {
        marginVertical: 30,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    text: {
        fontSize: 14,
        fontWeight: "700"
    },
    customButton: {
        backgroundColor: "transparent",
        borderColor: colors.background,
        borderWidth: 1,
        borderRadius: 5
    }
});


export default ReveillonScreen;