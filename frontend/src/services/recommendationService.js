export const getRecommendations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/habit-suggestions');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return [];
    }
  };
  