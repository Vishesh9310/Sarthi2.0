import React, { useState } from 'react';
import Nav from '../navbar'
import Footer from '../footer'
import { color } from 'chart.js/helpers';

function form() {


    const [formData, setFormData] = useState({
        P_name: '',
        P_desc: '',
        image: null,
        rate: '',
        discount: '',
        delivery_date: '',
        return_duration: '',
        isdeliveryfree: '',
        isreturn: '',
        isCOD: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

    };

    return (
        <>
            <Nav />

            <div className="h-fit p-8">
                <div className="form max-w-4xl mx-auto p-6 rounded-lg shadow-2xl mb-10 shadow-sky-300">
                    <h1 className="divheadingblack text-3xl font-bold text-center mb-6">ADMIN PAGE: DATA UPLOADING PAGE</h1>
                    <div className="h-fit backg_teal w-200 ">
                        <form onSubmit={handleSubmit} className="mt-3 p-5 space-y-5">
                            <input name="p_name" type="text" placeholder="Enter Product Name" value={formData.P_name} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />
                            <input name="p_desc" type="text" placeholder="Enter Product Desc" value={formData.P_desc} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />
                            <label className="block mb-1 font-medium">Enter Product Image</label>
                            <input name="image" type="file" accept="image/*" onChange={handleChange} className="border p-2 rounded-md outline-none div divheadingblack w-full" required />
                            <label className="block mb-1 font-medium">Enter Product Delivery Date</label>
                            <input name="delivery_date" type="date" value={formData.delivery_date} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />
                            <input name="rate" type="number" placeholder="Enter Product Price" value={formData.rate} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />
                            <input name="discount" type="number" placeholder="Enter Product Discount" value={formData.discount} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />
                            <input name="return_duration" type="date" placeholder="Enter Product return duration" value={formData.return_duration} onChange={handleChange} required className="p-2 outline-none div divheadingblack w-full" />

                            <div className="p-2">
                                <p className="divheadingblack">Is COD Available?</p>
                                <label><input type="radio" name="isCOD" value="Yes" checked={formData.isCOD === 'Yes'} onChange={handleChange}/> Yes</label>
                                <label className="ml-4"><input type="radio" name="isCOD" value="No" checked={formData.isCOD === 'No'} onChange={handleChange}/> No</label>
                            </div>

                            <div className="p-2">
                                <p className="divheadingblack">Is Delivery Free?</p>
                                <label><input type="radio" name="isdeliveryfree" value="Yes" checked={formData.isdeliveryfree === 'Yes'} onChange={handleChange}/> Yes</label>
                                <label className="ml-4"><input type="radio" name="isdeliveryfree" value="No" checked={formData.isdeliveryfree === 'No'} onChange={handleChange}/> No</label>
                            </div>

                            <div className="p-2">
                                <p className="divheadingblack">Is Product Returnable?</p>
                                <label><input type="radio" name="isreturn" value="Yes" checked={formData.isreturn === 'Yes'} onChange={handleChange}/> Yes</label>
                                <label className="ml-4"><input type="radio" name="isreturn" value="No" checked={formData.isreturn === 'No'} onChange={handleChange}/> No</label>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 text-white p-2">Upload data</button>
                        </form>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default form;