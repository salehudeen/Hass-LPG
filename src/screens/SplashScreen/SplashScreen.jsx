import {  Image, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen(){
    return(
        <View style={styles.container} >
            
                {/* <View style={styles.lottieContainer}>
                    <LottieView 
                      style={{flex: 1}}
                     source={require('./dropanimation.json')}
                    />
                </View> */}
                <Image
                 source={require('../../assets/optimised.gif')}
                />
              
              <Text style={styles.text}>HASS</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#06045E',
        paddingVertical:100
    },
    
    lottieContainer: {
        height: 300,
        aspectRatio:1,
      },
    text:{
        marginBottom:10,
        textAlign:'center',
        color:'white',
        justifyContent:"center",
        alignItems:'center',
        
    }
})