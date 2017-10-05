<template>
  <div class="time-pick">
    <h3>提醒时间</h3>
    <div class="time-div">
      <div class="top-cover"></div>
      <div class="time-block">
        <div>20</div>
        <div class="colon"></div>
        <div>31</div>
      </div>
      <div class="time-block">
        <div>21</div>
        <div class="colon">:</div>
        <div>32</div>
      </div>
      <div class="time-block">
        <div>22</div>
        <div class="colon"></div>
        <div>33</div>
      </div>
      <div class="bottom-cover"></div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.time-pick {
  padding-top: 15%;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .time-div{
    position: relative;
    font-size: 36px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
    box-sizing: border-box;
    .top-cover{
      position: absolute;
      top:0;
      width: 100%;
      height: 55px;;
      background:-webkit-gradient(linear, 0 0, 0 bottom, from(#FDF3FB), to(rgba(253,243,251,0.6)));
    }
    .bottom-cover{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 55px;;
      background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(253,243,251,0.6)), to(#FDF3FB));
    }
    .time-block{
      display: flex;
      padding: 7px;
      .colon{
        width: 40px;
      }
      div:not(.colon){
        flex-grow: 1;
      }
      div:nth-child(1){
        text-align: right;
      }
      div:nth-child(3){
        text-align: left;
      }
    }
    .time-block:nth-child(3){
      border-top: 1px solid #F9AFC0;
      border-bottom: 1px solid #F9AFC0;
    }
  }
}
</style>

