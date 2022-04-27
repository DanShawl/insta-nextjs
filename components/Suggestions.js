import React, { useState, useEffect } from 'react'
import faker from '@faker-js/faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      name: faker.name.firstName(),
      imageUrl: faker.image.avatar(),
      company: faker.company.companyName(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="text=sm mb-5 flex justify-between">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={profile.imageUrl}
            alt=""
            className="p-{2px} h-10 w-10 rounded-full border"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.name}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-semibold text-xs text-blue-400">
            Follow
          </button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
