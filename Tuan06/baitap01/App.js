import * as React from 'react';
import { View, Text ,Image,Pressable} from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style ={{flex: 1}}>
    <View style={{ flex: 4}}>
    <Image source={require('./anh1.PNG')} resizeMode="contain" style ={{
    height: 300,
    borderRadius: 8,}} />
    </View>
    <View style ={{flex: 3}}>
          <Text >
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      
      <Text>⭐⭐⭐⭐⭐ (Xem 828 đánh giá)</Text>

      
      <Text style={{ fontSize: 18,fontWeight: "bold",color: "red", marginTop: 6,}}>1.790.000 đ</Text>
      <Text style={{ fontSize: 14, textDecorationLine: "line-through",color: "#888"}}>4.790.000 đ</Text>
      
      <Text>Ở đâu rẻ hơn hoàn tiền</Text>

      
      <Pressable style = {{ borderWidth: 1,borderColor: "#ccc", borderRadius: 6, padding: 8,alignItems: "center",}}
      onPress={() => navigation.push('Details')}>
  
        <Text >4 MÀU - CHỌN MÀU</Text>
      </Pressable>

      
      <Pressable style = {{marginTop:50 ,padding:10 , textalign:'center' , backgroundColor:'red',justifyContent:'center', alignItems:'center' , borderRadius:5 , color: "#333",}} 
      onPress={() => navigation.push('Details')} >
        <Text style = {{ textalign:'center',color: "#333"}}>CHỌN MUA</Text>
      </Pressable>
    </View>
    </View>
  );
}

function Screen2() {
  const navigation = useNavigation();
 const colors = ["#add8e6", "red", "black", "blue"]; 

  return (
    <View>
    <View style={{flex:1 , flexDirection: 'row',}} >
      <Image source={require('./anh1.PNG')}  resizeMode="contain" style ={{
    flex:1,
    height: 100,
    borderRadius: 8,}}  />
    <Text style={{flex:3}}> 
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
     </Text>
    </View>
      <Text>Chọn một màu bên dưới:</Text>
      {colors.map((c, i) => (
        <Pressable
          key={i}
          style={{ width: 60, height: 60, margin: 10, borderRadius: 8 , backgroundColor : c , justifyContent:'center', alignItems:'center' , textalign:'center'}}
          onPress={() => navigation.navigate("Screen3")}
        />
      ))}
    </View>
  );
}
function Screen3() {
  const navigation = useNavigation();

  return (
  <View style ={{flex: 1}}>
    <View style={{ flex: 4}}>
    <Image source={require('./anh1.PNG')} resizeMode="contain" style ={{
    height: 300,
    borderRadius: 8,}} />
    </View>
    <View style ={{flex: 3}}>
          <Text >
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>

      
      <Text>⭐⭐⭐⭐⭐ (Xem 828 đánh giá)</Text>

      
      <Text style={{ fontSize: 18,fontWeight: "bold",color: "red", marginTop: 6,}}>1.790.000 đ</Text>
      <Text style={{ fontSize: 14, textDecorationLine: "line-through",color: "#888"}}>4.790.000 đ</Text>
      
      <Text>Ở đâu rẻ hơn hoàn tiền</Text>

      
      <Pressable style = {{ borderWidth: 1,borderColor: "#ccc", borderRadius: 6, padding: 8,alignItems: "center",}}
      onPress={() => navigation.push('Details')}>
  
        <Text >4 MÀU - CHỌN MÀU</Text>
      </Pressable>

      
      <Pressable style = {{marginTop:50 ,padding:10 , textalign:'center' , backgroundColor:'red',justifyContent:'center', alignItems:'center' , borderRadius:5 , }} 
      onPress={() => navigation.push('Details')} >
        <Text style = {{ textalign:'center',color: "#333"}}>CHỌN MUA</Text>
      </Pressable>
    </View>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: Screen2,
    Screen3: Screen3,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
