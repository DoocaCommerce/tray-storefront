import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import { BlogCategoryService } from './modules/blog/category/BlogCategoryService'
import { BlogPostService } from './modules/blog/post/BlogPostService'
import { BrandService } from './modules/brand/BrandService'
import { CartService } from './modules/cart/CartService'
import { CategoryService } from './modules/category/CategoryService'
import { LandingPagesService } from './modules/landing-pages/LandingPagesService'
import { MenuService } from './modules/menu/MenuService'
import { PagesService } from './modules/pages/PagesService'
import { SectionsService } from './modules/sections/SectionsService'
import { SettingsService } from './modules/settings/SettingsService'
import { ShopService } from './modules/shop/ShopService'

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
  cart: CartService,
  category: CategoryService,
  landingPages: LandingPagesService,
  menu: MenuService,
  pages: PagesService,
  sections: SectionsService,
  settings: SettingsService,
  shop: ShopService
}

export const socket = {
  ...Socket
}
