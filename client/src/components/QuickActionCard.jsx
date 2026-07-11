import { Link } from "react-router-dom";

function QuickActionCard({ title, description, icon, to }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300 block"
    >
      <div className="text-4xl mb-4 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>
    </Link>
  );
}

export default QuickActionCard;