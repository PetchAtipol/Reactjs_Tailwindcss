const Assignment1 = () => {
    return ( 
        <div className="h-screen">
        <div className=" column h-full bg-indigo-600 ">
          <nav className="flex items-center justify-center text-white bg-gray-500 h-1/6 " >
            <h1>Header</h1>
          </nav>
          <div className="flex justify-between bg-slate-600 h-4/6">
            <div className="flex items-center justify-center bg-gray-400 w-40">
              <p>L-Sidebar</p>
            </div>
            <div className="column bg-green-500 w-full ">
              <nav className="flex items-center justify-center bg-orange-400 h-[40px] w-full">
                <h3>Navigator</h3>
              </nav>
              <div className="flex items-center justify-center bg-blue-400 h-[322px] w-full ">
                <h1>Article</h1>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-400 w-40">
              <p>R-Sidebar</p>
            </div>
          </div>
          <footer className="flex items-center justify-center h-1/6 bg-gray-500 text-gray-300 ">
            <h1>Footer</h1>
          </footer>
        </div>
      </div>
     );
}
 
export default Assignment1;