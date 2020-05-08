<%--
  Created by IntelliJ IDEA.
  User: vtrang
  Date: 5/7/20
  Time: 11:27 AM
  To change this template use File | Settings | File Templates.
--%>
<div class="row mt-5">
    <div class="col-12">
        <span class="float-left">Hit Count for this page: <c:out value="${requestScope.hitCountByPage}"/></span>
        <span class="float-right">Hit Count for the entry WebApp:  <c:out value="${requestScope.totalHitCount}"/></span>
    </div>
</div>