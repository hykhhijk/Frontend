<template>
<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col-12">
    <table class="table">
      <tbody>
        <tr>
         <td scope="row">ㄱ</td><td>ㄴ</td><td>ㄷ</td><td>ㄹ</td><td>ㅁ</td><td>ㅂ</td><td>ㅅ</td>
       </tr>
       <tr>
         <td scope="row">ㅇ</td><td>ㅈ</td><td>ㅊ</td><td>ㅋ</td><td>ㅌ</td><td>ㅍ</td><td>ㅎ</td>
        </tr>
      </tbody>
     </table>
 
    </div>
    <div class="col"></div>
  </div>
  <div class="row"  style="margin:5% auto">
    <div class="col-4 text-center">
      <b-button v-b-modal.paper size="lg" style="width:66%">종이</b-button>            <!--이 부분만 jquery땜에 v-B사용 -> variant="primary" 형태로 모양 적용-->
      <b-modal id="paper" size="lg" title="Large Modal"><img src="../image/search/paper.jpg" width="100%"></b-modal>    
    </div>
    <div class="col-4 text-center">
      <b-button v-b-modal.plastic size="lg" style="width:66%">종이팩</b-button>           
      <b-modal id="plastic" size="lg" title="Large Modal"><img src="../image/search/pack.jpg" width="100%"></b-modal>   <!--button작을 시 grid로 공간 나눠서 블록레벨로 지정-->
    </div>
    <div class="col-4 text-center">
      <a href="#link" class="btn btn-secondary btn-lg center center-block mt-5" role="button">Link Button</a>
    </div>
  </div>
</div>


</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>

<style>
/* *{
    margin: 0; padding: 0;
    font-family:'맑은 고딕', 'Malgun Gothic', Gothic, sans-serif;
} */
  table{
    margin: 10% auto;
    width: 90%;
    height: 100px;
    background-color: lightgray;
}
  table td{
    text-align: center;
    border-collapse: collapse;
    border: 1px solid black;
  }
</style>


