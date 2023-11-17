<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: "App",
}
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

html,
body,
form,
fieldset,
p,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
  -webkit-text-size-adjust: none;
}

body {
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

fieldset,
img {
  border: 0;
}

img {
  display: block;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

input {
  outline: 0;
  border-radius: 0;
  line-height: normal;
}

.selector-for-some-widget {
  box-sizing: content-box;
}


input {
  border: 0;
  outline: none;
  -webkit-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}</style>
