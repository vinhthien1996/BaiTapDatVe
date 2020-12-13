import React, { Component } from 'react';
import { connect } from 'react-redux';

class DatVe extends Component {


    renderDanhSachDaDat = () => {
        return this.props.danhSachGheDaDat.map((item, index) => {
            return <tr key={index}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td className="text-center"><i class="fa fa-times-circle btnHuy" onClick={() => {
                    this.props.dispatch({
                        type: 'HUY_GHE',
                        soGhe: item.soGhe
                    })
                }}></i></td>
            </tr>
        })
    }

    tongTien = () => {
        return this.props.danhSachGheDaDat.reduce((tong, item, index) => {
            return tong = tong + item.gia;
        }, 0);
    }

    render() {
        return (
            <div className="row px-3">
                <div className="col-12 p-0 m-0 listDatVe">
                    <table>
                        <thead>
                            <tr>
                                <th width="40%">Số ghế</th>
                                <th width="40%">Giá</th>
                                <th width="20%" className="text-center">Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSachDaDat()}
                            <tr>
                                <td>Tổng tiền</td>
                                <td colSpan="2" className="text-right">{this.tongTien().toLocaleString()} VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDaDat: state.stateVe.gheDangDat
    }
}

export default connect(mapStateToProps)(DatVe);