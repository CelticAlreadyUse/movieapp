/** @type {import('next').NextConfig} */
const nextConfig = {   
     images: {
    remotePatterns: [
        {
            hostname: 'image.tmdb.org',
        },
        {
            hostname:"avatars.githubusercontent.com"
        },
        {
            hostname:'lh3.googleusercontent.com'
        }
    ]
}

}

module.exports = nextConfig
