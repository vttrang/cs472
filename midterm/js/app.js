$(document).ready(function() {
    "use strict";

    function showTime(params) {
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const date = new Date();
        const [
            { value: day }, ,
            { value: mo }, ,
            { value: da }, ,
            { value: ye }, ,
            { value: ho }, ,
            { value: min }, ,
            { value: se }, ,
            { value: dayPeriod }
        ] = dtf.formatToParts(date);
        let printDateTime = `${day}, ${da} ${mo} ${ye} - ${ho}:${min}:${se} ${dayPeriod}`;

        $('#clock').html(printDateTime);
        setTimeout(showTime, 1000);
    }
    showTime();
});