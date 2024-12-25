function combine(a: number, b: string): string {
  return a.toString() + b; // Correct type conversion
}

function combine2(a: any, b: any): string {
  return a.toString() + b.toString(); // Handle any type with toString()
}