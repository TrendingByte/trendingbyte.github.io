---
sidebar_position: 1
---

# React Native with Tailwind

In this post, we'll explore how to use React Native with Tailwind to build cross-platform mobile applications. React Native is an open-source framework that allows developers to create native mobile applications using web technologies such as HTML, CSS, and JavaScript. Tailwind is a popular utility-first CSS framework.

## Installation of the dependencies

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="npm" label="npm">

```npm
npm install twrnc
```

</TabItem>
<TabItem value="yarn" label="yarn">

```yarn
yarn add twrnc
```

</TabItem>
</Tabs>

## Usage

```jsx title="App.js"
import tw from 'twrnc';

const MyComponent = () => (
  <View style={tw`bg-blue-100`}>
    <Text style={tw`text-md', invalid && 'text-red-500`}>Hello</Text>
  </View>
);
```