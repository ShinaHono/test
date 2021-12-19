//定義
var start6 = document.getElementById('start6');
var reset6 = document.getElementById('reset6');
var stop6 = document.getElementById('stop6');

var h6 = document.getElementById('hour6');
var m6 = document.getElementById('minute6');
var s6 = document.getElementById('second6');
//store a reference to the variable
var startTimer6 = null;

//時間経過装置
function timer6(){
	s6.value ++;
	if(m6.value != 59 && s6.value == 60){
		m6.value ++;
		s6.value = 0;
	} else if(m6.value == 59 && s6.value == 60){
		h6.value ++;
		m6.value = 0;
		s6.value = 0;
	}
	return;
}
/*
function timer6(){
	if(h6.value == 0 && m6.value == 0 && s6.value == 0){
		h6.value = 0;
		m6.value = 0;
		s6.value = 0;
	} else if (s6.value != 0){
		//s.value - 1
		s6.value --;
	} else if(h6.value != 0 && m6.value != 0 && s6.value == 0){
		s6.value = 59;
		m6.value --;
	} else if(h6.value != 0 && m6.value == 0 && s6.value == 0){
		s6.value = 59;
		m6.value = 59;
		h6.value --;
	} else if(h6.value == 0 && m6.value != 0 && s6.value == 0){
		s6.value = 59;
		m6.value --;
		h6.value = 0;
	} else if(h6.value == 0 && m6.value == 0 && s6.value != 0){
		s6.value --;
		m6.value = 0;
		h6.value = 0;
	}
	
	return;
}*/

//スタートボタン
    start6.disabled = false;
    start6.addEventListener('click', function(){
		startTimer6 = setInterval( callTimer6, 1000);
	start6.disabled = true;
	stop6.disabled = false;
	reset6.disabled = false;
});
function callTimer6(){timer6();}
//ストップボタン
    stop6.addEventListener('click', function(){
	clearInterval(startTimer6);
	start6.disabled = false;
	stop6.disabled = true;
	reset6.disabled = false;
})
function stopTimer6(){
	clearInterval(startTimer6);
}
//以下はラップの装置
	let countf = 0;
	let record1f = 0;
	let record2f = 0;
	let record3f = 0;
		function wrapF(){
	countf ++;
	record1f = h6.value;
	record2f = m6.value;
	record3f = s6.value;
	switch(13 - countf){
	case 12:
	document.getElementById('wrap6-1').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap6-2').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap6-3').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap6-4').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap6-5').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap6-6').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap6-7').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap6-8').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap6-9').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap6-10').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap6-11').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap6-12').innerHTML =record1f+':'+String(record2f).padStart(2, 0)+':'+String(record3f).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage6').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize6(){
		document.getElementById('wrap6-1').innerHTML='';
		document.getElementById('wrap6-2').innerHTML='';
		document.getElementById('wrap6-3').innerHTML='';
		document.getElementById('wrap6-4').innerHTML='';
		document.getElementById('wrap6-5').innerHTML='';
		document.getElementById('wrap6-6').innerHTML='';
		document.getElementById('wrap6-7').innerHTML='';
		document.getElementById('wrap6-8').innerHTML='';
		document.getElementById('wrap6-9').innerHTML='';
		document.getElementById('wrap6-10').innerHTML='';
		document.getElementById('wrap6-11').innerHTML='';
		document.getElementById('wrap6-12').innerHTML='';
		document.getElementById('wrapMessage6').innerHTML='';
		countf = 0;
	h6.value = 0;
	m6.value = 0;
	s6.value = 0;
	//タイマーのストップ関数を起動
	stopTimer6();
	//falseの操作
	start6.disabled = false;
	stop6.disabled = true;
	reset6.disabled = true;
	}
//リセットボタン
    reset6.addEventListener('click', function(){
	h6.value = 0;
	m6.value = 0;
	s6.value = 0;
	//タイマーのストップ関数を起動
	stopTimer6();
	//ラップの初期化関数を起動
	initialize6();
	//falseの操作
	start6.disabled = false;
	stop6.disabled = true;
	reset6.disabled = true;
});