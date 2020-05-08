<%--
  Created by IntelliJ IDEA.
  User: vtrang
  Date: 5/7/20
  Time: 12:35 PM
  To change this template use File | Settings | File Templates.
--%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:wrapper>
    <div class="container mt-5">
        <header>
            <h1>Customer Contact Form</h1>
        </header>
        <div>
            <c: if test="${requestScope.errMessage != null}">
                    ${requestScope.errMessage}
            </c:>
        </div>
        <hr/>
        <!-- FORM BEGIN -->
        <form id="form" class="mb-5" action="${pageContext.request.contextPath}/contact-us" method="post">
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputName">*Name:</label>
                    <input type="text" class="form-control" name="fullName" id="inputName" placeholder="Full name">
                    <small class="form-text text-muted">Enter your full name.</small>
                </div>
            </div>
            <div class="form-row">
                <legend class="col-form-label">*Gender:</legend>
                <div class="form-group col-md-6">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="inputGenderM" value="Male"
                               checked>
                        <label class="form-check-label" for="inputGenderM">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="inputGenderF" value="Female">
                        <label class="form-check-label" for="inputGenderF">Female</label>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="category">*Category:</label>
                    <select class="form-control" id="category" name="category">
                        <option value="">Select...</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
                        <option value="Primary Care">Primary Care</option>
                        <option value="[Other]">[Other]</option>
                    </select>
                    <c: if test="${requestScope.category == ''}">
                        <c:out value="ABC: ${requestScope.category}"/>
                    </c:>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="textAreaMessage">*Message:</label>
                    <textarea class="form-control" id="textAreaMessage" name="message" rows="3"></textarea>
                </div>
            </div>
            <div class="form-row float-right">
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
            </div>
        </form>
        <!-- FROM END -->
    </div>
</t:wrapper>