![react-jersey](logo.png)

# react-jersey

> A UI Component Library for Computers

## Installation

```
npm i react-jersey
```

## Avatar

```js
import {Avatar} from 'react-jersey';

export default () => <Avatar url="myFace.jpg" />;
```

If no `url` is provided, a default image from [Adorable Avatars](http://avatars.adorable.io/)
will be used. To generate a unique image from that service, pass along a `uniqid="blah"`
attribute where `blah` is unique per avatar being shown.

## BoxTop

```js
import {BoxTop} from 'react-jersey';

export default () => <div>
  <BoxTop borderColor="hotpink">
    Hello, World!
  </BoxTop>
  <div>
    Information about my beanie baby collection here.
  </div>
</div>;
```

## Card

```js
import {Card} from 'react-jersey';

export default () => <Card borderColor="hotpink">
  Hello, World!
</Card>;
```

## TabGroup

```js
import {Tab, TabGroup} from 'react-jersey';

export default () => <TabGroup>
  <Tab title="Tab #1">
    Hello from Tab #1 Content.
  </Tab>
  <Tab title="Tab #2">
    Hello from Tab #2 Content.
  </Tab>
  <Tab title="Tab #3">
    Hello from Tab #3 Content.
  </Tab>
</TabGroup>;
```
