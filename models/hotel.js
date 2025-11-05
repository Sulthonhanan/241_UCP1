module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define("hotel",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        tipe_kamar:{
            type : DataTypes.STRING,
        },
        kapasitas_tamu:{
            type : DataTypes.STRING,
        },
        lantai:{
            type : DataTypes.STRING,
        },
        fasilitas:{
            type : DataTypes.STRING,
        },
         tanggal_pesan:{
            type : DataTypes.STRING,
        }
      });
    return hotel;
};

       

