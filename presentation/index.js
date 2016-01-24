import React from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";


import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "#fe7c00"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary" notes="OH HAI DAR">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Redux
            </Heading>
            <Heading size={2} fit caps>Predictable State Container</Heading>
            <Link href="https://twitter.com/cianmm">
              <Text bold caps textColor="tertiary">@Cianmm</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading>Why Redux?</Heading>
            <List>
              <ListItem>Conceptually simpler than Flux</ListItem>
              <ListItem>Great dev experience</ListItem>
              <ListItem>Growing ecosystem</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading fit capsem>Redux Bootcamp</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>1. Single Source of Truth</Heading>
            <Text>All of your state is stored within a single object tree, inside a single store</Text>
          </Slide>
          <Slide>
            <Heading fit caps>1. Single Source of Truth</Heading>
            <Text>All of your state is stored within a single object tree, inside a single store</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
