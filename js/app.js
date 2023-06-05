document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

if(localStorage.getItem("Html")!=='' && localStorage.getItem("Css")!=='' && localStorage.getItem("Js") !==''){
let savedHtmlCode = localStorage.getItem("Html");
let savedCssCode = localStorage.getItem("Css");
let savedJsCode = localStorage.getItem("Js");
document.getElementById("htmlCode").value= savedHtmlCode;
document.getElementById("cssCode").value = savedCssCode;
document.getElementById("jsCode").value = savedJsCode;
showPreview();}

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
    saveCode(htmlCode,cssCode,jsCode);
}

function saveCode(html,css,js){
    let savedHtmlCode = localStorage.setItem("Html", html);
    let savedCssCode = localStorage.setItem("Css", css);
    let savedJsCode = localStorage.setItem("Js", js);
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
