//定義
var start5 = document.getElementById('start5');
var reset5 = document.getElementById('reset5');
var stop5 = document.getElementById('stop5');

var h5 = document.getElementById('hour5');
var m5 = document.getElementById('minute5');
var s5 = document.getElementById('second5');
//store a reference to the variable
var startTimer5 = null;

//時間経過装置
function timer5(){
	s5.value ++;
	if(m5.value != 59 && s5.value == 60){
		m5.value ++;
		s5.value = 0;
	} else if(m5.value == 59 && s5.value == 60){
		h5.value ++;
		m5.value = 0;
		s5.value = 0;
	}
	return;
}
/*
function timer5(){
	if(h5.value == 0 && m5.value == 0 && s5.value == 0){
		h5.value = 0;
		m5.value = 0;
		s5.value = 0;
	} else if (s5.value != 0){
		//s.value - 1
		s5.value --;
	} else if(h5.value != 0 && m5.value != 0 && s5.value == 0){
		s5.value = 59;
		m5.value --;
	} else if(h5.value != 0 && m5.value == 0 && s5.value == 0){
		s5.value = 59;
		m5.value = 59;
		h5.value --;
	} else if(h5.value == 0 && m5.value != 0 && s5.value == 0){
		s5.value = 59;
		m5.value --;
		h5.value = 0;
	} else if(h5.value == 0 && m5.value == 0 && s5.value != 0){
		s5.value --;
		m5.value = 0;
		h5.value = 0;
	}
	
	return;
}*/

//スタートボタン
    start5.disabled = false;
    start5.addEventListener('click', function(){
		startTimer5 = setInterval( callTimer5, 1000);
	start5.disabled = true;
	stop5.disabled = false;
	reset5.disabled = false;
});
function callTimer5(){timer5();}
//ストップボタン
    stop5.addEventListener('click', function(){
	clearInterval(startTimer5);
	start5.disabled = false;
	stop5.disabled = true;
	reset5.disabled = false;
})
function stopTimer5(){
	clearInterval(startTimer5);
}
//以下はラップの装置
	let counte = 0;
	let record1e = 0;
	let record2e = 0;
	let record3e = 0;
		function wrapE(){
	counte ++;
	record1e = h5.value;
	record2e = m5.value;
	record3e = s5.value;
	switch(13 - counte){
	case 12:
	document.getElementById('wrap5-1').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap5-2').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap5-3').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap5-4').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap5-5').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap5-6').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap5-7').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap5-8').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap5-9').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap5-10').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap5-11').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap5-12').innerHTML =record1e+':'+String(record2e).padStart(2, 0)+':'+String(record3e).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage5').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize5(){
		document.getElementById('wrap5-1').innerHTML='';
		document.getElementById('wrap5-2').innerHTML='';
		document.getElementById('wrap5-3').innerHTML='';
		document.getElementById('wrap5-4').innerHTML='';
		document.getElementById('wrap5-5').innerHTML='';
		document.getElementById('wrap5-6').innerHTML='';
		document.getElementById('wrap5-7').innerHTML='';
		document.getElementById('wrap5-8').innerHTML='';
		document.getElementById('wrap5-9').innerHTML='';
		document.getElementById('wrap5-10').innerHTML='';
		document.getElementById('wrap5-11').innerHTML='';
		document.getElementById('wrap5-12').innerHTML='';
		document.getElementById('wrapMessage5').innerHTML='';
		counte = 0;
	h5.value = 0;
	m5.value = 0;
	s5.value = 0;
	//タイマーのストップ関数を起動
	stopTimer5();
	//falseの操作
	start5.disabled = false;
	stop5.disabled = true;
	reset5.disabled = true;
	}
//リセットボタン
    reset5.addEventListener('click', function(){
	h5.value = 0;
	m5.value = 0;
	s5.value = 0;
	//タイマーのストップ関数を起動
	stopTimer5();
	//ラップの初期化関数を起動
	initialize5();
	//falseの操作
	start5.disabled = false;
	stop5.disabled = true;
	reset5.disabled = true;
});

//追加ボタン
const btn5 = document.getElementById('addBtn-apparent5');
const add5 = document.getElementById('addTimer5');
btn5.addEventListener('click', function(){
	btn5.classList.add('addBtn-delete5');
	btn5.classList.remove('addBtn-apparent5');
    add5.classList.add('additional-container-apparent5');
	add5.classList.remove('additional-container-hidden5');
});
//タイマー6をデリートしよう！
//アイコンの定義
var deleteIcon6 = document.getElementById('deleteIcon6');

//divの消去実行
deleteIcon6.addEventListener('click', function(){
	add5.classList.add('additional-container-hidden5');
	add5.classList.remove('additional-container-apparent5');
	btn5.classList.add('addBtn-apparent5');
	btn5.classList.remove('addBtn-delete5');
});