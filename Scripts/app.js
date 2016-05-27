var para = ["Introduction: Global Warming means gradual increase in world’s temperature caused by greenhouse gases. The impact of global warming can be seen in sea level, crops, rainfall, and human health.Massive deforestation, burning of fossil fuels, industrial emissions, etc. have resulted to an increase in green-house gases around earth’s atmosphere.",
            "The greenhouse-gases trap Sun rays in the earth’s atmosphere causing the temperature to rise resulting in what is known as global warming.The heat would have otherwise released if the greenhouse-gases were not present in such huge quantity. The warming of atmosphere due to the presence of greenhouse-gases is called greenhouse effect.",
            "Greenhouse gases The main greenhouse gas that is responsible for global warming is carbon dioxide(CO2). Others include nitrous-oxide, chlorofluorocarbon (CFC), methane, etc. Greenhouse gases come from various sources."];

(function(){
    var page = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
    switch(page){
        case "Home.html":
        document.getElementById("firstParagraph").innerHTML = para[0];
        break;
        case "About.html":
        document.getElementById("secondParagraph").innerHTML = para[1];
        break;
        case "Projects.html":
        document.getElementById("thirdParagraph").innerHTML = para[2];
        break;
        default:
        alert("ERROR");
        break;
    }
})();