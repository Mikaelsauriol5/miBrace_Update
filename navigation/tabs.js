import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Objectives from "../views/Objectives";
import Options from "../views/Options";
import BraceItem from "../views/BraceItem";
import Rating from "../views/Rating";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor:"#eee",
      
       
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Maison"
        component={BraceItem}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                
             
              }}
            >
              <Image
                source={require("../assets/images/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#add8e6" : "748c94",
                }}
              />
              <Text style={{ color: focused ? "#add8e6" : "748c94" }}>Maison</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Objectifs"
        component={Objectives}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
       
              }}
            >
              <Image
                source={require("../assets/images/Objectifs.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#add8e6" : "748c94",
                }}
              />
              <Text style={{ color: focused ? "#add8e6" : "748c94"}}>
                Objectifs
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Rating"
        component={Rating}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
         
              }}
            >
              <Image
                source={require("../assets/images/star.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#add8e6" : "748c94",
                }}
              />
              <Text style={{ color: focused ? "#add8e6" : "748c94" }}>
                Satisfaction
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
         
              }}
            >
              <Image
                source={require("../assets/images/settings.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#add8e6" : "748c94",
                }}
              />
              <Text style={{ color: focused ? "#add8e6" : "748c94" }}>
                Options
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
