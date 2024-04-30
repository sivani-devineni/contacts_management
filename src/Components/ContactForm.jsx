import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';

function ContactForm() {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSave() {
        dispatch(addContact(form))
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                <div className="py-4 px-6">
                    <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="first-name">First Name</label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            id="first-name"
                            type="text"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="last-name">Last Name</label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            id="last-name"
                            type="text"
                            name="last_name"
                            value={form.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="mobile">Mobile Number</label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            id="mobile"
                            type="tel"
                            name="mob"
                            minLength="10"
                            maxLength="10"
                            value={form.mob}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="status">Status</label>
                        <select
                            className="w-full border border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            id="status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                        >
                            <option value={'active'}>Active</option>
                            <option value={"inactive"}>Inactive</option>
                        </select>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSave}
                    >
                        Save Contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
