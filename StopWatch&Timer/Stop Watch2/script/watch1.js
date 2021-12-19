//goal代入タイトル作成
let string1 = document.getElementById('goal1');
let string2 = document.getElementById('goal2');
let string3 = document.getElementById('goal3');
let string4 = document.getElementById('goal4');
let string5 = document.getElementById('goal5');
let string6 = document.getElementById('goal6');

function title1() {
	document.getElementById('title1').innerHTML = string1.value;
}
function title2() {
	document.getElementById('title2').innerHTML = string2.value;
}
function title3() {
	document.getElementById('title3').innerHTML = string3.value;
}
function title4() {
	document.getElementById('title4').innerHTML = string4.value;
}
function title4() {
	document.getElementById('title4').innerHTML = string4.value;
}
function title5() {
	document.getElementById('title5').innerHTML = string5.value;
}
function title6() {
	document.getElementById('title6').innerHTML = string6.value;
}


//タイマー定義
var start1 = document.getElementById('start1');
var reset1 = document.getElementById('reset1');
var stop1 = document.getElementById('stop1');

var h1 = document.getElementById('hour1');
var m1 = document.getElementById('minute1');
var s1 = document.getElementById('second1');
//store a reference to the variable
var startTimer1 = null;

//時間経過装置
function timer1(){
	s1.value ++;
	if(m1.value != 59 && s1.value == 60){
		m1.value ++;
		s1.value = 0;
	} else if(m1.value == 59 && s1.value == 60){
		h1.value ++;
		m1.value = 0;
		s1.value = 0;
	}
	return;
}
/*function timer1(){
	if(h1.value == 0 && m1.value == 0 && s1.value == 0){
		h1.value = 0;
		m1.value = 0;
		s1.value = 0;
	} else if (s1.value != 0){
		//s.value - 1
		s1.value --;
	} else if(h1.value != 0 && m1.value != 0 && s1.value == 0){
		s1.value = 59;
		m1.value --;
	} else if(h1.value != 0 && m1.value == 0 && s1.value == 0){
		s1.value = 59;
		m1.value = 59;
		h1.value --;
	} else if(h1.value == 0 && m1.value != 0 && s1.value == 0){
		s1.value = 59;
		m1.value --;
		h1.value = 0;
	} else if(h1.value == 0 && m1.value == 0 && s1.value != 0){
		s1.value --;
		m1.value = 0;
		h1.value = 0;
	}

}*/
//スタートボタン
    start1.disabled = false;
    start1.addEventListener('click', function(){
		startTimer1 = setInterval( callTimer1, 1000);
	start1.disabled = true;
	stop1.disabled = false;
	reset1.disabled = false;
});
function callTimer1(){timer1();}
//ストップボタン
    stop1.addEventListener('click', function(){
	clearInterval(startTimer1);
	start1.disabled = false;
	stop1.disabled = true;
	reset1.disabled = false;
})
function stopTimer1(){
	clearInterval(startTimer1);
}
//以下はラップの装置
	let counta = 0;
	let record1a = 0;
	let record2a = 0;
	let record3a = 0;
		function wrapA(){
	counta ++;
	record1a = h1.value;
	record2a = m1.value;
	record3a = s1.value;
	switch(13 - counta){
	case 12:
	document.getElementById('wrap1-1').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 11:
	document.getElementById('wrap1-2').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 10:
	document.getElementById('wrap1-3').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 9:
	document.getElementById('wrap1-4').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 8:
	document.getElementById('wrap1-5').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 7:
	document.getElementById('wrap1-6').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 6:
	document.getElementById('wrap1-7').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 5:
	document.getElementById('wrap1-8').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 4:
	document.getElementById('wrap1-9').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 3:
	document.getElementById('wrap1-10').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 2:
	document.getElementById('wrap1-11').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 1:
	document.getElementById('wrap1-12').innerHTML =record1a+':'+String(record2a).padStart(2, 0)+':'+String(record3a).padStart(2, 0);
	break;
	case 0:
	document.getElementById('wrapMessage1').innerHTML = 'Recordings are up to 12 times.';
    break;
		}}
    //ラップ記録リセット関数
    function initialize1(){
		document.getElementById('wrap1-1').innerHTML='';
		document.getElementById('wrap1-2').innerHTML='';
		document.getElementById('wrap1-3').innerHTML='';
		document.getElementById('wrap1-4').innerHTML='';
		document.getElementById('wrap1-5').innerHTML='';
		document.getElementById('wrap1-6').innerHTML='';
		document.getElementById('wrap1-7').innerHTML='';
		document.getElementById('wrap1-8').innerHTML='';
		document.getElementById('wrap1-9').innerHTML='';
		document.getElementById('wrap1-10').innerHTML='';
		document.getElementById('wrap1-11').innerHTML='';
		document.getElementById('wrap1-12').innerHTML='';
		document.getElementById('wrapMessage1').innerHTML='';
		counta = 0;
	}
//リセットボタン
    reset1.addEventListener('click', function(){
	h1.value = 0;
	m1.value = 0;
	s1.value = 0;
	//タイマーのストップ関数を起動
	stopTimer1();
	//ラップの初期化関数を起動
	initialize1();
	//falseの操作
	start1.disabled = false;
	stop1.disabled = true;
	reset1.disabled = true;
});

//追加ボタン
const btn1 = document.getElementById('addBtn-apparent1');
const add1 = document.getElementById('addTimer1');
btn1.addEventListener('click', function(){
	btn1.classList.add('addBtn-delete1');
	btn1.classList.remove('addBtn-apparent1');
    add1.classList.add('additional-container-apparent1');
	add1.classList.remove('additional-container-hidden1');
});

//タイマー2をデリートしよう！
//アイコンの定義
var deleteIcon2 = document.getElementById('deleteIcon2');

//divの消去実行
deleteIcon2.addEventListener('click', function(){
	add1.classList.add('additional-container-hidden1');
	add1.classList.remove('additional-container-apparent1');
	btn1.classList.add('addBtn-apparent1');
	btn1.classList.remove('addBtn-delete1');
});