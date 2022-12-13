import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Details = () => {

  const route = useRoute();
  console.log(route)

  return (
    <SafeAreaView style={styles.Main}>
      <ImageBackground style={styles.ImageBackground}
        source={route.params.ADVANTURE.Image}>
        <View style={styles.HeadIcon}>
          <View style={styles.LeftIcon}>{route.params.ADVANTURE.LeftIcon}</View>
          <View style={styles.LeftIcon}>{route.params.ADVANTURE.Icon}</View>
        </View>
        <View style={styles.IMageContainer}>
          <TouchableOpacity style={styles.SubImage}>
            <Image source={require('../assets/image/A1.jpg')} style={styles.SubImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubImage}>
            <Image source={require('../assets/image/A2.jpg')} style={styles.SubImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubImage}>
            <ImageBackground source={require('../assets/image/A3.jpg')} style={styles.SubImg} imageStyle={{ borderRadius: 10 }} >
              <Text style={styles.Ten}>+10</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.SecondCOntainer}>
        <View style={styles.TextCont}>
          <Text style={styles.Waduk}>Waduk Wonorejo</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.price}>$96</Text>
            <Text style={styles.persons}>/person</Text>
          </View>
        </View>
        <View style={styles.ReviewContainer}>
          <Text style={styles.Overview} >Overview</Text>
          <Text style={styles.Reviews}>Reviews</Text>
        </View>

        <View style={styles.RatingContainer}>
          <View style={styles.TimeCOntainer}>
            <View style={styles.StarIcon}>
              <AntDesign name='clockcircle' size={20} color='blue' />
            </View>
            <View style={styles.Time}>
              <Text style={styles.Duration}>Duration</Text>
              <Text style={styles.DurationContainer}>3 Hours</Text>
            </View>
          </View>
          <View style={styles.TimeCOntainer}>
            <View style={styles.StarIcon}>
              <AntDesign name='star' size={20} color='blue' />
            </View>
            <View style={styles.Time}>
              <Text style={styles.Duration}>Rating</Text>
              <Text style={styles.DurationContainer}>3.5 out of 5</Text>
            </View>
          </View>
        </View>
        <View style={styles.LastContainer}>
          <Text style={styles.lastText}>whether you are the adventurous type who loves an adrenaline rush or the kind to watch the action from the comfort of your beach lounger.
          </Text>
        </View>
        <TouchableOpacity style={styles.Buttom}>
          <Text style={styles.ButtomText}>Book Now</Text>
          <AntDesign name='arrowright' size={20} color='#fff' />
        </TouchableOpacity>








      </View>
    </SafeAreaView>

  )
}

export default Details

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  ImageBackground: {
    width: 420,
    height: 460,
  },
  HeadIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 30,
  },
  LeftIcon: {
    backgroundColor: '#FBFDFF',
    height: 45,
    width: 45,
    alignItems: 'center',
    padding: 6,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#D9DCE9',
  },
  IMageContainer: {
    marginTop: 120,
    marginLeft: 320,
  },
  SubImage: {
    margin: 5,
    width: 58,
    height: 58,
    borderWidth: 4,
    borderColor: '#D9DCE9',
    borderRadius: 10
  },
  SubImg: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  Ten: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  SecondCOntainer: {
    backgroundColor: '#fff',
    marginTop: -35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  TextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
    alignItems: 'center',

  },
  Waduk: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 130,
    color: '#000',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  persons: {
    paddingTop: 4,
    margin: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray'
  },
  ReviewContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 20
  },
  Overview: {
    color: 'blue',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 30
  },
  Reviews: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  RatingContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center'
  },
  TimeCOntainer: {
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 25
  },
  StarIcon: {
    backgroundColor: '#f1f1f1',
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  Time: {
    marginLeft: 20
  },
  Duration: {
    fontWeight: "bold",
    fontSize: 16,
  },
  DurationContainer: {
    fontSize: 19,
    fontWeight: "bold",
    color: '#000'
  },
  LastContainer:{
    marginTop:20,
    marginHorizontal:25
  },
  lastText:{
    textAlign:'justify',
    lineHeight:25,
    fontSize:17,
    fontWeight:'bold',
  },
  Buttom:{
    flexDirection:'row',
    backgroundColor:'blue',
    marginHorizontal:25,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  ButtomText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    padding:20,
   paddingHorizontal:100,
  }
})
