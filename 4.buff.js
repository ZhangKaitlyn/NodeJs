var buf = new Buffer(20);

var bufLen = buf.write("Nodejs-Kaitlyn");
console.log(bufLen);

var buf2 = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf2[i] = i+97;
}
console.log(buf2.toString());
console.log(buf2.toString(undefined,0,10));
// console.log(buf2.toJSON(buf2));

var buf3 = Buffer.concat([buf,buf2]);
console.log(buf3.toString());

var result = buf.compare(buf3);
console.log(result);

var buf4 = new Buffer(20);
buf.copy(buf4);
console.log(buf4.toString());

var buf5 = buf.slice(1,3);
console.log(buf5.toString());

console.log(buf.length+"-"+buf2.length+"-"+buf3.length+"-"+buf4.length+"-"+buf5.length);

var buf6 = new Buffer("{name:'Kaitlyn',displayName:'张郭璐'}");
console.log(buf6.toJSON());