import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    )
}

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import HomeScreen from './screens/HomeScreen'

// const Stack = createStackNavigator()

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     // options={{ headerShown: false }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
// import React, { useEffect, useState } from 'react'
// import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
// import axios from 'axios'
// import Constants from 'expo-constants'
// import ListItem from './components/ListItem'

// const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

// export default function App() {
//     const [articles, setArticles] = useState([])

//     useEffect(() => {
//         fetchArticles()
//     }, [])

//     const fetchArticles = async () => {
//         try {
//             const response = await axios.get(URL)
//             setArticles(response.data.articles)
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <FlatList
//                 data={articles}
//                 renderItem={({ item }) => (
//                     <ListItem
//                         imageUrl={item.urlToImage}
//                         title={item.title}
//                         author={item.author}
//                     />
//                 )}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
// })
