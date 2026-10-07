function solution(arr, divisor) {
    const divideNum = arr.filter(num => num%divisor === 0).sort((a,b)=>a-b)
    const answer = divideNum.length !== 0 ? divideNum : [-1];
    return answer;
}
