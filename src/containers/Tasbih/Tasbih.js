import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from "react-native";
import { Colors } from "../../theme";
import { DuaListNumberSVG, DuaForwardSVG } from "../../assets/icons";
LogBox.ignoreAllLogs();

const Tasbih = ({ navigation }) => {
  return (
    <View style={styles.containerMain}>
      <StatusBar backgroundColor={Colors.primary} />

      <View style={{ top: 5 }}>
        <ScrollView>
          <View style={{ flexDirection: "column", alignItems: "center" }}>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihOne")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    1
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Names of Allah
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwo")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    2
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Throughout the day, Times of distress
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihThree")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    3
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    After prayer, Seeking peace
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihFour")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    4
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Expressing gratitude, Seeking blessings
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihFive")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    5
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Expressing awe, Seeking strength
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihSix")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    6
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking forgiveness, Times of hardship
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihSeven")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    7
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Trusting Allah, Overcoming challenges
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihEight")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    8
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Trusting Allah, Seeking Ease
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihNine")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    9
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking ease, Overcoming challenges
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    10
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Times of distress, Seeking strength
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihEleven")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    11
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking forgiveness, After wrongdoing
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwelve")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    12
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    In times of need, Seeking comfort
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihThirteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    13
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking mercy and compassion, Family matters
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihFourteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    14
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking guidance and support, Daily affairs
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihFifteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    15
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking answers to prayers, Seeking help
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihSixteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    16
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking sustenance and generosity, Financial stability
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihSeventeen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    17
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking blessings and favors, Family harmony
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihEighteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    18
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking strength and dignity, Empowerment
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihNinteen")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    19
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Strengthening familial bonds, Seeking love
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwenty")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    20
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Financial Stability, Seeking provision
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyOne")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    21
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking closeness to Allah, Seeking assistance
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyTwo")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    22
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking closeness to Allah, Seeking assistance
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyThree")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    23
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Raising in status or honor, Seeking upliftment
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyFour")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    24
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Maintaining peace
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyFive")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    25
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Seeking knowledge
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentySix")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    26
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Praying for Parents
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentySeven")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    27
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Praying for Parents
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyEight")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    28
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Easing Anxiety
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihTwentyNine")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    29
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Overcoming Depression
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihThirty")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    30
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Protection and Success for Children
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihThirtyOne")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    31
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Protection from Evil Eye for Children
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("TasbihThirtyTwo")}>
              <View style={styles.advImageContainer}>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                >
                  <View style={{ height: 30 }}></View>
                  <DuaListNumberSVG />
                  <View style={{ height: 3 }}></View>
                  <Text
                    style={{
                      bottom: 40,
                      textAlign: "center",
                      fontWeight: "500",
                      color: Colors.primary,
                      fontSize: 15,
                      fontFamily: "Raleway",
                    }}
                  >
                    32
                  </Text>
                </View>
                <View style={{ backgroundColor: "#FFF", flex: 1.4 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      alignSelf: "flex-start",
                      top: 24,
                      color: Colors.primary,
                      fontSize: 14,
                      fontWeight: "600",
                      fontFamily: "Raleway",
                    }}
                  >
                    Protection from Evil Eye
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                >
                  <DuaForwardSVG />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ height: 20 }}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Tasbih;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  advImageContainer: {
    width: "94%",
    height: 70,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.bordercolor,
  },
});
