module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("hotel",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        tipe_kamar:{
            type : DataTypes.VARCHAR,
        },
        kapasitas_tamu:{
            type : DataTypes.INTEGER,
        },
        lantai:{
            type : DataTypes.INTEGER,
        },
        fasilitas:{
            type : DataTypes.VARCHAR,
        },
         tanggal_pesan:{
            type : DataTypes.VARCHAR,
        }
      });
    return hotel;
};

       

