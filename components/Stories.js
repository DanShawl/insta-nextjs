import React, { useEffect, useState } from 'react'
// import faker from 'faker'
import faker, { Faker } from '@faker-js/faker'
import Story from '../components/Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    //  creates an array of 20, then maps through it
    //  everytime it maps through (implicit return), it will return a value from that loop
    //  we should get a array at the end of it
    const suggestions = [...Array(20)].map((_, i) => ({
      name: faker.name.firstName(),
      imageUrl: faker.image.avatar(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-gray-200 lg:mt-8">
      {session && (
        // if theres a session, make sure theres a story with the session details
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.imageUrl}
          username={profile.name}
        />
      ))}
    </div>
  )
}

export default Stories
