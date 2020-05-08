<%--
  Created by IntelliJ IDEA.
  User: vtrang
  Date: 5/7/20
  Time: 11:30 AM
  To change this template use File | Settings | File Templates.
--%>
<%@tag description="Lab 13 Wrapper Tag" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servlet - Homepage - The Vinh - 611035</title>

    <link rel="icon" href="./assets/images/v.png" type="image/x-icon" />

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous">
    <link href="./assets/css/main.css"
          type="text/css"
          rel="stylesheet"/>

    <script src="https://code.jquery.com/jquery-3.5.0.js"
            integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc="
            crossorigin="anonymous"></script>
</head>
<body>
<%@include file="/WEB-INF/fragments/header.jsp"%>
<main class="body">
        <jsp:doBody/>
</main>
<%@include file="/WEB-INF/fragments/footer.jsp"%>
</body>
</html>