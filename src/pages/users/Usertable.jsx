import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { http } from "../../axios"
import feather from 'feather-icons';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';


const Usertable = () => {
  const router = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await http.get("/getalluser")
      setData(response.data?.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await http.delete(`/userdelete/${id}`);
      if (response.status === 200) {
        toast.success("User Deleted Successfully");
        fetchData();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleStatusToggle = async (currentStatus, id) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    try {
      await http.put(`/userstatus/${data[id - 1]?._id}`, { status: newStatus });
      fetchData();
      toast.success("Status Update Successfully");
    } catch (error) {
      console.error('Error:', error);
      toast.error(error)
    }
  };


  const feathers = () => {
    if (feather) {
      feather.replace({
        width: 14,
        height: 14
      });
    }
  }
  useEffect(() => {
    feathers();
    fetchData();
  }, []);

  const columns = [
    {
      name: "serialNumber",
      label: "S.No.",
      options: {
        filter: false,
        sort: true,
      },
    },

    {
      name: "name",
      label: "NAME",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => (
          <Switch
            checked={value === 'active'}
            onChange={() => handleStatusToggle(value, tableMeta.rowData[0])}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        ),

      },
    },

    {
      name: "image",
      label: "IMAGE",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          <Avatar
            alt="Remy Sharp"
            src={`http://localhost:4040/${value}`}
            sx={{ width: 56, height: 56 }}
          />
        ),
      },
    },
    {
      name: "action",
      label: "ACTION",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => (
          <div>
            <Fab size="small" color="success" aria-label="add" sx={{ marginRight: "4px" }} onClick={() => router(`/userview/${data[tableMeta.rowData[0] - 1]['_id']}`)}>
              <RemoveRedEyeOutlinedIcon />
            </Fab>
            <Fab size="small" color="secondary" aria-label="edit" onClick={() => router(`/userupadte/${data[tableMeta.rowData[0] - 1]['_id']}`)}>
              <EditIcon />
            </Fab>
            <Fab size="small" color="error" aria-label="add" sx={{ marginLeft: "4px" }} onClick={() => handleDelete(data[tableMeta.rowData[0] - 1]['_id'])}>
              <DeleteIcon />
            </Fab>
          </div>
        )
      },
    }

  ];

  const options = {
    sort: true,
    selectableRows: "none",
  };
  const modifiedData = data.map((item, index) => ({ ...item, serialNumber: index + 1 }));
  return (
    <>
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-start mb-0">
                    Users Listing
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <section className="section">
            {/* <button className='btn btn-primary'
              onClick={() => router("/Createuser")}
              style={{
                width: "10%", marginLeft: "85%",
                marginBottom: "25px"
              }}>Add+</button> */}
            <MUIDataTable
              title={"Patient List"}
              data={modifiedData}
              columns={columns}
              options={options}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Usertable;