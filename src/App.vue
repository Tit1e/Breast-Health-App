<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from './components/footer/footer'

export default {
  name: 'app',
  components: {
    FooterNav
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F9AFC0;
  background-color: #FDF3FB;
}

.btn {
  color: #fff;
  background-color: #F8C8CC;
  border: 1px solid #F9AFC0;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  width: 100px;
  box-shadow: 0px 3px 10px 3px rgba(245, 161, 177, 0.3);
  margin-bottom: 30px;
}
.btn-xs{
  border:none;
  color: #fff;
  background-color: #FDD6DF;
  border-radius: 3px;
  padding: 4px 10px;
  font-weight: bold;
}
</style>
