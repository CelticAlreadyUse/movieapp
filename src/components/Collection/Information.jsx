
const Information = ({Movies}) => {
    const Amount =Object.keys(Movies.parts).length
  return (
    <div className="mt-2 ml-2 " >
        <h1 className='mt-4 lg:text-4xl text-3xl font-semibold lg:text-white'>{Movies.name}</h1>
        <p className="lg:text-white lg:text-xl">{Movies.overview}</p>
        <p className="lg:text-white lg:text-lg">Total Flim: {Amount}</p>
    </div>
  )
}

export default Information