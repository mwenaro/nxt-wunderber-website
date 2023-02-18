import { touristAttractionSites } from "../../../constants"


const TouristAttractionList: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-medium">Top 10 Tourist Attractions in Kenya</h1>
      <ul>
        {touristAttractionSites.map(site => (
          <li className="mb-4" key={site.name}>
            <h2 className="text-lg font-medium">{site.name}</h2>
            <p className="text-gray-700">{site.description}</p>
            <p className="text-gray-700">Location: {site.location}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TouristAttractionList
