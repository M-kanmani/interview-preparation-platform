function ActivityCard({ title, time }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;