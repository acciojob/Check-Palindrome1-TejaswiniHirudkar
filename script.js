// complete the given function

function palindrome(str){
	let strwithoutspace=str.replace(/\s/g, "");
	let i=0;
	let j=strwithoutspace.length-1;
	while(i<j){
		if(strwithoutspace.charAt(i)==strwithoutspace.charAt(j)){
			i++;
			j--;
		}
		else{
			return false;
		}
	}
	return true;
}
module.exports = palindrome
