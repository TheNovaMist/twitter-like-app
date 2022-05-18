import Carousel from "react-native-snap-carousel";
import React, { Component } from "react";

import { StyleSheet, View, Image } from "react-native";
import imageData from "./ImgaesData";

const sliderWidth = 300;
const itemWidth = 300;

export class MyCarousel extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image source={item.url} style={styles.image} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.box}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={imageData}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "floralwhite",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    padding: 10,
    resizeMode: "cover",
    width: 250,
    height: 250,
  },
  box: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
