const TableComponent = () => {
    const tabArray = ['All', 'Pending', 'Approved', 'Rejected']
    return (
        <div className="table-header flex flex-col bg-white shadow-sm w-full h-full rounded-xl text-black sticky z-10">
            <div className="tab-header flex justify-start items-center">
                {tabArray.map((tabEle) => {
                    return (
                        <div key={tabEle} className="flex flex-row items-center border-green-color border-t-0 border-r-0 border-b-2 border-l-0 p-1 m-2">
                            <span>
                                <button type="button" className="flex justify-between">
                                    <span>{tabEle}</span>
                                </button>
                            </span>
                            <span className="count bg-green-color rounded-lg p-1 m-1 text-xs text-white">1</span>
                        </div>
                    )
                })}
            </div>
            <div className="tab-content w-full -mt-2">
                <table className="flex flex-col border-2 outline-none w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableComponent;