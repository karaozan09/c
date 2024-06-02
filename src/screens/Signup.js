/* eslint-disable prettier/prettier */
import { Dimensions, Image, StyleSheet, Text, View,Button,TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
// import { auth } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';



const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;



const Signup = ({navigation}) => {
  // const kayit = () => {
  //   auth().createUserWithEmailAndPassword(
  //     'zumra@example.com',
  //      'supersecretpassword',
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };


  function signup () {
    // auth().createUserWithEmailAndPassword(
    //   'muhammed@gmail',
    //   'gizlişifre123',
    // )
    // .then(res =>  navigation.navigate('Login'))
    // .catch(err => console.log(err));
  }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //KULLANICI İŞLEMLERİ YAPILACAK
// const handleSignUp = () => {
//     auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Kullanıcı başarıyla oluşturuldu
//         const user = userCredential.user;
//         console.log('Kullanıcı oluşturuldu:', user.uid);
//       })
//       .catch((error) => {
//         console.error('Kullanıcı oluşturulamadı:', error);
//       });
//   };

  // const addUserToFirestore = (userId, email, password) => {
  //   firestore()
  //     .collection('users')
  //     .doc(userId)
  //     .set({
  //       email: email,
  //       password: password,
  //       // Diğer kullanıcı bilgilerini buraya ekleyebilirsiniz
  //     })
  //     .then(() => {
  //       console.log('Kullanıcı verileri Firestore\'a eklendi');
  //     })
  //     .catch((error) => {
  //       console.error('Kullanıcı verileri eklenemedi:', error);
  //     });
  // };


  // <Button title="Üye Ol" onPress={handleSignUp}textStyle={styles.loginButtonText}/>;


  return (
    <SafeAreaView style={styles.continer}>
    <View style={styles.view_style}>
      <View style={{width:winWidth * 0.75}}>
      <Text style={styles.text_title1}>Zümra Ewl</Text>
      <Text style={styles.text_title3}>Güvenliğin Eğlenceli Hali</Text>
      </View>
     <View style={{width:winWidth * 0.25}}>
     <Image source={require('../assets/images/4.png')} style={styles.img1}/>
     </View>
    </View>
    <View style={styles.ortaview}>
      <TextInput
        style={styles.text_title2}
        placeholder="Email adresinizi girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
       <TextInput
        style={styles.text_title2}
        placeholder="Telefon numaranızı girin"
        value={email}
        onChangeText={setEmail}
        keyboardType="Phone"
        autoCapitalize="none"
      />
       <TextInput
        style={styles.text_title2}
        placeholder="Adresinizi girin"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
      style={styles.text_title2}
              placeholder="Şifrenizi girin"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
      />
    {/* <Button title="Giriş Yap" onPress={() => {login()}} style={styles}/> */}
    <TouchableOpacity style={styles.buton} onPress={()=>{navigation.goBack}}><Text style={styles.butontext}>Çıkış</Text></TouchableOpacity>
    {/* <Button title ="Kayıt Ol" onPress={() => {signup()}} /> */}
    <TouchableOpacity style={styles.buton} onPress={() => {signup()}}><Text style={styles.butontext}>Kayıt Ol</Text></TouchableOpacity>
    </View>

    <View style={styles.altview}>
    <Image resizeMode="stretch" source={require('../assets/images/mobilresim.png')} style={styles.img2}/>
    </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  continer:{
    flex:1,
    backgroundColor:'white',
},
view_style:{
  backgroundColor:'#E8C6F4',
  justifyContent:'space-evenly',
  marginBottom:50,
  height:winWidth * 0.3,
  width:winWidth,
  flexDirection:'row',
  padding:winWidth * 0.05,
},
ortaview:{
  flex:4,
  backgroundColor:'white',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'white',
  borderRadius:10,
  padding:20,
  margin:20,
  paddingBottom:60,

},
text_title1:{
  fontSize: 40,
  textAlign:'left',
  color:'#771DA1',
  fontWeight:'bold',
  marginLeft:10,


},
text_title2:{
 width: '100%',
 height: 50,
 borderColor: '#771DA1',
 color:'pink',
 borderWidth: 2,
 marginBottom: 10,
 paddingHorizontal: 10,
 borderRadius: 5,
},
text_title3:{
  fontSize:20,
  textAlign:'center',
  color:'#771DA1',
 fontWeight:'bold',
  fontStyle:'italic',
  marginBottom:10,
    },
buton:{
  alignItems:'center',
  backgroundColor:'#771DA1',
  marginLeft: 70,
  marginRight: 70,
  borderRadius:5,
  padding:10,
  margin: 10,
},
butontext:{
  fontSize:18,
  textAlign:'center',
  color:'white',
},
img1:{
  alignItems:'center',
  borderRadius: winWidth * 0.22,
  height:winWidth * 0.22,
  width:winWidth * 0.22,
  alignSelf:'flex-end',
},
altview:{
  height:winWidth * 0.5,
  flex:1,
  justifyContent:'flex-end',
  backgroundColor:'red',

},
img2:{
  width:winWidth ,
  justifyContent:'center',
  height:winWidth * 0.5,
  alignItems:'center',
  alignSelf:'center',

},
});
