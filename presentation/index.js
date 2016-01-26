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
            <Heading fit caps>Redux Bootcamp</Heading>
          </Slide>
          <Slide>
            <Heading fit caps>1. Single Source of Truth</Heading>
            <Text>All state is stored within a single object tree, inside a single store</Text>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/single-store.example")}
            />
          </Slide>
          <Slide notes="Ensures that neither views nor callbacks will write directly to store. Mutations are in order, so no race conditions. Actions can be logged, stored and replayed for debugging.">
            <Heading fit caps>2. State is read-only</Heading>
            <Layout>
              <Fill>
                <Text>You must emit actions to mutate state</Text>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <CodePane
                  lang="javascript"
                  source={require("raw!../assets/emit-actions.example")}
                  margin={10}
                />
              </Fill>
              <Fill>
                <Appear fid="1">
                  <CodePane
                    lang="javascript"
                    source={require("raw!../assets/single-store-after-emitting-actions.example")}
                    margin={10}
                  />
              </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide notes="Pure means they don't mutate anything - they return the next state">
            <Heading fit caps>3. Changes are made with pure functions</Heading>
            <Text>To specify how state is transformed by actions, write pure reducers</Text>
            <Layout>
              <Fill>
                <CodePane
                  lang="javascript"
                  source={require("raw!../assets/pure-todo-reducer.example")}
                />
              </Fill>
            </Layout>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/reducer-and-store.example")}
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
