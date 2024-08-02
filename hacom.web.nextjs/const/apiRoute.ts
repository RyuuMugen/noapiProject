export const API_ROUTE = {
  HOME: "/home-hacom",

  // Product
  GET_LIST_PRODUCT_NORMAL: "/TblItem/get-list",
  GET_DETAIL_PRODUCT: "/TblItem/edit",
  GET_LIST_PRODUCT_RELATION: "/TblItem/get-list-relation-web",
  GET_DETAIL_PRODUCT_BY_URL: "/TblItem/detail-by-url",
  GET_LIST_ATTRIBUTE_FILTER: "/TblAttribute/get-list-filter",
  GET_LIST_ATTRIBUTE_FILTER_ARR: "/TblAttribute/get-list-filter",
  GET_LIST_PRODUCT_DEAL: "TblProductDeal/get-list",
  GET_DETAIL_PRODUCT_DEAL: "/TblProductDeal/get-detail",

  // Cart
  CREATE_CART_PRODUCT: "/TblShoppingCartHeader/create",
  EDIT_CART_PRODUCT: "/TblShoppingCartHeader/edit",
  DELETE_CART_PRODUCT: "/TblShoppingCartHeader/delete",
  GET_LIST_CART_PRODUCT: "/TblShoppingCartHeader/get",
  GET_TOTAL_CART_PRODUCT: "/TblShoppingCartHeader/get-information",

  //Search
  GET_SEARCH_PRODUCT: "/TblItem/get-list-web",
  GET_SEARCH_PRODUCT_NORMAL: "/TblItem/get-list?KeySearch=",
  GET_SEARCH_LIST_CATEGORY: "TblCategory/get-list",
  GET_SEARCH_CATEGORY: "TblCategory/edit?id=",
  GET_SEARCH_BRAND: "TblBrand/get-by-key",
  GET_DETAIL_CATEGORY: "TblCategory/edit",
  //Address
  GET_LIST_COMMUNE: "/TblCommune/get-list",
  GET_DETAIL_COMMUNE: "/TblCommune/details",
  GET_LIST_DISTRICT: "/TblDistrict/get-list",
  GET_DETAIL_DISTRICT: "/TblDistrict/details",
  GET_LIST_PROVINCE: "/TblProvince/get-list",
  GET_DETAIL_PROVINCE: "/TblProvince/details",
  //Mega menu
  GET_MEGA_MENU: "/TblCategory/get-menu",
  GET_CATEGORY_TREE: "/TblCategory/get-category-tree?Skip=0&Take=1000",
  GET_SUGGEST: "/Home/suggest",

  //ArticleCategory
  GET_LIST_ARTICLE_CATEGORY: "TblArticleCategory/get-list",

  //Article
  GET_LIST_ARTICLE: "/TblArticle/get-list",
  GET_ARTICLE_DETAIL: "TblArticle/details",

  //SaleOrder
  CREATE_SALE_ORDER: "/tblSaleOrder/create",
  GET_LIST_SALE_ORDER: "/tblSaleOrder/get-list",
  GET_STATUS_SALE_ORDER: "/tblSaleOrder/look-up",
  MODIFY_SALE_ORDER: "/tblSaleOrder/edit",
  CUSTOMER_CANCEL_SALE_ORDER: "/tblSaleOrder/customer-cancel",
  //Store
  GET_STORE_LIST: "TblConfigWeb/details",

  //UserLike
  CREATE_USER_LIKE: "TblUserLike/create",
  EDIT_USER_LIKE: "TblUserLike/edit",
  DELETE_USER_LIKE: "TblUserLike/delete",
  GET_USER_LIKE: "TblUserLike/get-list",
  GET_USER_LIKE_DETAIL: "TblUserLike/get-detail/",

  //UserComment
  CREATE_USER_COMMENT: "TblUserComment/create",
  MODIFY_USER_COMMENT: "TblUserComment/edit",
  DELETE_USER_COMMENT: "TblUserComment/delete",
  GET_LIST_USER_COMMENT: "TblUserComment/get-list",
  GET_USER_COMMENT_DETAIL: "TblUserComment/get-detail/",

  //UserCommentReply
  CREATE_USER_COMMENT_REPLY: "TblUserCommentReply/create",
  MODIFY_USER_COMMENT_REPLY: "TblUserCommentReply/edit",
  DELETE_USER_COMMENT_REPLY: "TblUserCommentReply/delete",
  GET_LIST_USER_COMMENT_REPLY: "TblUserCommentReply/get-list",
  GET_USER_COMMENT_REPLY_DETAIL: "TblUserCommentReply/get-detail/",

  //UserReview
  CREATE_USER_REVIEW: "TblUserReview/create",
  MODIFY_USER_REVIEW: "TblUserReview/edit",
  DELETE_USER_REVIEW: "TblUserReview/delete",
  GET_LIST_USER_REVIEW: "TblUserReview/get-list",
  GET_USER_REVIEW_DETAIL: "TblUserReview/get-detail/",

  //Banner
  GET_LIST_BANNER: "TblBanner/get-list",

  //Customer
  CREATE_USER_CUSTOMER: "TblCustomer/create",
  CREATE_USER_CUSTOMER_WITH_OUT_TOKEN: "TblCustomer/customer-create",
  CUSTOMER_INFO: "TblCustomer/info",
  CUSTOMER_INFO_BY_USER_NAME: "TblCustomer/details-by-user-name",
  MODIFY_CUSTOMER: "/TblCustomer/edit",

  //Customer
  CREATE_USER_CUSTOMER_SITE: "TblCustomerSite/create",
  MODIFY_CUSTOMER_SITE: "TblCustomerSite/edit",
  DELETE_CUSTOMER_SITE: "TblCustomerSite/delete",

  //QR code
  CREATE_QR_CODE: "TblMBQRcode/create",
  EDIT_QR_CODE: "TblMBQRcode/edit",
  DELETE_QR_CODE: "TblMBQRcode/delete",
  GET_ALL_QR_CODE: "TblMBQRcode/get-all",

  //MBQR Code Payment
  GET_DETAILS_QR_CODE_PAYMENT: "TblMBQRCodePayment/details",

  //buildPC
  GET_LIST_ITEM_BUILD: "BuildPC/get-list-item-build",

  //Collection
  GET_LIST_ITEM_COLLECTION: "TblComboSetCollection/get-list-item",
  DETAIL_COLLECTION: "TblComboSetCollection/details",

  //AlePay
  CREATE_REQUEST_PAYMENT: "AlePay/request-payment",
  GET_TRANSACTION_INFO: "AlePay/get-transaction-info",
  GET_INSTALLMENT_INFO: "AlePay/get-installment-info",
  GET_LIST_BANKS: "AlePay/get-list-banks",
  CREATE_PAYMENT: "TblAlepayPayment/create",

  //GHTK
  GET_DATA_DELIVERY_FEE: "/shipment/fee",

  //Viettel
  GET_DATA_DELIVERY_FEE_VIETTEL: "/ViettelPost/get-price",

  //TblInstallment
  GET_LIST_INSTALLMENT: "TblInstallment/get-list",
  CREATE_INSTALLMENT_ORDER: "TblInstallmentOrder/create",

  //TradeIn
  GET_LIST_PARENT: "TblCategory/get-trade-in-by-parent",
  GET_LIST_TRADEIN_PRODUCT: "TblTradeInProduct/get-list",
  CREATE_TRADEIN_ORDER: "TblTradeInOrder/create",

  //CollectionFrom
  CREATE_COLLECTION_FORM: "TblCollectionForm/create",

  //NTL
  GET_DATA_DELIVERY_FEE_NTL: "/bill/calc-fee",

  //Guarantee
  GET_LIST_PRODUCT_GUARANTEE: "/Guarantee/get-list-product",
  GET_LIST_GUARANTEE: "/Guarantee/get-list-Guarantee",
  CREATE_GUARANTEE: "/Guarantee/create-Guarantee",
  DETAIL_GUARANTEE_ORDER: "/Guarantee/Detail-Order",
  DETAIL_GUARANTEE_PRODUCT: "/Guarantee/Detail-Product",

  //Voucher
  DETAIL_MA_VOUCHER: "/TblVoucher/Detail-Ma-Voucher",
  CREATE_TEST_VOUCHER: "/TblVoucher/create-Test-Voucher",

  
  //Rank
  GET_RANK: "/Rank/get-ranks",

  //MembershipCard
  GET_MEMBERSHIPCARD: "/MembershipCard/get-membership-cards-by-customer-id",
  GET_REMAINING_MONEY:
    "/MembershipCard/get-remaining-money-to-next-rank-by-card-id",
  //Logging
  LOG_ACTION: "/Logging/log-action",

  //SCA express
  GET_LIST_PROVINCE_SCA: "/categories/list-province",
  GET_LIST_DISTRICT_SCA: "/categories/list-district",
  GET_LIST_WARDS_SCA: "/categories/list-wards",
  GET_PRICE_ALL: "/price/get-price-all",
  CALL_TOKEN: "/user/login",
};
