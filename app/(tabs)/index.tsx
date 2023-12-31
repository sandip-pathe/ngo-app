import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: "#00ff00" }}>Sandip</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})