function solution(t, p) {
    let answer = 0;
    const pLength = p.length
    t.split('').forEach((s,i)=>{
        const sliceT = t.slice(i,i+pLength)
        if(sliceT.length === pLength){
            answer += (Number(sliceT) <= Number(p))
        }
    })
    return answer;
}
