let ans = 0;

for (var i = 2; i < process.argv.length; i++) {
  ans += parseInt(process.argv[i], 10);
}
console.log(ans);

