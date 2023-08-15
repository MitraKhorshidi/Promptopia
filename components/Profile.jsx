import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name , desc , data , handleDelete , handleEdit}) => {
  return (
    <div className='w-full'>
      <h1 className='head_text text-left blue_gradient '>{name} Profile</h1>
      <p className='desc text-left'>{desc}</p>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 my-10">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleDelete={()=>handleDelete && handleDelete(post)}
          handleEdit={()=>handleEdit && handleEdit(post)}
        />
      ))}
    </div>
    </div>
  )
}

export default Profile