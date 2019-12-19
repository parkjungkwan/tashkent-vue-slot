<template>
<div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">비트캠프</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><router-link to="/">HOME</router-link></li>
        <li><router-link to="/cart">장바구니</router-link></li>
        <li><router-link to="/calculator">계산기</router-link></li>
        <li><router-link to="/seqsum">입력된 두수사이의 자연수의 합</router-link></li>
        <li><router-link to="/account">계좌개설</router-link></li> 
        <li><router-link to="/todo2">할일목록</router-link></li> 
        <li><router-link to="/parent">슬롯테스트</router-link></li> 
        <li>회원가입</li>
        <li>로그인</li>
      </ul>
    </div>
  </nav>
</div>	
</template>	
<script>
export default{

}
</script>
<style scoped></style>