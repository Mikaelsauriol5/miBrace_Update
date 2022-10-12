import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View, ImageBackground } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}

    >


      <ImageBackground
        blurRadius={5}
        source={require("../assets/images/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.container2}>


          <View>
            <Text style={styles.text}>
              Bienvenue

            </Text>

            <SafeAreaView>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
              />
               
              <Text style={styles.label}>Mot de passe :</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                placeholder="Mot de passe"
              />


              <View>
                <TouchableOpacity onPress={() => handleLogin()}>
                  <Text style={styles.btn1}>Connecter</Text>
                </TouchableOpacity>

              </View>
              <View>
                <TouchableOpacity onPress={() => handleSignUp()}>
                  <Text style={styles.btn}>s'inscrire</Text>
                </TouchableOpacity>
              </View>

            </SafeAreaView>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 50,

    color: "gray",
    textAlign: "left",
    marginBottom: 20,
    fontFamily: 'Inter-Black',
  },

  label: {
    fontSize: 30,

    color: "gray",
    textAlign: "left",
    marginBottom: 5,
    fontFamily: 'Inter-Black',
  },
  image: {
    width: 200,
    height: 70,
    alignSelf: 'center'
  },
  btnSocial: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginVertical: 30
  },

  tinyLogo: {
    marginVertical: 45,
    height: "20%",
    width: "100%",
  },
  btnO: {
    margin: 12,
    height: 40,
    borderRadius: 15,
    backgroundColor: "white",
    fontFamily: 'Inter-Black',

  },
  container2: {
    padding: 20,

    flex: 1,
    color: "white",
  },

  container: {
    marginTop: 40,

    flex: 1,
    color: "white",
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: "white",
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Inter-Black',
  },
  btn: {

    backgroundColor: "white",
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'Inter-Black',
    borderRadius: 9,

    marginBottom: 10,
    marginTop: 10,
  },
  btn1: {
    borderRadius: 9,
    backgroundColor: "#fe0680",
    textAlign: "center",
    fontSize: 28,
    fontFamily: 'Inter-Black',


    marginBottom: 10,
    marginTop: 10,
  },
});