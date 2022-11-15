import React from 'react';
import './App.css'
import "react-float-menu/dist/react-float-menu.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './navbar/NavigationBar';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

import { PlusCircleOutlined } from '@ant-design/icons';
import {Menu} from 'react-float-menu';
import Home from './page/Home';
import About from './page/About';
import LoginPage from './users/LoginPage';
import RegisterPage from './users/RegisterPage';
import MapPelatihan from './Map/MapPelatihan';
import MapPenyuluhan from './Map/MapPenyuluhan';

function App() {
  return (
    <div className='App'>
      <div className='main'>
      <Router basename="/">
      <NavigationBar />
          <Routes>
              <Route path="/" element={<Home />}/>  
              <Route path="/home" element={<Home />}/>  
              <Route path="/pelatihan" element={<MapPelatihan />} /> 
              <Route path="/penyuluhan" element={<MapPenyuluhan />}/>  
              <Route path="/pendidikan" element={<About />} /> 
              <Route index element={<Home />} />
          </Routes>
        </Router>

      </div>
      <Menu
    theme={{
      menuBackgroundColor: "#FFFFFF",
      menuItemHoverColor: "#318CE7",
      menuItemHoverTextColor: "#fff",
      primary: "#318CE7",
      secondary: "#FFFFFF",
    }}
            dimension={40}
            items={[
              {
                children: [
                  { name: "Satuan Pendidikan KP",id:"menu_1_1"},
                  { name: "Satuan Pelatihan", path:"menu_1_2" },
                  { name: "Satuan Penyuluhan",id:"menu_1_3" }
                ],
                name: "Keragaan SDM",
              },
              { name: "Anggaran BPSDM" },
              {
                children: [
                  { name: "Peserta Didik",id:"menu_3_1" },
                  { name: "Peserta Pelatihan",id:"menu_3_2" },
                  { name: "Penyuluh",id:"menu_3_3" },
                ],
                name: "Pengadaan Barang dan Jasa",
              },
              { children:[
                { name: "Bantuan Pendidikan",id:"menu_4_1" },
              { name: "Jenis Pelatihan",id:"menu_4_2" },
              { name: "Kelompok",id:"menu_4_3" },],
                name: "Pendapatan Negara Bukan Pajak" },
              { children:[
                { name: "Pendidik",id:"menu_5_1" },
              { name: "Tenaga Pelatih",id:"menu_5_2" },],
                name: "Reformasi Birokrasi" },
              { children:[
                { name: "Tenaga Kependidikan",id:"menu_6_1" },
                { name: "Purnawidya",id:"menu_6_2" },],
                name: "LHP Itjen & BPK" },
              { children:[{ name: "Alumni",id:"menu_7_1" },],
                name: "Barang Milik Negara" },
            ]}
            shape="square"
            startPosition="bottom left"
            width={250}
            onSelect={(path) => console.log(path)}
          >
            <PlusCircleOutlined style={{ fontSize:20 }}/>
          </Menu>
      <Footer />
    </div>
  )
}
export default App;
