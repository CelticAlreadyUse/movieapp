import {getPopularMovie} from '@/src/libs/api/api'
import Movies from '@/src/components/Collection/Movies'
import Header from '@/src/components/Collection/header'
import Information from '@/src/components/Collection/Information'
const Page = async({params}) =>{
    const CollectionId = params.collection 
    const Movie = await getPopularMovie(`collection/${CollectionId}`)

    return(
<div >
    <div className='lg:flex '>
    <Header Movie = {Movie}/>
    </div>
    <Movies movies={Movie}/>
   
</div>
    )
}
export default Page