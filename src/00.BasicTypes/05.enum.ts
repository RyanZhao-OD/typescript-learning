enum Color {Red = 1, Green, Blue}
enum Size {Small = 1, Middle, Big}

let color: Color = Color.Red;
let size: Size = Size.Small;

console.log('Color-----');
console.log(Color);
console.log(color);
console.log('Size-----');
console.log(Size);
console.log(size);
console.log('--------');
// console.log(color === size);  //  This condition will always return 'false' since the types 'Color.Red' and 'Size.Small' have no overlap.

enum Enum {Val1 = 'aaa1', Val2 = 'aaa2', Val3 = 'aaa3'} // Enum member must have initializer.
// enum Enum {Val1 = 'aaa1', Val2, Val3} // Enum member must have initializer.
const e: Enum = Enum.Val1;
console.log(Enum);
console.log(e);
