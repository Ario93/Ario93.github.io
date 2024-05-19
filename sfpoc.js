const ifr1 = {
    "iec613122012": {
        "preview": "https://drive.google.com/file/d/1Haal3_iPOrbTIKG4Dd4a56l9_4wWUF8d/preview",
        "download": "https://drive.google.com/uc?export=download&id=1Haal3_iPOrbTIKG4Dd4a56l9_4wWUF8d"
    }
};

function tmp_ifr_sfpoc(idbkttp,ifr,prm_isi){
	
	if(ifr == 1){
		
		document.getElementById('bk'+idbkttp).style.display="none";
		document.getElementById('ttp'+idbkttp).style.display="block";
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('ifr'+ifr).style.display="block";
		
	}
	
}

function tmp_ifr_sfpoc_close(idbkttp,ifr,prm_isi){
	
	document.getElementById('bk'+idbkttp).style.display="block";
	document.getElementById('ttp'+idbkttp).style.display="none";
	document.getElementById('iframetbl'+ifr).src = "";
	document.getElementById('ifr'+ifr).style.display="none";

}