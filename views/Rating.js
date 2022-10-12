import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Slider from "@react-native-community/slider";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import moment from "moment";
import RadioButtonRN from 'radio-buttons-react-native';

const Rating = () => {
  const [buttonId, setButtonId] = useState(null);
  const [buttonId2, setButtonId2] = useState(null);
  const arrayOfButtons = [
    1,2,3,4,5,6,7,8,9,10
  ];

  const arrayOfButtons2 = [
    1,2,3,4,5,6,7,8,9,10
  ];


  return (
    <View style={styles.braceContainer}>
      <ImageBackground
        source={require("../assets/images/black.png")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Mon experience corset</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.sub}>A quel point es-tu confortable aujourd'hui dans ton corset d'une echelle de 1 a 10?</Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          {
            arrayOfButtons.map(el => (

              <Text key={el} style={{padding: 12, backgroundColor: el === buttonId ? 'lightgray' : 'lightgreen', marginHorizontal: 3}} onPress= {() => setButtonId(el)}>
                {el+''}</Text>
            ))
          }

        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.sub}>A quel point es-tu satisfait de ton traitement par corset d'une echelle de 1 a 10?</Text>
           <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          {
            arrayOfButtons2.map(el => (

              <Text key={el} style={{padding: 12, backgroundColor: el === buttonId2 ? 'lightgray' : 'lightgreen', marginHorizontal: 3}} onPress= {() => setButtonId2(el)}>
                {el+''}</Text>
            ))
          }
        </View>
        
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "lightgreen",
          textAlign: "center",
          fontSize: 28,
          width: 200,
          marginBottom: 10,
          marginTop: 60,
          display: 'flex',
          marginLeft: 75,

        }}
      >
        <Button color={'black'}
          onPress={() => {
            if (buttonId !== null || buttonId2 !== null) {
              setDoc(doc(db, "Satisfaction", (auth.currentUser?.email + ' ' + moment().format("YYYY-MM-DD"))), {
                user: auth.currentUser?.uid,
                user_email: auth.currentUser?.email,
                date: moment().format("lll"),
                Comfort: buttonId,
                Satisfaction: buttonId2,
              }).then(Alert.alert("Bien envoye. Merci pour ton temps!")) 
              return
            }
            return Alert.alert("Vous devez entrer des donnees pour les deux champs")
          }
        }
          title="Valider"

        />
      </TouchableHighlight>
    </View>
  );
};

export default Rating;
