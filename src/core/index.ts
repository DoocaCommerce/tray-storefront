import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import { BlogCategoryService } from './modules/blog/category/BlogCategoryService' 
import { BlogPostService } from './modules/blog/post/BlogPostService'
import { BrandService } from './modules/brand/BrandService'
import { CategoryService } from './modules/category/CategoryService'
import { MenuService } from './modules/menu/MenuService'
import { PagesService } from './modules/pages/PagesService'
import { SectionsService }from './modules/sections/SectionsService'
import { SettingsService } from './modules/settings/SettingsService'

import Socket from './socket'

export const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export const services = {
  blogCategory: BlogCategoryService,
  blogPost: BlogPostService,
  brand: BrandService,
  sections: SectionsService,
  settings: SettingsService,
  category: CategoryService,
  pages: PagesService,
  menu: MenuService
}

export const socket = {
  ...Socket
}
