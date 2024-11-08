const paths = {
    PUBLIC: "/",
    HOME: "/",
    ALL: "*",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password/:type",
    CONFIRM_REGISTER: "/confirm-register/:status",
    PRODUCTS: "/products",
    INTRODUCE: "/introduce",
    OUR_SERVICES: "/services",
    CONTACT: "/contact",
    BLOGS: "/blogs",
    DETAIL_BLOG: "/blogs/:blogId",
    DETAIL_CART: "detail-cart",
    PROFILE: "profile",
    DETAIL_PRODUCT: "/products/detail-product",
    CHECKOUT: "/checkout",
    ADMIN: {
        HOME: "/admin/dashboard",
        USER_MANAGEMENT: "/admin/user-management",
        ORDER_MANAGEMENT: "/admin/order-management",
        UPDATE_ORDER: "/admin/update-order",
        PRODUCT_MANAGEMENT: "/admin/product-management",
        PRODUCT_CATEGORY_MANAGEMENT: "/admin/product-category-management",
        PRODUCT_BRAND_MANAGEMENT: "/admin/product-brand-management",
        UPDATE_PRODUCT: "/admin/update-product",
        VARIANT_PRODUCT_MANAGEMENT: "/admin/variant-management/:pid",
        BLOG_MANAGEMENT: "/admin/blog-management/",
        BLOG_CATEGORY_MANAGEMENT: "/admin/blog-category-management/",
        UPDATE_BLOG: "/admin/update-blog/",
    },
    MEMBER: {
        PROFILE: "/member/profile",
        MY_CART: "/member/my-cart",
        HISTORY: "/member/buy-history",
        WISH_LIST: "/member/wishlist",
        CHECKOUT: "/member/checkout",
        SHOW_BILL: "/member/show-bill/:oid",
    },
};

export default paths;
