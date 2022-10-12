import React, { useState } from "react";
import { View, Text, Button, TouchableHighlight, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";
// import { AnimatedCircularProgress } from "react-native-circular-progress";
import Slider from "@react-native-community/slider";
import { doc, setDoc, Timestamp, getDoc, updateDoc, query, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import moment from "moment";
import { CircularProgressBase } from 'react-native-circular-progress-indicator';


const props2 = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2
};

const Objectives = (props) => {
  const [data, setSliderData] = useState(1);
  const [heures, setHeures] = useState(1);
  const [heuresMoyennes, setHeuresMoyennes] = useState(1);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const getUserTime = async () => {
    const docName = auth.currentUser.email + " " + moment().format("YYYY-MM-DD");
    const docRef = doc(db, "Heures", docName);
    const docSnap = await getDoc(docRef);
    if(docSnap){
    setHeures(docSnap.data().HeuresAujourdhui)
    }
  };

  const getUserAverage = async () => {
  const q = query(collection(db, "Heures"));
  let heures = 0
  let count = 0

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if(doc.data().user_email == auth.currentUser.email)
    heures += doc.data().HeuresAujourdhui;
    count ++;
  });
  setHeuresMoyennes(heures/count)
  console.log("😁", heures , count);
  }

  getUserTime()
  getUserAverage()

  return (
    <View style={styles.braceContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>Objectives</Text>
      </View>
      


      <View style={{flexDirection:"row", }} >

    <View>
    <CircularProgressBase
  {...props2}
  value={23/24*100}
  radius={120}
  activeStrokeColor={'#e84118'}
  inActiveStrokeColor={'#e84118'}
>
  <CircularProgressBase
    {...props2}
    value={heuresMoyennes/23*100}
    radius={100}
    activeStrokeColor={'#badc58'}
    inActiveStrokeColor={'#badc58'}
  >
    <CircularProgressBase
      {...props2}
      value={heures/23*100}
      radius={75}
      activeStrokeColor={'#18dcff'}
      inActiveStrokeColor={'#18dcff'}
    />
  </CircularProgressBase>
</CircularProgressBase>
    </View>





        <View >
        <Text style={{flexDirection:"row",fontSize:20, color:"red",  fontFamily: 'Inter-Black',}}> {heuresMoyennes.toFixed(0)} heures (moyenne)</Text>
        <Text style={{flexDirection:"row",fontSize:20, color:"green", fontFamily: 'Inter-Black',}}>  23 heures (Objectif)</Text>
        <Text style={{flexDirection:"row",fontSize:20, color:"lightblue", fontFamily: 'Inter-Black',}}> {heures} heures (aujourd'hui)</Text>
      </View>
      





</View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
      
        
      </View>
      <Text style={{ color: "white", marginTop: 40, fontSize: 18 ,     fontFamily: 'Inter-Black', }}>
        Combien de temps as-tu porte ton corset? (heures){" "}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Slider
          style={{ width: "80%", marginLeft: 5 }}
          minimumValue={0.5}
          maximumValue={23}
          step={0.5}
          minimumTrackTintColor="lightblue"
          maximumTrackTintColor="lightblue"
          value={data}
          onValueChange={(sliderValue) => setSliderData(sliderValue)}
        />
        <Text style={{ color: "lightblue", marginLeft: 25, fontSize: 30 ,  fontFamily: 'Inter-Black', }}>
          {data}
        </Text>
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: "red",
          textAlign: "center",
          fontSize: 28,
          fontFamily: 'Inter-Black',
          borderRadius: 9,
      
          marginBottom: 10,
          marginTop: 30,
        }}
      >
        <Button  onPress={() => {updateUser(data); forceUpdate()}} title="Envoyer" />
      </TouchableHighlight>
    </View>
  );
};

const updateUser = async (d) => {
  const docName = auth.currentUser.email + " " + moment().format("YYYY-MM-DD");
  const docRef = doc(db, "Heures", docName);
  const docSnap = await getDoc(docRef);


  if (docSnap.exists()) {
    if(docSnap.data().HeuresAujourdhui + d > 24) {
      Alert.alert("Vous ne pouvez pas depasser 24h.")
    }
    else {
    await updateDoc(docRef, {
      HeuresAujourdhui: docSnap.data().HeuresAujourdhui + d
    });
    Alert.alert("Bien envoye. Tes heures ont ete mises a jour")
  }
  } else {
    // doc.data() will be undefined in this case
    setDoc(
      doc(
        db,
        "Heures",
        auth.currentUser?.email + " " + moment().format("YYYY-MM-DD")
      ),
      {
        user: auth.currentUser?.uid,
        user_email: auth.currentUser?.email,
        date: moment().format("lll"),
        HeuresAujourdhui: d,
        // HeuresMoyenne: data,
      }
    ).then(Alert.alert("Bien envoye. Merci pour ton temps!"));
  }
};

export default Objectives;
