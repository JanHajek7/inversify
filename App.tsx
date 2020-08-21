import "reflect-metadata";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, resolve } from "inversify-react";

import { Button } from "react-native-elements";

import { container } from "./ioc";
import { myService } from "./my-service";

export default class App extends React.Component<{}, { myText: string }> {
  @resolve(myService) private _myService: myService;

  constructor(props: {}) {
    super(props);

    this.state = { myText: "" };
  }

  async getText() {
    console.log(container);
    console.log("=======BEFORE=======");

    const text = await this._myService.myfnc();
    console.log(text), "text text ";
    this.setState({ myText: text });
    console.log("=======AFTER=======");
  }

  componentDidMount() {
    console.log(container);
  }

  render() {
    return (
      <Provider container={container}>
        <View>
          <Text>{this.state.myText}</Text>

          <Button onPress={this.getText}>click</Button>

          <StatusBar style="auto" />
        </View>
      </Provider>
    );
  }
}
