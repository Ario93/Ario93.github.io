$('#subsidiary').chosen({ width: '200px', height: '80px'}).css('background', 'white');
$('#stasiun').chosen({ width: '200px', height: '80px'});
$('#kp_point').chosen({ width: '200px', height: '80px'});
$('#visual_rov').chosen({ width: '350px', height: '80px'});

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
	"asgcpmonitoring": {
		"preview": "https://ario93.github.io/asgpotentialpattern.html",
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

var ifr3 = {
	
	"20211016 092822 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/9856RA0cut0?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=9856RA0cut0",
    },
    "20211016 085802 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/0oNB0kSzL-w?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=0oNB0kSzL-w",
    },
    "20211019 042834 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/iyjdDVpouZI?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=iyjdDVpouZI",
    },
    "20211019 030655 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/TsH_A_OQ_Uo?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=TsH_A_OQ_Uo",
    },
    "20211020 061513 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/hNvqJ8lrHHc?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=hNvqJ8lrHHc",
    },
	"20211020 101858 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/rbgHoe7FdJA?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=rbgHoe7FdJA",
    },
	"20211020 141900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/BqeHewFgPkA?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=BqeHewFgPkA",
    },
	"20211020 121859 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/wTAvGgIAcNQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=wTAvGgIAcNQ",
    },
	"20211020 181900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/iPudQbUr3XM?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=iPudQbUr3XM",
    },
	"20211020 161900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/3NHbb5Z-UTg?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=3NHbb5Z-UTg",
    },
	//"20211020 201900 CH1 MERLINWR200P309": {
        //"preview": "https://www.youtube.com/embed/hiPn16Qh580?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=hiPn16Qh580",
    //},
	"20211020 221900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/zaFgw9bi8Q8?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=zaFgw9bi8Q8",
    },
	"20211021 041900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/BVbs1taItMw?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=BVbs1taItMw",
    },
	"20211021 061900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/RksgdHHEIxg?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=RksgdHHEIxg",
    },
	"20211021 094109 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/bPtBq5a3FPQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=bPtBq5a3FPQ",
    },
	"20211021 001901 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/JJGH6F4O-Mw?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=JJGH6F4O-Mw",
    },
	"20211021 021900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/-mI36gK-dzQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=-mI36gK-dzQ",
    },
	"20211021 145900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/_wx9wD6vYyo?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=_wx9wD6vYyo",
    },
	"20211021 165900 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/LGiXfhzso9k?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=LGiXfhzso9k",
    },
	"20211021 185901 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/PEviWe5JQsY?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=PEviWe5JQsY",
    },
	"20211021 114110 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/ZKK5mcame3U?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=ZKK5mcame3U",
    },
	"20211021 125859 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/T7ViWbcpIQQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=T7ViWbcpIQQ",
    },
	"20211021 193304 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/QuFuKSUsJf4?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=QuFuKSUsJf4",
    },
	"20211022 114127 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/MBPB0w9IFLU?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=MBPB0w9IFLU",
    },
	"20211021 213306 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/zkB5SK8Oiko?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=zkB5SK8Oiko",
    },
	"20211022 013306 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/8Ywx2P6_3xc?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=8Ywx2P6_3xc",
    },
	"20211022 033307 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/6XBygcfNN4E?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=6XBygcfNN4E",
    },
	"20211021 233306 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/ibiZgNMEWg8?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=ibiZgNMEWg8",
    },
	"20211022 084359 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/WbZFavc-sSo?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=WbZFavc-sSo",
    },
	"20211022 100031 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/Ar-xr0ttkgQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=Ar-xr0ttkgQ",
    },
	"20211022 053308 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/hBzgyelcYdM?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=hBzgyelcYdM",
    },
	"20211022 195841 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/_UIfk0mwYB8?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=_UIfk0mwYB8",
    },
	"20211022 134128 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/BkDJuukn_Ew?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=BkDJuukn_Ew",
    },
	"20211023 051226 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/TOZEf0n-HBw?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=TOZEf0n-HBw",
    },
	"20211023 071228 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/A_GmayjTsBY?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=A_GmayjTsBY",
    },
	"20211023 111228 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/rbhBQG53M1k?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=rbhBQG53M1k",
    },
	"20211022 154128 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/ahEEfdxEQKo?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=ahEEfdxEQKo",
    },
	"20211022 215843 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/UzTjuWlwq84?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=aUzTjuWlwq84",
    },
	"20211023 011508 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/rGu4ZmcC5UI?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=rGu4ZmcC5UI",
    },
	"20211023 031511 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/ry-um2nG_sY?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=ry-um2nG_sY",
    },
	"20211023 171228 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/3wIhEbM5ifQ?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=3wIhEbM5ifQ",
    },
	"20211023 131228 CH1 MERLINWR200P309": {
        "preview": "https://www.youtube.com/embed/wcLb3B1WHdk?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showsearch=0&loop=1&playlist=wcLb3B1WHdk",
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
	}else if(ifr == 6){
		
		document.getElementById('iframetbl'+ifr).src = ifr1[prm_isi].preview;
		document.getElementById('tmp_url_print2').style.display="block";
		document.getElementById('tmp_url_download2').style.display="block";
	}else if(ifr == 7){
		document.getElementById('iframetbl'+ifr).src = ifr3["20211016 092822 CH1 MERLINWR200P309"].preview;
	}
	
	if(prm_isi == "cpmonitoring"){
		
		document.getElementById('search_subsidiary_stasiun').style.display="block";
		document.getElementById('prm_posisi_dd_area').value=prm_isi;
		
	}else if(prm_isi == "aligmentsheet"){
		
		document.getElementById('search_subsidiary_stasiun').style.display="block";
		document.getElementById('search_kp_point').style.display="block";
		document.getElementById('prm_posisi_dd_area').value=prm_isi;
		
	}else if(prm_isi == "visual_rov_2021"){
		
		document.getElementById('tmp_visual_rov').style.display="block";
		document.getElementById('prm_posisi_dd_area').value=prm_isi;
		visual_rov_f();
		
	}
	
	
}

function visual_rov_f(){

	var rovDropdown = document.getElementById('visual_rov');

	while (rovDropdown.firstChild) {
        rovDropdown.removeChild(rovDropdown.firstChild);
    }

    for (var stasiun in ifr3) {
        if (ifr3.hasOwnProperty(stasiun)) {
            var option = document.createElement('option');
            option.value = ifr3[stasiun].preview;
            option.text = stasiun;
            rovDropdown.appendChild(option);
        }
    }
    
    $('#visual_rov').trigger('chosen:updated');
	
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

$("#visual_rov").chosen().change(function(){

    var selectedrov = $(this).val();
	document.getElementById('iframetbl7').src=selectedrov;
	
    
});
