let a = [42, "42", { 42: 42 }, {}, true, undefined];

for (let i = 0; i < a.length; i++) {
	if (i == 2) console.log(`${a[i]["42"]} is an ${typeof a[i]}.`);
	else if (i == 3) console.log(`${a[i]} is an ${typeof a[i]}.`);
	else if (i == 5) console.log(`${a[i]} is an ${typeof a[i]}.`);
	else console.log(`${a[i]} is a ${typeof a[i]}.`);
}
