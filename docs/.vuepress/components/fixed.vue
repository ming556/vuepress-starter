<template>
  <div class="fixed_container">
	<div class="blck" @click="black">关闭</div>
	<div class="fixed_contenr">
		<h4>生命不息学习不止</h4>
		<p>加油，我们一起进行学习</p>
		<img src="../public/goin.jpg" alt="">
	</div>
	<div class="fixed_contenr1">
		<h4>我们的目标是</h4>
		<p>成为一位优秀的web全栈开发工程师</p>
		<img src="../public/foot.jpg" alt="">
	</div>
  </div>
</template>
<script>
export default {
	name:'fixed',
	mounted(){
		var userAgentInfo = navigator.userAgent;
    	var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    	var flag = true;
    	for (var v = 0; v < Agents.length; v++) {
        	if (userAgentInfo.indexOf(Agents[v]) > 0) {
            	flag = false;
            	break;
        	}
		}
		if (flag === false) {
			document.getElementsByClassName('fixed_container')[0].style.display = 'none'
		}
	},
	methods: {
		black(){
			document.getElementsByClassName('fixed_container')[0].style.display = 'none'
		}
	}
}
</script>
<style scoped>
.fixed_container{
  width: 10%;
  position: fixed;
  top: 20%;
  right: 0;
  height: 50%;
  background: #fff;
  box-shadow: -1px 0 2px 0.5px rgba(0,127,255,.2);
}
.fixed_contenr{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50%;
}
.fixed_contenr>h4{
	position: absolute;
	top: 0;
	color: #3eaf7c;
}
.fixed_contenr>img{
	width: 80%;
	height: 40%;
}
.fixed_contenr1{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50%;
}
.fixed_contenr1>h4{
	justify-content: center;
	position: absolute;
	top: 40%;
	color: #3eaf7c;
}
.fixed_contenr1,.fixed_contenr >p{
	text-align: center;
}
.fixed_contenr1>img{
	width: 98%;
	height: 60%;
}
.blck{
	position: relative;
	left: 80%;
	cursor: pointer;
	border:1px solid #3eaf7c;
	width: 19%;
}
</style>