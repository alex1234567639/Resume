// 計算年資
export const getYearsSince20200801 = () => {
    const startDate = new Date(2020, 7, 1); // 2020/08/01 (月份從 0 開始)
    const currentDate = new Date();

    // 計算年份差異（浮點數）
    const diffYears = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    // 計算範圍區間
    const lowerBound = Math.floor(diffYears);
    const upperBound = lowerBound + 1;

    return `${lowerBound}-${upperBound}`;
}

// 現在年月 YYYY-MM
export const getCurrentYearMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 確保月份為兩位數
    return `${year}-${month}`;
}