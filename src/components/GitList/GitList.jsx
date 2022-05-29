import React from 'react'

const GitList = ({list}) => {
  return (
    <div className="flex flex-row flex-wrap content-center justify-center">
        {list.map((git, index) => (
            <div className="flex flex-col items-center justify-center px-4 m-2 rounded-md w-96 h-52 bg-slate-800" key={index}>
                <p className="font-bold">{git.category}</p>
                <p className="mt-4 font-firaCode">
                {git.command}</p>
                <p className="mt-4 font-sans font-light">
                    {git.description}
                </p>
            </div>
        ))}
    </div>
  )
}

export default GitList