var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
}