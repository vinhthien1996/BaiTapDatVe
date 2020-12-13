import React, { Component } from 'react';
import style from './Film.module.css';
import { connect } from 'react-redux';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = style.chon;
                disabled = true;
            }

            let gheDangChon = '';
            
            let indexGhe = this.props.gheDangDat.findIndex(gheDD => gheDD.soGhe === ghe.soGhe);
            
            if(indexGhe !== -1) {
                cssGheDaDat = '';
                gheDangChon = style.dangDat;
                
            }

            return <button disabled={disabled} className={this.props.hangGhe.hang !== '' ? style.ghe + " " + cssGheDaDat + " " + gheDangChon : style.label} key={index} onClick={() => {
                this.props.dispatch({
                    type: 'DAT_GHE',
                    datGhe: ghe
                })
            }}>
                {ghe.soGhe}
            </button>
        })
    }

    render() {

        return (
            <div>
                <button className={this.props.hangGhe.hang !== '' ? style.label : style.labelNone}>{this.props.hangGhe.hang}</button> {this.renderGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gheDangDat: state.stateVe.gheDangDat
    }
}

export default connect(mapStateToProps)(HangGhe);