module.exports = (sequelize, DataTypes) => {
    const PurchaseOrder = sequelize.define("purchase_order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            allowNull: false,
            defaultValue: "Not Updated"
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Pending"
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
    }, {
        sequelize,
        timestamps: true,
        createdAt: 'created_on',
        updatedAt: 'updated_on'
    });
    return PurchaseOrder;
};