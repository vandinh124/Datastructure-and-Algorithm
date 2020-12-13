let choice = 0;
let map = {};
for (let i = 0; i < starting.length; i++) {
    for (let j = i + 1; j < ending.length; j++){
        if (!(starting[i] <= ending[j] && starting[j] <= ending[i]) && !map[`${starting[i]}${ending[i]}${starting[j]}${ending[j]}`]) {
            map[`${starting[i]}${ending[i]}${starting[j]}${ending[j]}`] = true;
            choice++;
        }
    }
}
//console.log(map)
return choice;

