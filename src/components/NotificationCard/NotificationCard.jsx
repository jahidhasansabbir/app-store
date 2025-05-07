import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const NotificationCard = ({notification}) => {
    const {title, message, timestamp} = notification
    const formattedTime = new Date(timestamp).toLocaleString();
    return (
        <div className={`w-full my-4 mx-auto p-4 rounded-xl shadow-md border border-gray-200 transition duration-200 `}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <div className="text-red-500">
            <FiAlertCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{message}</p>
            <p className="text-xs text-gray-400 mt-2">{formattedTime}</p>
          </div>
        </div>
      </div>
    );
};

export default NotificationCard;