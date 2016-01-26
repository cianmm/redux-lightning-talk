import React from "react";

import {
  Heading,
  Link,
  Slide,
  Text
} from "spectacle";

export default class SlideOne extends React.Component {
  render() {
    return (
      <Slide transition={["zoom"]} bgColor="primary" notes="OH HAI DAR">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Redux
        </Heading>
        <Heading size={2} fit caps>Predictable State Container</Heading>
        <Link href="https://twitter.com/cianmm">
          <Text bold caps textColor="tertiary">@Cianmm</Text>
        </Link>
      </Slide>
    );
  }
}
