
export const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-600';
      case 'in-progress': return 'bg-yellow-600';
      case 'pending': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
};

export const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
};
