import React from 'react'
import { IoApps } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Home() {
    const height = window.innerHeight - 160;
    return (
        <div className="container">
            <div className='Head'>
                <Link to='https://mail.google.com/mail'><p style={{ color: '#e6e6e6', fontFamily: '"Roboto", sans-serif' }}>Gmail</p></Link>
                <Link to='https://www.google.com/imghp?hl=az&authuser=0&ogbl'><p style={{ color: '#e6e6e6', fontFamily: '"Roboto", sans-serif' }}>Şəkillər</p></Link>
                <IoApps style={{ color: '#e6e6e6' }} />
                <CgProfile style={{ marginRight: 20, color: '#e6e6e6' }} />
            </div>
            <div className='center' style={{ height: height }}>
                <Link to='https://www.google.com/' style={{ textDecoration: 'none' }}><p style={{ fontSize: 120, margin: 0, padding: 0, color: '#fff', fontFamily: 'Roboto', }}>Google</p></Link>
                <div
                    style={{
                        backgroundColor: "#303134",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "24px",
                        padding: "12px 20px",
                        width: "100%",
                        maxWidth: "600px",
                        boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
                        marginTop: 30,
                    }}
                >
                    <input
                        type="text"
                        placeholder="Axtarış..."
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            color: "white",
                            fontSize: "16px",
                            width: "100%",
                            fontFamily: "sans-serif",
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
                    <button style={{ padding: 10, border: 'none', backgroundColor: '#303134', borderRadius: 5, color: '#fff', fontSize: 17, fontFamily: '"Roboto", sans-serif' }}>Google'da axtarış</button>
                    <Link to='https://doodles.google'><button style={{ padding: 10, border: 'none', backgroundColor: '#303134', borderRadius: 5, color: '#fff', fontSize: 17, fontFamily: '"Roboto", sans-serif' }}>Mən şanslıyam</button></Link>
                </div>
                <div style={{ display: 'flex', marginTop: 50, }}>
                    <p style={{ color: '#fff', fontFamily: '"Roboto", sans-serif' }}>Google təklifi: </p>
                    <p style={{ color: '#98c3ff', fontFamily: '"Roboto", sans-serif' }}> Azərbaycanca</p>
                </div>
            </div>
            <div className='bottom'>
                <div style={{ display: 'flex', borderBottom: '1px solid #313335' }}>
                    <p style={{ marginLeft: 20, fontFamily: '"Roboto", sans-serif' }}>Azərbaycan</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <div style={{ display: 'flex', gap: 20, fontFamily: '"Roboto", sans-serif' }}>
                        <p style={{ marginLeft: 20 }}>Google haqqında</p>
                        <p>Reklamlar</p>
                        <p>Biznes</p>
                        <p>Axtarışın işləmə qaydası</p>
                    </div>
                    <div style={{ display: 'flex', marginRight: 20, gap: 20, fontFamily: '"Roboto", sans-serif' }}>
                        <p>Məxfilik</p>
                        <p>Şərtlər</p>
                        <p>seçimlər</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home