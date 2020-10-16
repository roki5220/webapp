<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<!DOCTYPE html>
<% request.setCharacterEncoding("UTF-8"); %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ch05/post.jsp</title>
</head>
<body>
    <% 
        String name = request.getParameter("name");
        String major = request.getParameter("major");
        String passwrd = request.getParameter("passwrd");
        String file = request.getParameter("file");
    %>
    <h2>이름: <%=name%></h2>
    <h2>전공: <%=major%></h2>
    <h2>비밀번호: <%=passwrd%></h2>
    <h2>파일명: <%=file%></h2>
</body>
</html>