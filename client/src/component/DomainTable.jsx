import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const DomainTable = ({toggleSitePanel}) => {
    const { columns, rows } = useSelector(store=>store.navListSlice)
    return ( 
        <>
        <IconButton aria-label="toggle" onClick={toggleSitePanel}>
         <MenuIcon />
        </IconButton>
        <h1>Domain Table</h1>
        
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
        </>
     );
}
 
export default DomainTable;