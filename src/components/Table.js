import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Table({details}){


    const getMuiTheme = () => createTheme({
        components: {
          MuiTableCell: {
            styleOverrides:{
              head:{
                padding:"14px 0px 14px 30px",
                fontWeight:600,
                color:'#a4a9b3'
              },
              body:{
                padding:"12px 0px 12px 30px",
                fontSize:'13px',
                fontWeight:550,
                color:'#636873'
              }
            }
          }
        }
    })

    
    const columns = [
        {
            name:"id",
            label:"Photo",
            options:{
                customBodyRender: () => (
                    <img className="w-[31px]" src={`https://avatar.iran.liara.run/public/`+Math.floor(Math.random() * 101)} alt=""></img>
                )
            }
        },
        {
            name:"id",
            label:"Id"
        },
        {
            name:`attributes.firstName`,
            label:"First Name"
        },
        {
            name:"attributes.lastName",
            label:"Last Name"
        },
        {
            name:"attributes.parentEmailId",
            label:"Email"
        },
        {
            name:"attributes.parentContactNo",
            label:"Phone"
        },
        {
            name:"attributes.dob",
            label:"Year of birth"
        },
    ]

    const options = {
        pagination: false,
        download: false,
        print: false,
        search: false,
        viewColumns: false,
        filter: false,
        sort: false,
        selectableRows: 'none',
        elevation:0,
        enableNestedDataAccess:"."
    }

    return(
        <div className="border-2 rounded-sm mx-4 mt-8 mb-4 h-[500px]">
            <ThemeProvider theme={getMuiTheme}>
            <MUIDataTable data={details} columns={columns} options={options} />
            </ThemeProvider>
        </div>
    )
}