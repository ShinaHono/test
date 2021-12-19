//定義
var start4 = document.getElementById('start4');
var reset4 = document.getElementById('reset4');
var stop4 = document.getElementById('stop4');

var h4 = document.getElementById('hour4');
var m4 = document.getElementById('minute4');
var s4 = document.getElementById('second4');
//store a reference to the variable
var startTimer4 = null;

//時間経過装置
function timer4(){
	if(h4.value == 0 && m4.value == 0 && s4.value == 0){
		h4.value = 0;
		m4.value = 0;
		s4.value = 0;
	} else if (s4.value != 0){
		//s.value - 1
		s4.value --;
	} else if(h4.value != 0 && m4.value != 0 && s4.value == 0){
		s4.value = 59;
		m4.value --;
	} else if(h4.value != 0 && m4.value == 0 && s4.value == 0){
		s4.value = 59;
		m4.value = 59;
		h4.value --;
	} else if(h4.value == 0 && m4.value != 0 && s4.value == 0){
		s4.value = 59;
		m4.value --;
		h4.value = 0;
	} else if(h4.value == 0 && m4.value == 0 && s4.value != 0){
		s4.value --;
		m4.value = 0;
		h4.value = 0;
	}
	
	return;
}

//スタートボタン
    start4.disabled = false;
    start4.addEventListener('click', function(){
		startTimer4 = setInterval( callTimer4, 1000);
	start4.disabled = true;
	stop4.disabled = false;
	reset4.disabled = false;
});
function callTimer4(){timer4();}
//ストップボタン
    stop4.addEventListener('click', function(){
	clearInterval(startTimer4);
	start4.disabled = false;
	stop4.disabled = true;
	reset4.disabled = false;
})
function stopTimer4(){
	clearInterval(startTimer4);
}
//以下はラップの装置
	let countd = 0;
	let record1d = 0;
	let record2d = 0;
	let record3d = 0;
		function wrapD(){
	countd ++;
	record1d = h4.value;
	record2d = m4.value;
	record3d = s4.value;
	switch(13 - countd){
	case 12:
	document.getElementById('wrap4-1').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap4-2').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap4-3').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap4-4').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap4-5').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap4-6').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap4-7').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap4-8').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap4-9').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap4-10').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap4-11').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap4-12').innerHTML =record1d+':'+String(record2d).padStart(2, 0)+':'+String(record3d).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage4').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize4(){
		document.getElementById('wrap4-1').innerHTML='';
		document.getElementById('wrap4-2').innerHTML='';
		document.getElementById('wrap4-3').innerHTML='';
		document.getElementById('wrap4-4').innerHTML='';
		document.getElementById('wrap4-5').innerHTML='';
		document.getElementById('wrap4-6').innerHTML='';
		document.getElementById('wrap4-7').innerHTML='';
		document.getElementById('wrap4-8').innerHTML='';
		document.getElementById('wrap4-9').innerHTML='';
		document.getElementById('wrap4-10').innerHTML='';
		document.getElementById('wrap4-11').innerHTML='';
		document.getElementById('wrap4-12').innerHTML='';
		document.getElementById('wrapMessage4').innerHTML='';
		countd = 0;
	h4.value = 0;
	m4.value = 0;
	s4.value = 0;
	//タイマーのストップ関数を起動
	stopTimer4();
	//falseの操作
	start4.disabled = false;
	stop4.disabled = true;
	reset4.disabled = true;
	}
//リセットボタン
    reset4.addEventListener('click', function(){
	h4.value = 0;
	m4.value = 0;
	s4.value = 0;
	//タイマーのストップ関数を起動
	stopTimer4();
	//ラップの初期化関数を起動
	initialize4();
	//falseの操作
	start4.disabled = false;
	stop4.disabled = true;
	reset4.disabled = true;
});

//追加ボタン
const btn4 = document.getElementById('addBtn-apparent4');
const add4 = document.getElementById('addTimer4');
btn4.addEventListener('click', function(){
	btn4.classList.add('addBtn-delete4');
	btn4.classList.remove('addBtn-apparent4');
    add4.classList.add('additional-container-apparent4');
	add4.classList.remove('additional-container-hidden4');
});
//タイマー5をデリートしよう！
//アイコンの定義
var deleteIcon5 = document.getElementById('deleteIcon5');

//divの消去実行
deleteIcon5.addEventListener('click', function(){
	add4.classList.add('additional-container-hidden4');
	add4.classList.remove('additional-container-apparent4');
	btn4.classList.add('addBtn-apparent4');
	btn4.classList.remove('addBtn-delete4');
});
