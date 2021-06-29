export default interface IMeal {
  date: string;
  time: 'breakfast' | 'lunch' | 'dinner' | 'other';
  calorie: string;
  protein: string;
  carbs: string;
  fat: string;
  food: string;
}
