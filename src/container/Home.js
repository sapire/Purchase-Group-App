import React, { Component } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import { Card, Header } from "../component";
import { Colors, Images } from "../config";
let {width} = Dimensions.get('window')

export class Home extends Component {
  state = {
    data: [1, 2, 3, 4, 5],
    title: "Card 1",
    image: Images.card1,
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.gray,
          height: 80,
          width: width * 0.28,
          justifyContent: "center",
          alignItems: "center",
          marginRight: width * 0.05,
        }}
      >
        <Text>Card</Text>
      </View>
    );
  };

  onClickCard = (title, image) => {
    this.setState({
      title,
      image,
    });
  };

  render() {
    let { data, title, image } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <Card
              title="Card 1"
              onPress={() => this.onClickCard("Card 1", Images.card1)}
              image={Images.card1}
            />
            <Card
              title="Card 2"
              onPress={() => this.onClickCard("Card 2", Images.card2)}
              image={Images.card2}
            />
            <Card
              title="Card 3"
              onPress={() => this.onClickCard("Card 3", Images.card3)}
              image={Images.card3}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              width: "100%",
              marginTop: 20,
            }}
          >
            <Image
              source={image}
              style={{ width: "100%", height: 220 }}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 26, color: Colors.black, marginTop: 20 }}>
              {title}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontSize: 14 }}>{"< person icon >"} 500</Text>
              <Text style={{ marginLeft: 20, fontSize: 14 }}>
                {"< person icon >"} 1000
              </Text>
            </View>
            <Text style={{ fontSize: 26, color: Colors.black, marginTop: 20 }}>
              Category Title
            </Text>

            <View style={{width:'100%',marginTop: 20, }}>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={this.renderItem}
              showsHorizontalScrollIndicator={false}
            />
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
