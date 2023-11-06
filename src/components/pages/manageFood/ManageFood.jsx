import { MdDeleteForever, MdModeEdit } from "react-icons/md";

const ManageFood = () => {
    //  onClick={() => handleDelete(_id)}
    //  onClick={() => HandleBookingConfirm(_id)}
    return (
        <div className="max-w-7xl mx-auto my-20">
            <tr className="flex items-center justify-between shadow-xl mb-2">
                <th>
                    <button className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {/* {img && <img src={img} alt="Avatar Tailwind CSS Component" />} */}
                            <img src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" alt="" />
                        </div>
                    </div>
                </td>
                <td>
                    {/* {service} */}
                </td>
                <td>
                    one
                </td>
                <td>
                    three
                </td>
                {/* <td>{date}</td> */}
                {/* <td>${price}</td> */}
                <th>
                    {/* {status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : */}
                    <div className="grid gap-2">
                        <button className="btn btn-info btn-sm text-3xl font-bold p-1 h-auto"><MdModeEdit /></button>
                        <button className="btn btn-error btn-sm text-3xl font-bold p-1 h-auto"><MdDeleteForever /></button>
                    </div>
                </th>
            </tr>
            {/* ----------------------------- */}
            <tr className="flex items-center justify-between shadow-xl mb-2">
                <th>
                    <button className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {/* {img && <img src={img} alt="Avatar Tailwind CSS Component" />} */}
                            <img src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" alt="" />
                        </div>
                    </div>
                </td>
                <td>
                    {/* {service} */}
                </td>
                <td>
                    one
                </td>
                <td>
                    three
                </td>
                {/* <td>{date}</td> */}
                {/* <td>${price}</td> */}
                <th>
                    {/* {status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : */}
                    <div className="grid gap-2">
                        <button className="btn btn-info btn-sm text-3xl font-bold p-1 h-auto"><MdModeEdit /></button>
                        <button className="btn btn-error btn-sm text-3xl font-bold p-1 h-auto"><MdDeleteForever /></button>
                    </div>
                </th>
            </tr>
            <tr className="flex items-center justify-between shadow-xl mb-2">
                <th>
                    <button className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {/* {img && <img src={img} alt="Avatar Tailwind CSS Component" />} */}
                            <img src="https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77615.jpg?w=996" alt="" />
                        </div>
                    </div>
                </td>
                <td>
                    {/* {service} */}
                </td>
                <td>
                    one
                </td>
                <td>
                    three
                </td>
                {/* <td>{date}</td> */}
                {/* <td>${price}</td> */}
                <th>
                    {/* {status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : */}
                    <div className="grid gap-2">
                        <button className="btn btn-info btn-sm text-3xl font-bold p-1 h-auto"><MdModeEdit /></button>
                        <button className="btn btn-error btn-sm text-3xl font-bold p-1 h-auto"><MdDeleteForever /></button>
                    </div>
                </th>
            </tr>
        </div>
    );
};

export default ManageFood;