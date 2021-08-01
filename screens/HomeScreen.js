import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'
import Loading from '../components/Loading'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

export default function HomeScreen({ navigation }) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        setLoading(true)
        try {
            const response = await axios.get(URL)
            setArticles(response.data.articles)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            navigation.navigate('Article', { article: item })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {loading && <Loading />}
        </SafeAreaView>
    )
}

// import React, { useState, useEffect } from 'react'
// import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
// import ListItem from '../components/ListItem'
// import Constants from 'expo-constants'
// import axios from 'axios'

// const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
// })

// export default function HomeScreen() {
//     const [articles, setArticles] = useState([])
//     useEffect(() => {
//         // alert(Constants.manifest.extra.newsApiKey)
//         fetchArticles()
//     }, [])

//     const fetchArticles = async () => {
//         try {
//             const response = await axios.get(URL)
//             setArticles(response.data)
//             console.log(response)
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
