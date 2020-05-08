<%--
  Created by IntelliJ IDEA.
  User: vtrang
  Date: 5/7/20
  Time: 12:35 PM
  To change this template use File | Settings | File Templates.
--%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<t:wrapper>
    <div id="thank-you-page" class="container">
        <div class="row mb-3 mt-3">
            <div class="col-12">
                <c:set var="now" value="<%=new java.util.Date()%>" />
                <span class="float-right"><fmt:formatDate pattern="EEEE, yyyy MMMMM dd" value="${now}" /></span>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h1 class="font-weight-lighter">Thank you! your message has been received as follow:</h1>
            </div>
            <div class="card-body" >
                <p>Name: <c:out value="${sessionScope.fullName}"/></p>
                <p class="mt-2 text-muted">Gender: <c:out value="${sessionScope.gender}"/></p>
                <p class="mt-2 text-muted">Category: <c:out value="${sessionScope.category}"/></p>
                <p class="mt-2 mb-5">Message: <c:out value="${sessionScope.message}"/></p>
                <p class="mt-2 mt-5">
                    Please feel free to
                    <a href="/lab13/contact-form"> Contact Us </a>
                    again</p>
            </div>
        </div>
    </div>
    <div class="container mb-5">
        <%@include file="/WEB-INF/fragments/hitCounter.jsp"%>
    </div>
</t:wrapper>