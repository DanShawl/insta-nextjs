import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { db } from '../firebase'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          //  everytime the value in the backend changes, it updates the react state with the latest docs
          setPosts(snapshot.docs)
        }
      ),

    //  means that we will never attach more than one realtime listener
    // return () => {
    //   unsubscribe();
    // }

    //  can refactor to
    // return unsubscribe;
    [db]
  )

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
