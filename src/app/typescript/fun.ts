function greet(name: string = 'Guest'): string {
  return `Hello, ${name}`;
}

function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
export { greet, sum };