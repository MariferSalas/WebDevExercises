var search = process.argv[2]
var bandList = require('./bands')

if(search === bandList){
    console.log(bandList[search]);
}
console.log(bandList)

for(var band in bandList){
    console.log(`A ${band} band is ${bandList[band]}`);
}