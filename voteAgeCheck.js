const canIVote = age => {
	console.log('Welcome to the voting age checker!');
	// Check if user is at least 18 years old
	if (age >= 18) {
		// If they are, display that they are able to vote
  		return 'You are ' + age + ' years old. Yes, you can vote!';
  	} else {
  		// If they're not, display that they aren't able to vote
    	return 'You are only ' + age + ' years old. No, you cannote vote.';
  	}
}

console.log(canIVote(19));