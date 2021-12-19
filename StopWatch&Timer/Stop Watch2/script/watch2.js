//定義
var start2 = document.getElementById('start2');
var reset2 = document.getElementById('reset2');
var stop2 = document.getElementById('stop2');

var h2 = document.getElementById('hour2');
var m2 = document.getElementById('minute2');
var s2 = document.getElementById('second2');
//store a reference to the variable
var startTimer2 = null;

//時間経過装置
function timer2(){
	s2.value ++;
	if(m2.value != 59 && s2.value == 60){
		m2.value ++;
		s2.value = 0;
	} else if(m2.value == 59 && s2.value == 60){
		h2.value ++;
		m2.value = 0;
		s2.value = 0;
	}
	return;
}
/*
function timer2(){
	if(h2.value == 0 && m2.value == 0 && s2.value == 0){
		h2.value = 0;
		m2.value = 0;
		s2.value = 0;
	} else if (s2.value != 0){
		//s.value - 1
		s2.value --;
	} else if(h2.value != 0 && m2.value != 0 && s2.value == 0){
		s2.value = 59;
		m2.value --;
	} else if(h2.value != 0 && m2.value == 0 && s2.value == 0){
		s2.value = 59;
		m2.value = 59;
		h2.value --;
	} else if(h2.value == 0 && m2.value != 0 && s2.value == 0){
		s2.value = 59;
		m2.value --;
		h2.value = 0;
	} else if(h2.value == 0 && m2.value == 0 && s2.value != 0){
		s2.value --;
		m2.value = 0;
		h2.value = 0;
	}
	
	return;
}*/

//スタートボタン
    start2.disabled = false;
    start2.addEventListener('click', function(){
		startTimer2 = setInterval( callTimer2, 1000);
	start2.disabled = true;
	stop2.disabled = false;
	reset2.disabled = false;
});
function callTimer2(){timer2();}
//ストップボタン
    stop2.addEventListener('click', function(){
	clearInterval(startTimer2);
	start2.disabled = false;
	stop2.disabled = true;
	reset2.disabled = false;
})
function stopTimer2(){
	clearInterval(startTimer2);
}
//以下はラップの装置
	let countb = 0;
	let record1b = 0;
	let record2b = 0;
	let record3b = 0;
		function wrapB(){
	countb ++;
	record1b = h2.value;
	record2b = m2.value;
	record3b = s2.value;
	switch(13 - countb){
	case 12:
	document.getElementById('wrap2-1').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap2-2').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap2-3').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap2-4').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap2-5').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap2-6').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap2-7').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap2-8').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap2-9').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap2-10').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap2-11').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap2-12').innerHTML =record1b+':'+String(record2b).padStart(2, 0)+':'+String(record3b).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage2').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize2(){
		document.getElementById('wrap2-1').innerHTML='';
		document.getElementById('wrap2-2').innerHTML='';
		document.getElementById('wrap2-3').innerHTML='';
		document.getElementById('wrap2-4').innerHTML='';
		document.getElementById('wrap2-5').innerHTML='';
		document.getElementById('wrap2-6').innerHTML='';
		document.getElementById('wrap2-7').innerHTML='';
		document.getElementById('wrap2-8').innerHTML='';
		document.getElementById('wrap2-9').innerHTML='';
		document.getElementById('wrap2-10').innerHTML='';
		document.getElementById('wrap2-11').innerHTML='';
		document.getElementById('wrap2-12').innerHTML='';
		document.getElementById('wrapMessage2').innerHTML='';
		countb = 0;
    h2.value = 0;
	m2.value = 0;
	s2.value = 0;
	//タイマーのストップ関数を起動
	stopTimer2();
	//falseの操作
	start2.disabled = false;
	stop2.disabled = true;
	reset2.disabled = true;
	}
//リセットボタン
    reset2.addEventListener('click', function(){
	h2.value = 0;
	m2.value = 0;
	s2.value = 0;
	//タイマーのストップ関数を起動
	stopTimer2();
	//ラップの初期化関数を起動
	initialize2();
	//falseの操作
	start2.disabled = false;
	stop2.disabled = true;
	reset2.disabled = true;
});


//追加ボタン
const btn2 = document.getElementById('addBtn-apparent2');
const add2 = document.getElementById('addTimer2');
btn2.addEventListener('click', function(){
	btn2.classList.add('addBtn-delete2');
	btn2.classList.remove('addBtn-apparent2');
    add2.classList.add('additional-container-apparent2');
	add2.classList.remove('additional-container-hidden2');
});
//タイマー3をデリートしよう！
//アイコンの定義
var deleteIcon3 = document.getElementById('deleteIcon3');

//divの消去実行
deleteIcon3.addEventListener('click', function(){
	add2.classList.add('additional-container-hidden2');
	add2.classList.remove('additional-container-apparent2');
	btn2.classList.add('addBtn-apparent2');
	btn2.classList.remove('addBtn-delete2');
});
