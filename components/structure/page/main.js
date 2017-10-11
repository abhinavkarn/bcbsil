
// Server-side JavaScript for the main.html logic
function year(){
    var Calendar = Packages.java.util.Calendar;
    var currentYear = Calendar.getInstance().get(Calendar.YEAR);

    return {
        year: currentYear
    };
}