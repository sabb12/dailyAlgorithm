// - Math.max와 Max.min으로 이용해서 최소값과 최대값을 찾아 낸다. 
//     - 입력값 string을 배열로 변환 해준다.
//     - Math.max에 배열을 parameter로 전달한다.
//     - Math.min에 배열을 parameter로 전달한다.

/* 
    - s.split(" ") = [ '1', '2', '3', '4' ]
    - s.split(" ").map(v => +v) = [1, 2, 3, 4]
    - array = [1, 2, 3, 4]
    - Math.min(...array) = 1
    - Math.max(...array) = 4
    - split(" ") = make a space in between => 1[space]2 => 1 2
*/
// 1. split and map
/* 
    const getMaxMinValue = (s) => {
       const array = s.split(" ").map(v => +v);

       return Math.min(...array)+" "+Math.max(...array)
    }
 */

// 2. split, map, and sort
/*
    const getMaxMinValue = (s) => {
        const array = s.split(" ").map(v => +v).sort((a, b) => a -b);
    
        return array[0]+" "+array[array.length -1]
    }
*/

// 3. split, map, sort, with ``
/*
    const getMaxMinValue = (s) => {
        let array = s.split(" ").map(v => Number(v)).sort((a, b) => a - b);
        return `${array[0]} ${array[array.length -1 ]}`
    }
*/

test('getMaxMinValue', () => {
    expect(getMaxMinValue("1 2 3 4")).toBe("1 4");
    expect(getMaxMinValue("-1 -2 -3 -4")).toBe("-4 -1")
    expect(getMaxMinValue("-1 -1")).toBe("-1 -1")
})