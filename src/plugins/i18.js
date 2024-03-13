
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
      message: {
        hello: 'hello world'
        ,home: 'Home'
        ,about:'About',
        Product:'Products',
        login:'LOGIN'
        ,signup:'SIGN UP'
        ,add:'Add to cart'
        ,remove:'remove from cart',
        aboutme:'Toys Store is one of the most important stores in the world that sells toys for children and teenagersIt was developed by Hello Word, which supports web development and mobile application creation And electronic marketing '
        ,Products:'our Products'
      }
    },
    ar: {
      message: {
        hello: ' مرحبا'
        ,home: 'الرئيسية'
        ,about:'لماذا نحن',
        Product:'المنتجات',
        login:'تسجيل دخول'
        ,signup:'تسجيل'
        ,add:'اضافة لسلة المنتجات'
        ,remove:'حذف من السلة',
        aboutme:'متجر "toys" هو أحد أهم المتاجر في العالم لبيع الالعاب للاطفال واليافعين  وهو من تطوير شركة "Hello Word" التي تدعم تطوير الويب وإنشاء تطبيقات الهواتف المحمولة والتسويق الالكتروني ',
        Products:'منتجاتنا'
      }
    }
  }
  

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

export default i18n;