import React from 'react';
import { CheckCircleIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const highPriorityTasks = tasks.filter(task => task.priority === 'high' && !task.completed).length;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: ClockIcon,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      label: 'Active Tasks',
      value: activeTasks,
      icon: ExclamationTriangleIcon,
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    },
    {
      label: 'Completed',
      value: completedTasks,
      icon: CheckCircleIcon,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      label: 'High Priority',
      value: highPriorityTasks,
      icon: ExclamationTriangleIcon,
      color: 'text-red-600',
      bg: 'bg-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
            <div className={`p-2 rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStats;