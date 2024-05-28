import { Image, StyleSheet, Text, View } from "react-native";
import splash from '../../assets/dropanimation.gif'
import LottieView from "lottie-react-native";
export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <View>
                <View style={{flex:'1',alignItems:'center',justifyContent:'center'}}>
                    <LottieView
                     source={require('../../assets/dropanimation.json')}
                    />
                </View>
              {/* <Image source={splash} style={styles.image} /> */}
              <Text style={styles.text}>HASS</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#06045E',
    },
    image:{
        width:100,
        height:100,
        resizeMode:'cover'
    },
    text:{
        marginBottom:10,
        textAlign:'center',
        color:'white',
        justifyContent:"center",
        alignItems:'center',

    }
})