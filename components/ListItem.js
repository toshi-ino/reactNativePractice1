import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        backgroundColor: 'red',
        width: 100,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    },
})

const ListItem = ({ imageUrl, title, author, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.itemContainer}>
                <View style={styles.leftContainer}>
                    {!!imageUrl && (
                        <Image
                            source={{ uri: imageUrl }}
                            style={{ width: 100, height: 100 }}
                        />
                    )}
                </View>
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.text}>
                        {title}
                    </Text>
                    <Text style={styles.subText}>{author}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem
