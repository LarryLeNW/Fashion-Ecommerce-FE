import { Modal, notification } from "antd";
import { getProductCate } from "apis/productCate.api";
import Button from "components/Button";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { changeLoading } from "store/slicers/common.slicer";
import { formatMoney } from "utils/helper";
import Icons from "utils/icons";
import Pagination from "../admin/components/Pagination";
import ProductCateForm from "./ProductCateForm";

function ProductCategoryManager() {
    const dispatch = useDispatch();

    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [categories, setCategories] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isLoadingActions, setIsLoadingActions] = useState({
        loading: false,
        index: null,
    });
    const [dataEdit, setDataEdit] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);

    const fetchCategories = async () => {
        dispatch(changeLoading());
        try {
            const params = {
                limit,
                page,
            };
            const res = await getProductCate(params);
            setCategories(res?.result?.content);
        } catch (message) {
            notification.error({ message, duration: 2 });
        }
        dispatch(changeLoading());
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleMouseEnter = (index) => {
        if (hoveredRow != index) setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    const handleDelete = async (id) => {
        notification.success({ message: "Handle delete..." });
    };

    const openFormUpdate = () => {
        setIsShowModal(true);
    };

    return (
        <div className="w-full p-4 flex flex-col  overflow-auto min-h-full">
            <Modal
                width={800}
                open={isShowModal}
                onCancel={() => setIsShowModal(false)}
                footer={false}
            >
                <ProductCateForm
                    closeModal={() => setIsShowModal(false)}
                    fetchData={() => fetchCategories}
                    categoryCurrent={dataEdit}
                />
            </Modal>
            <div className="h-[75px] flex gap-2 items-center justify-between p-2 border-b border-blue-300">
                <div className="text-2xl font-bold flex justify-between items-center w-full ">
                    <div>Product Category Manager</div>
                    <Button
                        iconBefore={<Icons.FaPlus />}
                        name="Create"
                        handleClick={() => openFormUpdate()}
                        style={
                            "border rounded bg-green-600 cursor-pointer px-4 py-2 text-white text-sm"
                        }
                    />
                </div>

                {/* <div className="flex gap-4">
                    <div className="border border-main p-2 rounded h-full flex flex-col gap-2 ">
                        <span className="text-white">Search By Category :</span>
                        <select
                            name="sort"
                            id=""
                            className="w-full text-black"
                            onChange={(e) => {
                                if (e.target.value === "all") {
                                    const { category, prevParams } = params;
                                    setParams(prevParams);
                                    return;
                                }
                                handleFilter("category", e.target.value);
                            }}
                        >
                            <option className=" p-2" value="all">
                                all categories
                            </option>
                            {categories?.data?.map((el) => (
                                <option
                                    className=" p-2"
                                    key={el?.title}
                                    value={el?.title}
                                >
                                    {el?.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div> */}
            </div>
            <div className="p-4">
                {/* <div className="flex justify-around gap-2 items-center h-[15vh]  text-black p-2">
                    <div className="border border-main p-2 rounded h-full flex flex-col gap-2 ">
                        <span className="text-white">SORT BY :</span>
                        <select
                            name="sort"
                            id=""
                            onChange={(e) =>
                                handleFilter("sort", e.target.value)
                            }
                            className="w-full text-black"
                        >
                            <option className=" p-2" value="" disabled>
                                Option
                            </option>
                            <option className=" p-2" value="price">
                                Low To High Price
                            </option>
                            <option className=" p-2" value="-price">
                                High To Low Price
                            </option>
                            <option className=" p-2" value="-totalRatings">
                                Appreciate
                            </option>
                            <option className=" p-2" value="-sold">
                                Most Purchases
                            </option>
                            <option className=" p-2" value="-quantity">
                                High To Low Quantity
                            </option>
                            <option className=" p-2" value="quantity">
                                Low To Hight Quantity
                            </option>
                        </select>
                    </div>
                    <div className="border border-main p-4 rounded h-full">
                        <span className="text-white">Filter Price :</span>
                        <div className="flex gap-1">
                            <input
                                type="number"
                                placeholder="Price From"
                                onChange={(e) =>
                                    handleFilter("priceFrom", e.target.value)
                                }
                                className="p-2  outline-main"
                            />
                            <input
                                type="number"
                                placeholder="Price To"
                                onChange={(e) =>
                                    handleFilter("priceTo", e.target.value)
                                }
                                className="p-2  outline-main"
                            />
                        </div>
                    </div>
                    <div className="border border-main p-4 rounded h-full flex justify-around items-center gap-2">
                        <input
                            type="text"
                            value={keyword}
                            placeholder="search products by key ..."
                            onChange={(e) => setKeyword(e.target.value)}
                            className="p-2 flex-2 outline-main"
                        />
                        <button
                            className="text-white flex-1 cursor-pointer border text-sm  bg-green-600 "
                            onClick={() => navigate(path.ADMIN.UPDATE_PRODUCT)}
                        >
                            Create Product
                        </button>
                    </div>
                </div> */}
            </div>
            <div className="flex flex-col border justify-between">
                <table className="table-auto rounded p-2 bg-slate-50 mb-1 text-left w-full border-separate  transition-all duration-300 ease-in">
                    <thead className="font-bold bg-light text-white text-[13px] text-center border border-blue-300">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Slug</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((e, index) => (
                            <tr
                                key={e.id}
                                className=" relative "
                                onMouseEnter={() => handleMouseEnter(e.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <td className="px-2 py-1 border border-slate-500 text-center text-lg font-bold">
                                    {index + 1}
                                </td>
                                <td className="px-2 py-1 border border-slate-500  text-lg font-bold">
                                    <span>{e?.name}</span>
                                </td>
                                <td className="px-2 py-1 border border-slate-500 text-lg font-bold">
                                    <span>{e?.slug}</span>
                                </td>
                                <td className="px-2 py-1 border border-slate-500">
                                    <span>{e?.description}</span>
                                </td>

                                <td className="px-1 py-2 h-full flex  gap-4 items-center justify-center border border-slate-500">
                                    <Button
                                        name={"Edit"}
                                        style={
                                            "border rounded bg-blue-600 cursor-pointer px-4 py-2 text-white text-sm"
                                        }
                                        iconBefore={<Icons.FaEdit />}
                                    />
                                    <Button
                                        name={"Delete"}
                                        style={
                                            "border rounded bg-red-600 cursor-pointer px-4 py-2 text-white text-sm"
                                        }
                                        handleClick={() => handleDelete(e?.id)}
                                        iconBefore={<Icons.MdDeleteForever />}
                                    />
                                </td>
                                {hoveredRow === index && (
                                    <div className="absolute w-[240px] max-h-[200px] rounded top-[-200px]  left-0 bg-gray-400 z-20 border-2 border-main shadow-md px-2 py-1 transition-all duration-500 ease-out">
                                        <img
                                            src={e?.image}
                                            alt={e?.name}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="flex w-full justify-end p-2 ">
                    <Pagination
                        listLimit={[25, 40, 100]}
                        limitCurrent={limit}
                        setLimit={setLimit}
                        totalPages={totalPages}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductCategoryManager;