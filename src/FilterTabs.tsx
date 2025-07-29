import React from 'react';

const FilterTabs = ({ filter, setFilter, tasks }) => {
  const filters = [
    { 
      key: 'all', 
      label: 'All Tasks', 
      count: tasks.length 
    },
    { 
      key: 'active', 
      label: 'Active', 
      count: tasks.filter(task => !task.completed).length 
    },
    { 
      key: 'completed', 
      label: 'Completed', 
      count: tasks.filter(task => task.completed).length 
    }
  ];

  return (
    <div className="flex bg-white rounded-xl p-1 mb-6 shadow-md border border-gray-100">
      {filters.map((filterOption) => (
        <button
          key={filterOption.key}
          onClick={() => setFilter(filterOption.key)}
          className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
            filter === filterOption.key
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          <span className="block text-sm">{filterOption.label}</span>
          <span className="block text-xs opacity-75">
            {filterOption.count} {filterOption.count === 1 ? 'task' : 'tasks'}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;