import CMS from 'netlify-cms-app'
//import uploadcare from 'netlify-cms-media-library-uploadcare'
////import cloudinary from 'netlify-cms-media-library-cloudinary'

// import BlogPostPreview from './preview-templates/BlogPostPreview'
import HomePreview from './preview-templates/HomePreview'

//CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('home', HomePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)