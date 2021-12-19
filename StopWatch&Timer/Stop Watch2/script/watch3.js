//定義
var start3 = document.getElementById('start3');
var reset3 = document.getElementById('reset3');
var stop3 = document.getElementById('stop3');

var h3 = document.getElementById('hour3');
var m3 = document.getElementById('minute3');
var s3 = document.getElementById('second3');
//store a reference to the variable
var startTimer3 = null;

//時間経過装置
function timer3(){
	s3.value ++;
	if(m3.value != 59 && s3.value == 60){
		m3.value ++;
		s3.value = 0;
	} else if(m3.value == 59 && s3.value == 60){
		h3.value ++;
		m3.value = 0;
		s3.value = 0;
	}
	return;
}
/*
function timer3(){
	if(h3.value == 0 && m3.value == 0 && s3.value == 0){
		h3.value = 0;
		m3.value = 0;
		s3.value = 0;
	} else if (s3.value != 0){
		//s.value - 1
		s3.value --;
	} else if(h3.value != 0 && m3.value != 0 && s3.value == 0){
		s3.value = 59;
		m3.value --;
	} else if(h3.value != 0 && m3.value == 0 && s3.value == 0){
		s3.value = 59;
		m3.value = 59;
		h3.value --;
	} else if(h3.value == 0 && m3.value != 0 && s3.value == 0){
		s3.value = 59;
		m3.value --;
		h3.value = 0;
	} else if(h3.value == 0 && m3.value == 0 && s3.value != 0){
		s3.value --;
		m3.value = 0;
		h3.value = 0;
	}
	
	return;
}*/

//スタートボタン
    start3.disabled = false;
    start3.addEventListener('click', function(){
		startTimer3 = setInterval( callTimer3, 1000);
	start3.disabled = true;
	stop3.disabled = false;
	reset3.disabled = false;
});
function callTimer3(){timer3();}
//ストップボタン
    stop3.addEventListener('click', function(){
	clearInterval(startTimer3);
	start3.disabled = false;
	stop3.disabled = true;
	reset3.disabled = false;
})
function stopTimer3(){
	clearInterval(startTimer3);
}
//以下はラップの装置
	let countc = 0;
	let record1c = 0;
	let record2c = 0;
	let record3c = 0;
		function wrapC(){
	countc ++;
	record1c = h3.value;
	record2c = m3.value;
	record3c = s3.value;
	switch(13 - countc){
	case 12:
	document.getElementById('wrap3-1').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap3-2').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap3-3').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap3-4').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap3-5').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap3-6').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap3-7').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap3-8').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap3-9').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap3-10').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap3-11').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap3-12').innerHTML =record1c+':'+String(record2c).padStart(2, 0)+':'+String(record3c).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage3').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize3(){
		document.getElementById('wrap3-1').innerHTML='';
		document.getElementById('wrap3-2').innerHTML='';
		document.getElementById('wrap3-3').innerHTML='';
		document.getElementById('wrap3-4').innerHTML='';
		document.getElementById('wrap3-5').innerHTML='';
		document.getElementById('wrap3-6').innerHTML='';
		document.getElementById('wrap3-7').innerHTML='';
		document.getElementById('wrap3-8').innerHTML='';
		document.getElementById('wrap3-9').innerHTML='';
		document.getElementById('wrap3-10').innerHTML='';
		document.getElementById('wrap3-11').innerHTML='';
		document.getElementById('wrap3-12').innerHTML='';
		document.getElementById('wrapMessage3').innerHTML='';
		countc = 0;
	h3.value = 0;
	m3.value = 0;
	s3.value = 0;
	//タイマーのストップ関数を起動
	stopTimer3();
	//falseの操作
	start3.disabled = false;
	stop3.disabled = true;
	reset3.disabled = true;
	}
//リセットボタン
    reset3.addEventListener('click', function(){
	h3.value = 0;
	m3.value = 0;
	s3.value = 0;
	//タイマーのストップ関数を起動
	stopTimer3();
	//ラップの初期化関数を起動
	initialize3();
	//falseの操作
	start3.disabled = false;
	stop3.disabled = true;
	reset3.disabled = true;
});

//追加ボタン
const btn3 = document.getElementById('addBtn-apparent3');
const add3 = document.getElementById('addTimer3');
btn3.addEventListener('click', function(){
	btn3.classList.add('addBtn-delete3');
	btn3.classList.remove('addBtn-apparent3');
    add3.classList.add('additional-container-apparent3');
	add3.classList.remove('additional-container-hidden3');
});
//タイマー4をデリートしよう！
//アイコンの定義
var deleteIcon4 = document.getElementById('deleteIcon4');

//divの消去実行
deleteIcon4.addEventListener('click', function(){
	add3.classList.add('additional-container-hidden3');
	add3.classList.remove('additional-container-apparent3');
	btn3.classList.add('addBtn-apparent3');
	btn3.classList.remove('addBtn-delete3');
});
