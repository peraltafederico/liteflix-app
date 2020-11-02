module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
  publicRuntimeConfig: {
    cloudinaryBaseUrl: process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL,
    cloudinaryUploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    cloudinaryCloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    liteflixBffBaseUrl: process.env.NEXT_PUBLIC_LITEFLIX_BFF_BASE_URL,
  },
}