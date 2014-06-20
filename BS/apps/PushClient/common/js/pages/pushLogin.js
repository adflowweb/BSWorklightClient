
	


function loginFunction() {

	var check = loginFormCheck();

	if (check) {
		//pagesHistory.push("pages/pushList.html");
		$("#page-container").load("pages/pushList.html", null,function() {
	
		});
	}
}

function loginFormCheck() {
	var conwidht=$('#page-container').width();
	var cooheight=$('#page-container').height();
	var loginId = $('#loginId').val();
	var loginPass = $('#loginPass').val();

	if (loginId === null || loginId === "") {
		alert('Id 를 입력해주세요');
		return false;
	} else if (loginPass === null || loginPass === "") {
		alert('passWord 를 입력해주세요');
		return false;
	}

	return true;
}