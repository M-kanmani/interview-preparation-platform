function ProgressBar({ title, percentage }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold text-gray-700">
          {title}
        </h3>

        <span className="font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;