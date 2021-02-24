function star(num){
    result = '';            // 별과 공백이 대입될 변수선언 
    for (let i = 0; i < num; i++) {           // 5줄 이므로 외부 반복문은 5번만 실행
        for (let j = num-1; j > i; j--) {
        result += ' ';
        }
        for (let k = 0; k <= (i * 2); k++){
        result += '*';
        }
    result += '\n';             // 줄바꿈
    }

    console.log(result);
}

let output = process.argv[2];    // 터미널 입력  
if (isNaN(output) == false) {    // 입력된 값이 숫자면 star() 함수 실행
    star(output);                // 숫자가 아니면, 'only number plase' 출력
} else {
    console.log('only number please');
}