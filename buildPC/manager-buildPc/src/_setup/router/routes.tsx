import AttributeValue from "../../views/AttributeValue";
import Attribute from "../../views/Attribute";
import { createBrowserRouter } from "react-router-dom";
import ManagerProduct from "../../views/managerProduct";
import Articles from "../../views/managerArticles";
import Brands from "../../views/managerBrand";
import ManagerCategoryArticles from "../../views/managerCategoryArticles";
import ManagerCategory from "../../views/managerCategory";
import ManagerBanner from "../../views/Banner";

const router = createBrowserRouter([
  {
    id: "root",
    action: async ({ request }) => {},
    children: [
      {
        path: "/",
        element: <ManagerProduct></ManagerProduct>,
        handle: {},
      },
      {
        path: "/category",
        element: <ManagerCategory></ManagerCategory>,
        handle: {},
      },
      {
        path: "/articles",
        element: <Articles></Articles>,
        handle: {},
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        handle: {},
      },
      {
        path: "/attributeValue",
        element: <AttributeValue></AttributeValue>,
        handle: {},
      },
      {
        path: "/attribute",
        element: <Attribute></Attribute>,
      },
      {
        path: "/category-articles",
        element: <ManagerCategoryArticles></ManagerCategoryArticles>,
        handle: {},
      },
      {
        path: "/banner",
        element: <ManagerBanner></ManagerBanner>,
        handle: {},
      },
    ],
  },
]);

export default router;
