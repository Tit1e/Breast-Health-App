<template>
  <div class="result">
    <div>
      <div>
        <span class="b-weight">重量: {{ childMsg.weight }} g</span>
        <button class="btn-xs">左胸</button>
      </div>
      <div class="compare">
        <div>与昨天相比 : {{ childMsg.comparew_yd }} g</div>
        <div>与上周相比 : {{ childMsg.comaprew_lw }} g</div>
      </div>
    </div>
    <div>
      <div>
        <span class="b-weight">温度: {{ childMsg.temperature }} &#8451;</span>
      </div>
      <div class="compare">
        <div>与昨天相比 : {{ childMsg.comparet_yd }} &#8451;</div>
        <div>与上周相比 : {{ childMsg.comapret_lw }} &#8451;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['childMsg']

}
</script>
<style lang="scss" scoped>
.result {
  text-align: left;
  font-size: 12px;
  >div {
    margin: 20px 0px;
  }
  .b-weight {
    font-size: 16px;
  }
  .btn-xs {
    float: right;
  }
  .compare {
    display: flex;
    margin-top: 10px;
    div {
      flex-grow: 1;
    }
  }
}
</style>


