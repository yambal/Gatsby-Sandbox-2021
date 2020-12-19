import CMS from "netlify-cms-app"
import { BlogPreviewTemplate } from "./previewTemplates/BlogPreviewTemplate"

CMS.registerPreviewTemplate('blog', BlogPreviewTemplate)