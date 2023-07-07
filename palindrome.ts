function palindrome(str: string): boolean {
  // balik dahulu katanya lalu cek apakah sama dengan nilai awal
  let reverseStr = str.split('').reverse().join('')

  if (reverseStr == str) {
    return true
  }
  return false
}

console.log(palindrome('civic')) // true
console.log(palindrome('katak')) // true
console.log(palindrome('kasur rusak')) // true
console.log(palindrome('kupu-kupu')) // false
console.log(palindrome('lion')) // false
