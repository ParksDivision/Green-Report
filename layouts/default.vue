<template>
  <div>
    <Nuxt />
  </div>
</template>

<link
  href="https://fonts.googleapis.com/css?family=Langar:regular"
  rel="stylesheet"
/>,
<style>
html {
  font-family: Langar, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  background-color: rgba(74, 139, 245, 1);
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--blue:hover {
  color: #fff;
  background-color: rgba(26, 53, 91, 1);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
