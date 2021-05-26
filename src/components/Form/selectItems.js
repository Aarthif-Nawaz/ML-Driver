import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'

function SelectItems(props) {
    const history = useHistory();
    
    const [data,setData] = useState({
        armChair: {
            type: "Arm Chair",
            count : 0,
            action: "",
        },
        Bags: {
            type: "Bags",
            count : 0,
            action: "",
        },
        BookCase: {
            type: "BookCase",
            count : 0,
            action: "",
        },
        DiningChair: {
            type: "Dining Chair",
            count : 0,
            action: "",
        },
        DiningTable: {
            type: "Dining Table",
            count : 0,
            action: "",
        },
        Cabinet: {
            type: "Cabinet",
            count : 0,
            action: "",
        },
        Mirror: {
            type: "Mirror",
            count : 0,
            action: "",
        },
        SideBoard: {
            type: "Side Board",
            count : 0,
            action: "",
        },
        Piano: {
            type: "Piano",
            count : 0,
            action: "",
        },
        Table: {
            type: "Table",
            count : 0,
            action: "",
        },
        Sofa: {
            type: "Sofa",
            count : 0,
            action: "",
        },
        TV: {
            type: "TV",
            count : 0,
            action: "",
        },
        Bureu: {
            type: "Bureu",
            count : 0,
            action: "",
        },
        cdTower: {
            type: "Cd Tower",
            count : 0,
            action: "",
        },
        Speaker: {
            type: "Speaker",
            count : 0,
            action: "",
        },
        Rug: {
            type: "Rug",
            count : 0,
            action: "",
        },
        VaccumCleaner: {
            type: "Vaccum Cleaner",
            count : 0,
            action: "",
        },
        Lamp: {
            type: "Lamp",
            count : 0,
            action: "",
        },
        WelshDresser: {
            type: "Welsh Dresser",
            count : 0,
            action: "",
        },
        Bed: {
            type: "Bed",
            count : 0,
            action: "",
        },
        BedBunk: {
            type: "Bed Bunk",
            count : 0,
            action: "",
        },
        BedFrame: {
            type: "Bed Frame",
            count : 0,
            action: "",
        },
        BoxedAlready: {
            type: "Boxed Already",
            count : 0,
            action: "",
        },
        Drawers: {
            type: "Drawers",
            count : 0,
            action: "",
        },
        BedMirror: {
            type: "Bed Mirror",
            count : 0,
            action: "",
        },
        DressingTable: {
            type: "Dressing Table",
            count : 0,
            action: "",
        },
        Wardrobe: {
            type: "Wardrobe",
            count : 0,
            action: "",
        },
        ClothesBasket: {
            type: "Clothes Basket",
            count : 0,
            action: "",
        },
        SuitCases: {
            type: "SuitCases",
            count : 0,
            action: "",
        },
        BedSideTable: {
            type: "Bed SideTable",
            count : 0,
            action: "",
        },
        Shelf: {
            type: "Shelf",
            count : 0,
            action: "",
        },
        Ottoman: {
            type: "Ottoman",
            count : 0,
            action: "",
        },
        Chest: {
            type: "Chest",
            count : 0,
            action: "",
        },
        Desk: {
            type: "Desk",
            count : 0,
            action: "",
        },
        OfficeChair: {
            type: "Office Chair",
            count : 0,
            action: "",
        },
        Stand: {
            type: "TV Stand",
            count : 0,
            action: "",
        },
        Bin: {
            type: "Bin",
            count : 0,
            action: "",
        },
        DishWasher: {
            type: "Dish Washer",
            count : 0,
            action: "",
        },
        FrideFreezer: {
            type: "Fride Freezer",
            count : 0,
            action: "",
        }
    })
    
    const [items,setItems] = useState([])
    
    const save = () => {
        props.saveItems(data)
        
        console.log(data)    
        
    }

    console.log(items)
    return (
        <>
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2> Select Removals </h2>
                            </div>
                            <div className="body">
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    <input value={data.armChair.count}  onChange={e => setData({...data, armChair : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Arm Chair</span>
                                    
                                    <input value={data.Bags.count}  onChange={e => setData({...data, Bags : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bags</span>
                                    
                                    <input value={data.BookCase.count}  onChange={e => setData({...data, BookCase : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>BookCase</span>
                                    
                                    <input value={data.DiningChair.count}  onChange={e => setData({...data, DiningChair : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Dining Chair</span>
                                    
                                    <input value={data.DiningTable.count}  onChange={e => setData({...data, DiningTable : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Dining Table</span>

                                    <input value={data.Cabinet.count}  onChange={e => setData({...data, Cabinet : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />            
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Cabinet</span>

                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    
                                    <input value={data.Mirror.count}  onChange={e => setData({...data, Mirror : {count : e.target.value}})} style={{marginLeft: 30, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Mirror</span>

                                    <input value={data.SideBoard.count}  onChange={e => setData({...data, SideBoard : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Side Board</span>

                                    <input value={data.Piano.count}  onChange={e => setData({...data, Piano : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Piano</span>
                                    
                                    <input value={data.Table.count}  onChange={e => setData({...data, Table : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Table</span>

                                    <input value={data.Sofa.count}  onChange={e => setData({...data, Sofa : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Sofa</span>

                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    
                                    <input value={data.TV.count}  onChange={e => setData({...data, TV : {count : e.target.value}})} style={{marginLeft: 48, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>TV</span>
                                    
                                    <input value={data.Bureu.count}  onChange={e => setData({...data, Bureu : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bureu</span>
                                    
                                    <input value={data.cdTower.count}  onChange={e => setData({...data, cdTower : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>CD TOWER</span>
                                    
                                    <input value={data.Speaker.count}  onChange={e => setData({...data, Speaker : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Speaker</span>
                                    
                                    <input value={data.Rug.count}  onChange={e => setData({...data, Rug : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Rug</span>

                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    
                                    <input value={data.VaccumCleaner.count}  onChange={e => setData({...data, VaccumCleaner : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Vac Cleaner</span>
                                    
                                    <input value={data.Lamp.count}  onChange={e => setData({...data, Lamp : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Lamp</span>
                                    
                                    <input value={data.WelshDresser.count}  onChange={e => setData({...data, WelshDresser : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Wel Dress</span>
                                   
                                    <input value={data.Bed.count}  onChange={e => setData({...data, Bed : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bed</span>
                                    
                                    <input value={data.BedBunk.count}  onChange={e => setData({...data, BedBunk : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bed Bunk</span>
                                    
                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    <input value={data.BedFrame.count}  onChange={e => setData({...data, BedFrame : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bed Frame</span>
                                    
                                    <input value={data.BoxedAlready.count}  onChange={e => setData({...data, BoxedAlready : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Boxed Aldy</span>
                                   
                                    <input value={data.Drawers.count}  onChange={e => setData({...data, Drawers : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Drawers</span>
                                   
                                    <input value={data.BedMirror.count}  onChange={e => setData({...data, BedMirror : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bed Mirror</span>
                                    
                                    <input value={data.DressingTable.count}  onChange={e => setData({...data, DressingTable : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Dressing Table</span>
                                    
                                    <input value={data.Wardrobe.count}  onChange={e => setData({...data, Wardrobe : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Wardrobe</span>
                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                   
                                <input value={data.ClothesBasket.count}  onChange={e => setData({...data, ClothesBasket : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span style={{marginTop: 10, fontSize:12, marginLeft: 3, fontWeight: 'bold'}}>Cloth Basket</span>
                                    
                                    <input value={data.SuitCases.count}  onChange={e => setData({...data, SuitCases : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>SuitCases</span>
                                    
                                    <input value={data.BedSideTable.count}  onChange={e => setData({...data, BedSideTable : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bed Side Table</span>
                                   
                                    <input value={data.Shelf.count}  onChange={e => setData({...data, Shelf : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Shelf</span>
                                    
                                    <input value={data.Ottoman.count}  onChange={e => setData({...data, Ottoman : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Ottoman</span>

                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                   
                                    <input value={data.Chest.count}  onChange={e => setData({...data, Chest : {count : e.target.value}})} style={{marginLeft: 25, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Chest</span>
                                    
                                    <input value={data.Desk.count}  onChange={e => setData({...data, Desk : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Desk</span>
                                    
                                    <input value={data.OfficeChair.count}  onChange={e => setData({...data, OfficeChair : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Office Chair</span>
                                    
                                    <input value={data.Stand.count}  onChange={e => setData({...data, Stand : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Stand</span>
                                    
                                    <input value={data.Bin.count}  onChange={e => setData({...data, Bin : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Bin</span>

                                </div>
                                <div style={{marginTop: 20}} className="input-group mb-3">
                                    
                                    <input value={data.DishWasher.count}  onChange={e => setData({...data, DishWasher : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 3, fontWeight: 'bold'}}>Dish Washer</span>
                                    
                                    <input value={data.FrideFreezer.count}  onChange={e => setData({...data, FrideFreezer : {count : e.target.value}})} style={{marginLeft: 10, height: 40, width:60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span style={{marginTop: 10, fontSize:12, marginLeft: 10, fontWeight: 'bold'}}>Fridge Freezer</span>
                                    
                                </div>
                                <span style={{ marginTop: 20 }} onClick={save} className="btn btn-sm btn-primary mr-1" title="">Save Removals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectItems;