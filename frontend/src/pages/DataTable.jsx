import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { backendUrl } from '../App';

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [pageTwoComponents, setPageTwoComponents] = useState([]);
  const [pageThreeComponents, setPageThreeComponents] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/user/userList');
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/admin/component');
      if (response.data.success) {
        setPageTwoComponents(response.data.component[0].secondStep)
        setPageThreeComponents(response.data.component[0].thirdStep)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    fetchUserData();  
    fetchData();
  }, [])

  const formatDateToMDY = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <div>
      <h1 className='text-center text-2xl'>User's Table</h1>
      <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Password</th>
            <th className="border px-4 py-2 text-left">About Me</th>
            <th className="border px-4 py-2 text-left">Birthdate</th>
            <th className="border px-4 py-2 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.password}</td>
              <td className="border px-4 py-2">{user.aboutMe}</td>
              {user.birthdate != null ? (
                <td className="border px-4 py-2">{formatDateToMDY(user.birthdate)}</td>
              ) : (
                <td className="border px-4 py-2"></td>
              )}
              {user.address?.street != null ? (
                <td className="border px-4 py-2">{user.address?.street}, {user.address?.city}, {user.address?.state} - {user.address?.zip}</td>
              ):(
                <td className="border px-4 py-2"></td>
              )}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h1 className='text-center text-2xl'>Page Controls' Table</h1>
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left"> </th>
            <th>About Me</th>
            <th>Birth Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border px-4 py-2">Page Two Controls</td>
            {pageTwoComponents.map((value, index) => (
              <td key={index} className="border px-4 py-2">
                {value === 1 ? 'true' : 'false'}
              </td>
            ))}
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Page Three Controls</td>
            {pageThreeComponents.map((value, index) => (
              <td key={index} className="border px-4 py-2">
                {value === 1 ? 'true' : 'false'}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default DataTable
