export const calculateProgress = (purchases: number): number => {
    return purchases % 9;
  };
  
  export const calculateRewards = (purchases: number): number => {
    return Math.floor(purchases / 9);
  };
  
  export const remainingPurchasesForReward = (purchases: number): number => {
    return 9 - (purchases % 9);
  };