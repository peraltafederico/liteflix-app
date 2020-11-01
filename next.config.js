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
    cloudinaryBaseUrl: process.env.CLOUDINARY_BASE_URL,
    cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    liteflixBffBaseUrl: process.env.LITEFLIX_BFF_BASE_URL,
  },
}