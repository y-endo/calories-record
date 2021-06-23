export default interface IMeal {
  date: string;
  time: 'breakfast' | 'lunch' | 'dinner' | 'other';
  calorie: string;
  protein: string;
  carbo: string;
  lipid: string;
  food: string;
}
