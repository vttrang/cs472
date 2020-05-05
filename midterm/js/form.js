$($(document).ready(function() {
    "use strict";
    $('#frm').submit(function(e) {
        e.preventDefault();
        let fullName = $('#inputFullName').val();
        let iD = $('#inputCitizenID').val();
        let sSN = $('#inputSSN').val();
        let state = $('#inputState option:selected').val();
        let seniorCitizen = $("input[name='seniorCitizen']:checked").val();
        save(fullName, iD, sSN, state, seniorCitizen);
        fillForm('', '', '', '', '');
    });
}));

function fillForm(fullName, iD, sSN, state, seniorCitizen) {
    $('#inputFullName').val(fullName);
    $('#inputCitizenID').val(iD);
    $('#inputSSN').val(sSN);
    $('#inputState option:selected').val(state);
    if (seniorCitizen === '') {
        $('input[name="seniorCitizen"]:checked').prop('checked', false);
    } else if (seniorCitizen === 'Yes') {
        $('#inlineCheckbox1').prop('checked', true);
    } else {
        $('#inlineCheckbox2').prop('checked', true);
    }

}

function save(fullName, iD, sSN, state, senior) {
    if (validateUpdate(iD, sSN)) {
        let tr = `<tr>
        <td>${iD}</td>
        <td>${sSN}</td>
        <td>${fullName}</td>
        <td>${state}</td>
        <td>${senior}</td>
        <td>
            <button class="btn btn-outline-danger btn-sm" id="${iD}-delete">Delete</button>
            <button class="btn btn-outline-dark btn-sm" id="${iD}-update">Update</button>
        </td>
        `;
        $('#tbl').append(tr);
        regisButtonsEvent(iD);
    }

}

function validateUpdate(iD, sSN) {
    let result = true;
    let tbl = $('#tbl');
    let tdID = tbl.find('td:contains("' + id + '"');
    if (tdID.length > 0) {
        result = false;
    }
    let tdSSN = tbl.find('td:contains("' + sSN + '"');
    if (tdSSN.length > 0) {
        result = false;
    }
    return result;
}

function regisButtonsEvent(iD) {
    let deleteBtn = $('#' + iD + '-delete');
    let updateBtn = $('#' + iD + '-update');

    deleteBtn.click(function(e) {
        let tr = $(this).parents('tr');
        tr.remove();
    });

    updateBtn.click(function(e) {
        let tr = $(this).parents('tr');
        let iD = $(tr.find('td')[0]).html();
        let sSN = $(tr.find('td')[1]).html();
        let fullName = $(tr.find('td')[2]).html();
        let state = $(tr.find('td')[3]).html();
        let senior = $(tr.find('td')[4]).html();
        let btn = $('#frm button[type="submit"]').text('Save');
        fillForm(fullName, iD, sSN, state, senior);
    });
}