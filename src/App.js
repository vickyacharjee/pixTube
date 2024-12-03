import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";
import ContentList from "./components/ContentList";
import Test from "./components/Test";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <ContentList />,
        },
        {
          path: "/test",
          element: <Test/>,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;














// import { Provider } from "react-redux";
// import Body from "./components/Body";
// import Header from "./components/Header";
// import appStore from "./store/appStore";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
// import Error from "./components/Error";
// import ContentList from "./components/ContentList";

// function App() {
//   const appRouter=createBrowserRouter([{
//     path:"/",
//     element:<Body/>,
//     errorElement:<Error/>,
//     children:[
//       {
//         path:"/",
//         element:<MainContainer/>
//       },
//       {
//         path:"/watch",
//         element:<WatchPage/>
//       },
//       {
//         path:"/search",
//         element:<ContentList/>
//       },

//     ]
//   }])
//   return (
//     <div>
//       <Provider store={appStore}>
//           <Header/>
//           <RouterProvider router={appRouter}/>
//       </Provider>
//     </div>
//   );
// }

// export default App;
