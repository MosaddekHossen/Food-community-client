import { useLoaderData } from "react-router-dom";

const SingleMaFo = () => {
    const User = useLoaderData();
    const { expiredDate, foodStatus, userName, userEmail, userImage, } = User || {};

    return (
        <>
            <div className="rounded-md my-12 py-12 bg-[#F4F3F0] text-center">
                <h2 className="text-4xl mb-3 font-extrabold">Manage A Single Food</h2>
                <div className="max-w-7xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-2xl">
                                    <th>Requester Name</th>
                                    <th>Requester Image</th>
                                    <th>Requester Email</th>
                                    <th>Request Time & Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {userName}
                                    </th>
                                    <td>
                                        <img className="h-20 w-20" src={userImage} alt="" />
                                    </td>
                                    <td>
                                        {userEmail}
                                    </td>
                                    <td>
                                        {expiredDate}
                                    </td>
                                    <th>
                                        <button className="px-6 text-white font-bold rounded-lg hover:bg-slate-500 py-2 bg-[#a5aca5]">Available</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleMaFo;