import React, { Component } from 'react';
import style from './Film.module.css';
import data from './danhSachGhe.json';
import HangGhe from './HangGhe';
import DatVe from './DatVe';

export default class Film extends Component {

    renderGhe = () => {
        return data.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} />
            </div>
        });
    }

    render() {
        return (
            <div className={`${style.bgFilm}`}>
                <div className={`${style.bgDark}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 pt-3 text-center">
                                <h2 className="text-warning p-0 m-0">ĐẶT VÉ XEM PHIM CYBERSOFT</h2>
                                {this.renderGhe()}
                            </div>
                            <div className={`col-4 pt-4 ${style.bgInfo}`}>
                                <div className="row px-2 mb-3">
                                    <div className="col-12 text-center">
                                        <h4 className="text-white">DANH SÁCH GHẾ BẠN CHỌN</h4>
                                    </div>
                                    <div className="col-4 text-center p-1 pt-2">
                                        <div className={style.daDat}>Ghế đã đặt</div>
                                    </div>
                                    <div className="col-4 text-center p-1 pt-2">
                                        <div className={style.dangDat}>Ghế đang đặt</div>
                                    </div>
                                    <div className="col-4 text-center p-1 pt-2">
                                        <div className={style.chuaDat}>Ghế chưa đặt</div>
                                    </div>
                                </div>
                                <DatVe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
