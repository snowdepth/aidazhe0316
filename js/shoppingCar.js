$(function(){
	var oBtn = document.getElementById("btn");
	var oList = document.getElementById("list");
	oBtn.onclick = function(){
		var comment = oText.value;
		var oLi = document.createElement("li");
		
		oLi.onclick = function(){
			var res = confirm("是否删除此商品？");
			if(res){
				this.remove();
			}
		}
		oList.appendChild(oLi);		
	}
});