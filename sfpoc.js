var ifr1 = {
    "iec613122012": {
        "preview": "https://drive.google.com/file/d/1Haal3_iPOrbTIKG4Dd4a56l9_4wWUF8d/preview",
        "view": "https://drive.google.com/file/d/1Haal3_iPOrbTIKG4Dd4a56l9_4wWUF8d/view",
        "download": "https://drive.google.com/uc?export=download&id=1Haal3_iPOrbTIKG4Dd4a56l9_4wWUF8d"
    },
    "nfpa7802020": {
        "preview": "https://drive.google.com/file/d/1WiWLnHPGSEy6cgc5R3Q9TavTo-ZEi97F/preview",
        "view": "https://drive.google.com/file/d/1WiWLnHPGSEy6cgc5R3Q9TavTo-ZEi97F/view",
        "download": "https://drive.google.com/uc?export=download&id=1WiWLnHPGSEy6cgc5R3Q9TavTo-ZEi97F"
    },
	"puil2011": {
        "preview": "https://drive.google.com/file/d/15Y4CUWinPxqm6mgZGN6AngFiNHUpxTUq/preview",
        "view": "https://drive.google.com/file/d/15Y4CUWinPxqm6mgZGN6AngFiNHUpxTUq/view",
        "download": "https://drive.google.com/uc?export=download&id=15Y4CUWinPxqm6mgZGN6AngFiNHUpxTUq"
    },
};

var ifr2 = {
    "nfpacalc7802020": {
        "preview": "https://drive.google.com/thumbnail?id=1xdf3X-AX60f3q23oU72r3BRjUfhIePjZ&sz=w1000",
    },
};

var ifr3 = {
    "rimofmeca": {
        "preview": "https://rimomodellingnew.blogspot.com/2024/04/rimofmeca.html",
    },
	"rimorbi": {
        "preview": "https://rimomodellingnew.blogspot.com/2024/04/rimo-rbi.html",
    },
};


var iframes = document.querySelectorAll('.all_ifr');
var iframes_bk = document.querySelectorAll('.all_ifr_bk');

function tmp_ifr_sfpoc(idbkttp,ifr,prm_isi){
	
	iframes.forEach(function(iframe) {
		iframe.style.display = 'none';
	});
	iframes_bk.forEach(function(iframe) {
		iframe.style.display = 'block';
	});
	
	document.getElementById('homealive_samping_sidemenu').style.display="none";
	document.getElementById('ifr'+ifr).style.display="block";
	document.getElementById('bk'+idbkttp).style.display="none";
	document.getElementById('ttp'+idbkttp).style.display="block";
		
	if(ifr == 1){
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('url_download').href=ifr1[prm_isi].download;
		document.getElementById('url_print').href=ifr1[prm_isi].view;
		document.getElementById('tmp_url_print').style.display="block";
		document.getElementById('tmp_url_download').style.display="block";
		
	}else if(ifr == 2){
		document.getElementById('iframetbl'+ifr).src = ifr2[prm_isi].preview;
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	
	}else if(ifr == 3){
		
		document.getElementById('iframetbl'+ifr).src = ifr3[prm_isi].preview;
	
	}
	
	
	
}

function tmp_ifr_sfpoc_close(idbkttp,ifr,prm_isi){
	
	iframes.forEach(function(iframe) {
		iframe.style.display = 'none';
	});
	iframes_bk.forEach(function(iframe) {
		iframe.style.display = 'block';
	});
	document.getElementById('bk'+idbkttp).style.display="block";
	document.getElementById('ttp'+idbkttp).style.display="none";
	document.getElementById('iframetbl'+ifr).src = "";
	document.getElementById('iframetbl'+ifr).src = "";
	document.getElementById('url_download').href="";
	document.getElementById('ifr'+ifr).style.display="none";
	document.getElementById('homealive_samping_sidemenu').style.display="block";

}