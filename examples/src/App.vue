<template>
  <div id="app">
    <h1>常规</h1>
    <normal></normal>
    <h1>element</h1>
    <elementExample></elementExample>
    <h1>orders</h1>
    <orders></orders>
    <h1>edit</h1>
    <edit></edit>
    <h1>props</h1>
    <props></props>
    <h1>render</h1>
    <render></render>
    <h1>editRender</h1>
    <editRender></editRender>
    <h1>optionKey</h1>
    <optionKey></optionKey>
    <h1>slot</h1>
    <slotExample></slotExample>
  </div>
</template>

<script>
import normal from './components/normal'
import elementExample from './components/element'
import orders from './components/orders'
import edit from './components/edit'

import props from './components/fileds/props'
import render from './components/fileds/render'
import editRender from './components/fileds/editRender'
import optionKey from './components/fileds/optionKey'
import slotExample from './components/fileds/slot'
export default {
  name: 'app',
  components: {
    normal, elementExample, orders, edit, props, render, editRender, optionKey, slotExample
  }
}
</script>

<style scoped>
#app {
  width: 500px;
  margin: 0 auto;
}
h1 {
  font-size: 20px;
  font-weight: bold;
  color: cornflowerblue;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}
</style>

