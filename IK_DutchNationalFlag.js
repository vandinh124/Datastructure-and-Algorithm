function dutch_flag_sort(balls) {
    let currentIdx = 0;
    let redIdx = 0;
    let blueIdx = balls.length - 1;

    while (currentIdx <= blueIdx){
        if (balls[currentIdx] == 'G'){
            currentIdx++;
        } else if (balls[currentIdx] == 'B'){
            [balls[currentIdx], balls[blueIdx]] = [balls[blueIdx], balls[currentIdx]];
            blueIdx--;
        } else if (balls[currentIdx] == 'R'){
            [balls[currentIdx], balls[redIdx]] = [balls[redIdx], balls[currentIdx]];
            redIdx++;
            currentIdx++
        }
    }
    return balls;
}

console.log(dutch_flag_sort(['G', 'B', 'G', 'G', 'R', 'B', 'R', 'G']))