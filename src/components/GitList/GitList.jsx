import React from 'react'

const GitList = ({list}) => {
  return (
    <div>
        {list.map((git, index) => (
            <div key={index}>
                <p>{git.category}</p>
            </div>
        ))}
    </div>
  )
}

export default GitList