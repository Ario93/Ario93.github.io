$('#subsidiary').chosen({ width: '200px', height: '80px'}).css('background', 'white');
$('#stasiun').chosen({ width: '200px', height: '80px'});
$('#kp_point').chosen({ width: '200px', height: '80px'});

var ifr1 = {
    "ffs": {
        "preview": "https://integritycalculator.blogspot.com",
    },
	"pipetally": {
        "preview": "https://public.tableau.com/views/ip_baru_17146088122110/Depth?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=no",
    },
	"cpmonitoring": {
		"preview": "https://public.tableau.com/views/Cp_Point_AOL2Fase/Dashboard1?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=no",
	},
	"aligmentsheet": {
		"preview": "https://a360.co/4bcisxW",
	},
    
};

var ifr2 = {
	"refcpmonitoring": {
		"preview":"https://drive.google.com/file/d/1u7Yu1E0fnAEzRC_LX-YcxLvc8VBN43gL/preview",
		"view":"https://drive.google.com/file/d/1u7Yu1E0fnAEzRC_LX-YcxLvc8VBN43gL/view",
		"download":"https://drive.google.com/uc?export=download&id=1u7Yu1E0fnAEzRC_LX-YcxLvc8VBN43gL",
	},
	"api579": {
		"preview":"https://drive.google.com/file/d/1dDhk01413umHYGHZH2vp6W_SluGvj503/preview",
		"view":"'https://drive.google.com/file/d/1dDhk01413umHYGHZH2vp6W_SluGvj503/view",
		"download":"https://drive.google.com/uc?export=download&id=1dDhk01413umHYGHZH2vp6W_SluGvj503",
	},
	"DNVRPF101":{
		"preview":"https://drive.google.com/file/d/1tg2ar4tmjbySsq1HWwl5iB5y1onuRppG/preview",
		"view":"https://drive.google.com/file/d/1tg2ar4tmjbySsq1HWwl5iB5y1onuRppG/view",
		"download":"https://drive.google.com/uc?export=download&id=1tg2ar4tmjbySsq1HWwl5iB5y1onuRppG",
	},
	"KEPDIRTENGLING_MIGAS":{
		"preview":"https://drive.google.com/file/d/1-qg0VVoYepIssVhjd2uAKyAG7ddjRfwG/preview",
		"view":"https://drive.google.com/file/d/1-qg0VVoYepIssVhjd2uAKyAG7ddjRfwG/view",
		"download":"https://drive.google.com/uc?export=download&id=1dDhk01413umHYGHZH2vp6W_SluGvj503",
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
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	}else if(ifr == 2){
		
		document.getElementById('iframetbl'+ifr).src = ifr2[prm_isi].preview;
		document.getElementById('url_download').href=ifr2[prm_isi].download;
		document.getElementById('url_print').href=ifr2[prm_isi].view;
		document.getElementById('tmp_url_print').style.display="block";
		document.getElementById('tmp_url_download').style.display="block";
	}else if(ifr == 3){
		
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	
	}else if(ifr == 4){
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	
	}else if(ifr == 5){
		
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	}
	
	if(prm_isi == "cpmonitoring"){
		
		document.getElementById('search_subsidiary_stasiun').style.display="block";
		document.getElementById('prm_posisi_dd_area').value=prm_isi;
		
	}else if(prm_isi == "aligmentsheet"){
		
		document.getElementById('search_subsidiary_stasiun').style.display="block";
		document.getElementById('search_kp_point').style.display="block";
		document.getElementById('prm_posisi_dd_area').value=prm_isi;
		
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

var stasiunData = {

	PGNSSWJ: {
        "AOL": "",
        "AOSS": "",
        "AOJBB": "",
    },
	
};

var subsidiaryDropdown = document.getElementById('subsidiary');
var stasiunDropdown = document.getElementById('stasiun');

$("#subsidiary").chosen().change(function(){
	
    var selectedSubsidiary = $(this).val();
		
        stasiunDropdown.innerHTML = '<option value="">Area</option>';

    if (selectedSubsidiary) {
        var stasiuns = stasiunData[selectedSubsidiary];
        for (var stasiun in stasiuns) {
		var option = document.createElement('option');
        option.value = stasiun;
        option.text = stasiun;
        stasiunDropdown.appendChild(option);
    }
		stasiunDropdown.disabled = false;
    } else {
		stasiunDropdown.disabled = true;
    }
		
	$('#stasiun').trigger('chosen:updated');
		
});

var data_kp_point = {
    
    AOL: {
       "": "",
    },
    AOSS: {
        "": "",
    },
    AOJBB: {
        "Pig Launcher - KP 0": "https://a360.co/4bcisxW",
		"KP 0 - KP 2.5": "https://a360.co/3Wzpzfn",
		"KP 2.5 - KP 5.0": "https://a360.co/3wnNkfN",
		"KP 5.0 - KP 7.5": "https://a360.co/4amzGHs",
		"KP 7.5 - KP 10.0": "https://a360.co/3WEPq5w",
		"KP 10.0 - KP 12.5": "https://a360.co/3JWgSEn",
		"KP 12.5 - KP 15.0": "https://a360.co/3WWh6Dh",
		"KP 15.0 - KP 17.5": "https://a360.co/3K1xxGB",
		"KP 17.5 - KP 20.0": "https://a360.co/3Wx0uBI",
		"KP 20.0 - KP 22.5": "https://a360.co/4bAOuU4",
		"KP 22.5 - KP 25.0": "https://a360.co/4bqx10u",
		"KP 25.0 - KP 27.5": "https://a360.co/3yiEBMr",
		"KP 27.5 - KP 30.0": "https://a360.co/4adxge9",
		"KP 30.0 - KP 32.5": "https://a360.co/3yf0mMZ",
		"KP 32.5 - KP 35.0": "https://a360.co/4ahbZ3i",
		"KP 35.0 - KP 37.5": "https://a360.co/4dEfzYo",
		"KP 37.5 - KP 40.0": "https://a360.co/3QCOlqT",
		"KP 40.0 - KP 42.5": "https://a360.co/3QILeOf",
		"KP 42.5 - KP 45.0": "https://a360.co/4ajkAm0",
		"KP 45.0 - KP 47.5": "https://a360.co/3QJgQn7",
		"KP 47.5 - KP 50.0": "https://a360.co/4bAOS4Y",
		"KP 50.0 - KP 52.5": "https://a360.co/4dAp5f0",
		"KP 52.5 - KP 55.0": "https://a360.co/3wwS96p",
		"KP 55.0 - KP 57.5": "https://a360.co/3QCOx9B",
		"KP 57.5 - KP 60.0": "https://a360.co/3K1xU3X",
		"KP 60.0 - KP 62.5": "https://a360.co/4bzhVpv",
		"KP 62.5 - KP 65.0": "https://a360.co/4bAavlP",
		"KP 65.0 - KP 67.5": "https://a360.co/3JZzeUO",
		"KP 67.5 - KP 70.0": "https://a360.co/4bwYxJI",
		"KP 70.0 - KP 72.5": "https://a360.co/3K05Pdq",
		"KP 72.5 - KP 75.0": "https://a360.co/3yiF29x",
		"KP 75.0 - KP 77.5": "https://a360.co/3JYjWQf",
		"KP 77.5 - KP 80.0": "https://a360.co/4bwYzRQ",
		"KP 80.0 - KP 82.5": "https://a360.co/4bwYzRQ",
		"KP 82.5 - KP 85.0": "https://a360.co/44BBawr",
		"KP 85.0 - KP 87.5": "https://a360.co/3K3kSmg",
		"KP 87.5 - KP 90.0": "https://a360.co/44HdF5e",
		"KP 90.0 - KP 92.5": "https://a360.co/3QFwP5m",
		"KP 92.5 - KP 95.0": "https://a360.co/3wHGNMR",
		"KP 95.0 - KP 97.5": "https://a360.co/3QFwX4Q",
		"KP 97.5 - KP 99.907": "https://a360.co/44GQHeb",
		"KP 99.907 - Pig Receiver": "https://a360.co/3UGxhBO"
    }
	
};

var kp_pointDropdown = document.getElementById('kp_point');

$("#stasiun").chosen().change(function(){
    var selectedStasiun = $(this).val();
    kp_pointDropdown.innerHTML = '<option value="">KP Point</option>';

	var prm_posisi = document.getElementById('prm_posisi_dd_area').value;
	if(prm_posisi === "cpmonitoring"){
		
		if(selectedStasiun == "AOL"){
			document.getElementById('iframetbl3').src="https://public.tableau.com/views/Cp_Point_AOL2Fase/Dashboard1?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=no";
		}else if(selectedStasiun == "AOSS"){
			document.getElementById('iframetbl3').src="https://public.tableau.com/views/cp_point_AOSS3Fase/Dashboard1?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=no";
		}else if(selectedStasiun == "AOJBB"){
			document.getElementById('iframetbl3').src="https://public.tableau.com/views/cp_point_AOJBB2Fase/Dashboard1?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=no";
		}
	
	}else if(prm_posisi === "aligmentsheet"){
		if (selectedStasiun) {
		
			var kpPoints = data_kp_point[selectedStasiun];
			for (var key in kpPoints) {
				var option = document.createElement('option');
				option.value = kpPoints[key];
				option.text = key;
				kp_pointDropdown.appendChild(option);
			}
			kp_pointDropdown.disabled = false;
			
		} else {
		
			kp_pointDropdown.disabled = true;
			
		}
	}
    
    $('#kp_point').trigger('chosen:updated');
});

$("#kp_point").chosen().change(function(){

    var selectedStasiun = $(this).val();
	document.getElementById('iframetbl5').src=selectedStasiun;
	
    
});