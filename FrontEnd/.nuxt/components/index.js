export { default as BannerMain } from '../..\\components\\Banner-main.vue'
export { default as BestSellersMarket } from '../..\\components\\Best-sellers-market.vue'
export { default as CardsMostViewedProducts } from '../..\\components\\Cards-most-viewed-products.vue'
export { default as CardsProduct } from '../..\\components\\Cards-product.vue'
export { default as CardsSubItems } from '../..\\components\\Cards-subItems.vue'
export { default as Carousel } from '../..\\components\\Carousel.vue'
export { default as Cart } from '../..\\components\\Cart.vue'
export { default as CategoryProductCards } from '../..\\components\\Category-product-cards.vue'
export { default as DepartamentsHeader } from '../..\\components\\departaments-header.vue'
export { default as DiscountProducts } from '../..\\components\\Discount-products.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as IconsFooter } from '../..\\components\\Icons-footer.vue'
export { default as Main } from '../..\\components\\Main.vue'
export { default as MostFastestProducts } from '../..\\components\\Most-fastest-products.vue'
export { default as OffersFooter } from '../..\\components\\Offers-footer.vue'
export { default as ProductView } from '../..\\components\\Product-view.vue'
export { default as SerivcesFooter } from '../..\\components\\Serivces-footer.vue'
export { default as SubItensHeader } from '../..\\components\\sub-itens-header.vue'
export { default as TheBestSellerDiscount } from '../..\\components\\The-best-seller-discount.vue'
export { default as TheSmartphonesMostSold } from '../..\\components\\The-smartphones-most-sold.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
