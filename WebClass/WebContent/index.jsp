<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%-- 2.jsp주석 tag --%>
	<%--3.Declaration tag(선언부) --%>
	<%!private static final String DEFAULT_NAME = "Guest";%>
	<%--4.scriptlet tag --%>
	<%
		//자바 코드를 그대로 작성
		String name = request.getParameter("name");
		if (name == null) name = DEFAULT_NAME;
		//out.println("<h1> hello," + name +"</h1>");
	%>
	<%--5. Expression tag(표현식) --%>
	<h1>Hello, <%=name %></h1>
</body>
</html>