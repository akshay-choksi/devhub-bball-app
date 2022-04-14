import React from "react"
import { View, Linking } from "react-native"
import football from "../../assets/basketball.gif"
import search from "../../assets/search.png"
import Navbar from "../navigation/Navbar"

import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
} from "react-native-rapi-ui"

export default function ({ navigation }) {
  //const { isDarkmode, setTheme } = useTheme();
  return (
    <div
    className="main-container">
      <Navbar />
      <div className="top-right">
        <img src="https://media-public.canva.com/Cburs/MADf5mCburs/2/s.svg" />
      </div>
      <div className="random-text">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h2>random text</h2>
      </div>
      <div className="pred-scro">
        <span></span>
        <h2>predict scores</h2>
      </div>
      <div className="bottom-left">
        <img src="https://media-public.canva.com/Cburs/MADf5mCburs/2/s.svg" />
      </div>
      <div className="title-bg">
        <div className="title-container">
          <h1>Basketball</h1>
          <img src={football} />
        </div>
      </div>
      <div className="input-box">
        <input type="text" />
        <button>
          <img src={search} alt="search" /> </button>
      </div>
         {/* <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            /> */}
    </div>
  )
}
