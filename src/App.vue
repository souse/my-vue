<template>
  	<div id="app">
    	<router-view></router-view>
  	</div>
</template>

<script>
export default {
  	name: 'app'
}
</script>
<style>
	* {
	    margin: 0;
	    padding: 0;
	    -webkit-box-sizing: border-box;
	    -ms-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    border: 0;
	}
	body {
	    -webkit-text-size-adjust: 100%;
	    background: #fff;
	    min-width: 320px;
	    margin: 0;
	    padding: 0;
	    height: 100%;
	    width: 100%;
	    overflow-x: hidden;
	    -webkit-overflow-scrolling: touch;
	    font-family: PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif;
	}
	html {
	    -webkit-text-size-adjust: 100%;
	    -ms-text-size-adjust: 100%;
	    text-size-adjust: 100%;
	}
	img {
		border: 0;
		vertical-align: middle;
	}
	a, div, header, span {
		-webkit-tap-highlight-color: rgba(255,255,255,0);	
	}
	em, i {
		text-decoration: none;
    	font-style: normal;
	}
	a {
		text-decoration: none;
	}
	.normal_list a .product_info_box:after {
		content: '';
	    height: 1px;
	    width: 200%;
	    position: absolute;
	    left: 0;
	    top: auto;
	    right: auto;
	    bottom: -4px;
	    background-color: #e3e5e9;
	    border: 0px solid transparent;
	    border-radius: 0px;
	    -webkit-border-radius: 0px;
	    transform: scale(0.5);
	    -webkit-transform: scale(0.5);
	    transform-origin: top left;
	    -webkit-transform-origin: top left;-webkit-animation-fill-mode: both;
	    -o-animation-fill-mode: both;
	    animation-fill-mode: both;	
	}
</style>
