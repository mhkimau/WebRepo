function a() {
	var ban = document.getElementById("ban").value;
	console.log(ban);
	var num = document.getElementById("num").value;
	var name = $('#name').val();
	console.log(name);
	num = parseInt(num);
	var name = document.getElementById("name").value;
	$.post("http://httpbin.org/post", {
		"name" : name
	}, function(data) {
		if (num > 0) {
			if (name != "") {
				var myModal = $('#myModal');
				myModal.modal();
				45
				myModal.find('.modal-body').text(name + '님 회원가입되었습니다.');

			} else {
				alert("이름을 입력해주세요");
			}

		} else {
			alert("번호를 정확히 입력해주세요");
		}
	});
}
function menu_over(e) {
	e.setAttribute("class", "nav-item active");
}
function menu_out(e) {
	e.setAttribute("class", "nav-item");
}
$(document).ready(function() {
	$('#loginForm').submit(function(event) {
		// 자동을 submit되는걸 막기
		event.preventDefault();
		// id, pw 값 가져오기
		// document.getElementById("id").value
		var id = $('#id').val();
		var pwd = $('#pwd').val();
		console.log(id, pwd);

		// 서버로 post 전송(ajax)
		$.post("http://httpbin.org/post", {
			"id" : id,
			"pwd" : pwd
		}, function(data) {
			// alert(data.form.id + '님 로그인 되었습니다.');
			var myModal = $('#myModal');
			myModal.modal();
			myModal.find('.modal-body').text(data.form.id + '님 로그인 되었습니다.')
		});
	});
});