var named=["Adil","Rehman","Jason","Jaket","Italian","Iron"];
	for (var x =0; x <named.length; x++) {
		var firstLetter=named[x].charAt(0).toLowerCase();
		if (firstLetter=='j' || firstLetter=='i') {
			console.log("GoodBye "+named[x]);
		}
		else
		{
			console.log("Hello " +named[x]);
		}
	}