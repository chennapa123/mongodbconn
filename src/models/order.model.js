const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const orderCollections = () => {
    return getDB().collection("orders");
};

const createOrder = async (orderData) => {
    return await orderCollections().insertOne(orderData);
};

const getAllOrders = async () => {
    return await orderCollections().find().toArray();
};

const getOrderById = async (id) => {
    return await orderCollections().findOne({
        _id: new ObjectId(id),
    });
};

const updateOrder = async (id, data) => {
    return await orderCollections().updateOne(
        {
            _id: new ObjectId(id),
        },
        {
            $set: data,
        }
    );
};

const deleteOrder = async (id) => {
    return await orderCollections().deleteOne({
        _id: new ObjectId(id),
    });
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};
