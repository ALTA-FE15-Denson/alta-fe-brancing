function studentScore(score: number): void {
  switch (true) {
    case score >= 80 && score <= 100:
      console.log('A')
      break
    case score >= 65 && score <= 79:
      console.log('B+')
      break
    case score >= 50 && score <= 64:
      console.log('B')
      break
    case score >= 35 && score <= 49:
      console.log('C')
      break
    default:
      console.log('D')
      break
  }
}

studentScore(80)
