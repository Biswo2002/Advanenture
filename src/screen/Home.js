import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
const Home = () => {

    const navigation = useNavigation();
    const [myUserData, setMyUserData] = useState([]);
    const getUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const myData = await response.json();
            setMyUserData(myData)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    
    const Advanture = [
        {
            id: 'Adv_1',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A2.jpg'),
          
           

        },
        {
            id: 'Adv_2',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A5.jpg'),
          
           
        },
        {
            id: 'Adv_3',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A3.jpg'),
          
           
        },
        {
            id: 'Adv_4',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A4.jpg'),
          
           
        },
        {
            id: 'Adv_5',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A5.jpg'),
          
           
        },
        {
            id: 'Adv_6',
            Title: 'Waduk Wonorejo',
            image: require('../assets/image/A3.jpg'),
            Icon: <AntDesign name='hearto' size={24} color='#708DBB' />,
           

        },

    ]

    return (


        <SafeAreaView style={styles.Main}>
            <View style={styles.FirstContainer}>
                <Text style={styles.Discover}>Discover</Text>
                <Image source={{ uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1670834677~exp=1670835277~hmac=0887e683412e61b0797403d762557206e1c44b0c6f3f05ae471e07a1b9984163' }}
                    style={styles.ImageLogo} />
            </View>
            <View style={styles.LineConatiner}>
                <View>
                    <Text style={styles.Slight}>Slight</Text>
                </View>
                <Text style={styles.Tours}>Tours</Text>
                <Text style={styles.Advanture}>Advanture</Text>
            </View>
            <Text style={styles.NoSights}>16 Sights</Text>
            <View style={styles.FlatList}
            >
                <FlatList
                    data={myUserData}
                    // data={Advanture}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.SecndContainer}
                            onPress={() => navigation.navigate('Details', { ADVANTURE: item?.id })}
                        >
                            <ImageBackground style={styles.ImageBackground}

                                source={{ uri: item?.url }} imageStyle={{ borderRadius: 20 }} >
                                <Pressable>
                                    <View style={styles.HeatContainer}>
                                        {/* {item?.Icon} */}
                                        <AntDesign name='hearto' size={25} color='#708DBB' />
                                    </View>
                                </Pressable>
                                <Text style={styles.Title}>{item.Title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.AdvFeeling}>
                <Text style={styles.Feeling}> Feeling Adventurous?</Text>
                <Text style={styles.Showall}>Show All</Text>
            </View>
            <View style={styles.MainText}>
                <View style={styles.AdvFeelingContainer}>
                    <MaterialCommunityIcons name='kayaking' color={'#4E7CC2'} size={30} />
                    <MaterialCommunityIcons name='airballoon' color={'#4E7CC2'} size={30} />
                    <MaterialCommunityIcons name='hiking' color={'#4E7CC2'} size={30} />
                    <MaterialCommunityIcons name='diving-snorkel' color={'#4E7CC2'} size={30} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Kayaking}>Kayaking</Text>
                    <Text style={styles.Kayaking}>balloning</Text>
                    <Text style={styles.Kayaking}>hiking</Text>
                    <Text style={styles.Kayaking}>snorkeling</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#ffff',
        flex: 1,
    },
    FirstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        alignItems: 'center',
        marginTop: 40
    },
    Discover: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#060625',
    },
    ImageLogo: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    LineConatiner: {
        flexDirection: 'row',
        marginTop: 10
    },
    Slight: {
        padding: 20,
        color: '#4E7CC2',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Tours: {
        padding: 20,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Advanture: {
        padding: 20,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    NoSights: {
        marginHorizontal: 25,
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20
    },
    ImageBackground: {
        width: 290,
        height: 330,
        // marginHorizontal:25

    },
    SecndContainer: {
        marginRight: 30,
        marginVertical: 25
    },
    HeatContainer: {
        backgroundColor: '#EcFAF1',
        width: 50,
        height: 50,
        alignItems: 'center',
        padding: 12,
        borderRadius: 40,
        marginLeft: 220,
        marginTop: 20,
    },
    Title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 200,
        marginHorizontal: 30
    },
    FlatList: {
        marginHorizontal: 25,
    },
    AdvFeeling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 20,
        alignItems: 'center',
    },
    Feeling: {
        color: '#000',
        fontSize: 20,
        fontWeight: '800',
    },
    Showall: {
        fontSize: 17,
        color: '#4E7CC2',
        fontWeight: '700'
    },
    AdvFeelingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 35,
    },
    Kayaking: {
        fontSize: 17,
        fontWeight: '600'
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        alignItems: 'center',
        paddingTop: 15,
        // backgroundColor:'#4E7CC2'
    },
    MainText: {
        backgroundColor: '#F4F7FD',
        height: 180
    }
})
