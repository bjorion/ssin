export interface SsinType {
  inputYear: number; // 2 digits
  inputMonth: number; // 2 digits
  inputDay: number; // 2 digits
  increment: number; // 3 digits
  checkSum: number; // 2 digits

  exactYear: number; // 4 digits
  exactMonth: number; // 2 digits
  exactDay: number; // 2 digits
}
