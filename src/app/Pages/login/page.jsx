import Link from "next/link"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo"
export default function page(){
    return(
        <div className="flex justify-center mt-20 items-center h-full">
    
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div className="bg-gray-50 flex items-center text-start  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            <GithubLogo className="mr-4" size={32} />
            <Link href="/api/auth/signin"  >Signin With Github  </Link>
            
        </div>
        <div className="bg-gray-50 flex items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
        <GoogleLogo className="mr-4" size={32} />
            <Link href="/api/auth/signin"  >Sigin With Google</Link>
        </div>
      
    
    </form>
</div>

        </div>
    )
}