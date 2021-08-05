module.exports = (sequelize, DataTypes) => {
    const PurchaseOrder = sequelize.define("purchase_order", {
        po_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buyer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        buyer_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_unit_measurement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_unit_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_on: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return PurchaseOrder;
};