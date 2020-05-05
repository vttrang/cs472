$(document).ready(function() {
    "use strict";
    $('#form').submit(function(e) {
        e.preventDefault();
        let patientID = $('#inputPatientID').val();
        let firstName = $('#inputFirstName').val();
        let middleName = $('#inputMiddleName').val();
        let lastName = $('#inputLastName').val();
        let doB = $('#inputDoB').val();
        let department = $('#department option:selected').val();
        let isOutPatient = $("input[name='outPatient']:checked").val();
        save(patientID, firstName, middleName, lastName, doB, department, isOutPatient);
        clearForm();
    });

    $('#outPatient').click(function(e) {
        let rows = $("#tbl tr td:contains('" + "No" + "')");
        if ($(this).is(":checked")) {
            rows.filter(function() {
                return $(this).text().trim() == "No";
            }).parent().addClass("d-none");
        } else {
            rows.filter(function() {
                return $(this).text().trim() == "No";
            }).parent().removeClass("d-none");

        }
    });

    $('#elderly').click(function(e) {
        if ($(this).is(":checked")) {
            console.log('elderly checked');
        }
    });

    function save(patientID, firstName, middleName, lastName, doB, department, isOutPatient) {
        let tr = `<tr>
            <td>${patientID}</td>
            <td>${firstName}</td>
            <td>${middleName}</td>
            <td>${lastName}</td>
            <td>${doB}</td>
            <td>${department}</td>
            <td>${isOutPatient}</td>
            </tr>`;
        $('#tbl').append(tr);
    }

    function clearForm() {
        $('#inputPatientID').val('');
        $('#inputFirstName').val('');
        $('#inputMiddleName').val('');
        $('#inputLastName').val('');
        $('#inputDoB').val('');
        $('#department option:selected').val('');
        $('input[name="outPatient"]:checked').prop('checked', false);
    }
});